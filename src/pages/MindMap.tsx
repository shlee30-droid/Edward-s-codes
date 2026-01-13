import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { topics } from '../data';

// 3D Node class
class Node3D {
  lesson: { id: number; title: string; color: string };
  index: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  x: number;
  y: number;
  z: number;
  floatOffset: number;
  floatSpeed: number;
  orbitSpeed: number;
  orbitAngle: number;
  size: number;
  hovered: boolean;
  scale: number;
  pulsePhase: number;
  rotationX: number;
  rotationY: number;
  isDarkMode: boolean;
  ctx: CanvasRenderingContext2D;

  constructor(
    lesson: { id: number; title: string; color: string },
    index: number,
    total: number,
    ctx: CanvasRenderingContext2D,
    rotationXRef: { current: number },
    rotationYRef: { current: number },
    isDarkModeRef: { current: boolean }
  ) {
    this.lesson = lesson;
    this.index = index;
    this.ctx = ctx;
    this.rotationX = rotationXRef.current;
    this.rotationY = rotationYRef.current;
    this.isDarkMode = isDarkModeRef.current;
    
    // Position nodes in a circular 3D formation
    const angle = (index / total) * Math.PI * 2;
    const radius = 280;
    const heightVariation = Math.sin(angle * 3) * 100;
    
    this.baseX = Math.cos(angle) * radius;
    this.baseY = Math.sin(angle) * radius;
    this.baseZ = heightVariation;
    
    this.x = this.baseX;
    this.y = this.baseY;
    this.z = this.baseZ;
    
    // Animation properties
    this.floatOffset = Math.random() * Math.PI * 2;
    this.floatSpeed = 0.02 + Math.random() * 0.01;
    this.orbitSpeed = 0.001 + Math.random() * 0.0005;
    this.orbitAngle = angle;
    
    this.size = 40;
    this.hovered = false;
    this.scale = 1;
    this.pulsePhase = Math.random() * Math.PI * 2;
  }

  update(time: number) {
    // Floating animation
    const floatY = Math.sin(time * this.floatSpeed + this.floatOffset) * 15;
    const floatZ = Math.cos(time * this.floatSpeed + this.floatOffset) * 10;
    
    // Orbital movement
    this.orbitAngle += this.orbitSpeed;
    const orbitRadius = 280 + Math.sin(time * 0.001) * 25;
    
    this.x = Math.cos(this.orbitAngle) * orbitRadius;
    this.y = Math.sin(this.orbitAngle) * orbitRadius + floatY;
    this.z = Math.sin(this.orbitAngle * 3) * 100 + floatZ;
    
    // Pulse animation
    this.pulsePhase += 0.05;
    const pulseScale = 1 + Math.sin(this.pulsePhase) * 0.1;
    this.scale = this.hovered ? 1.3 : pulseScale;
  }

  project(width: number, height: number, rotX: number, rotY: number) {
    const perspective = 1000;
    const rotatedX = this.x * Math.cos(rotY) - this.z * Math.sin(rotY);
    const rotatedZ = this.x * Math.sin(rotY) + this.z * Math.cos(rotY);
    const rotatedY = this.y * Math.cos(rotX) - rotatedZ * Math.sin(rotX);
    const finalZ = this.y * Math.sin(rotX) + rotatedZ * Math.cos(rotX);
    
    const scale = perspective / (perspective + finalZ);
    const screenX = rotatedX * scale + width / 2;
    const screenY = rotatedY * scale + height / 2;
    
    return { x: screenX, y: screenY, scale, z: finalZ };
  }

  draw(projected: { x: number; y: number; scale: number; z: number }, isDark: boolean) {
    const ctx = this.ctx;
    const actualSize = this.size * projected.scale * this.scale;
    
    // Glow effect
    const gradient = ctx.createRadialGradient(
      projected.x, projected.y, 0,
      projected.x, projected.y, actualSize * 1.5
    );
    
    const color = this.lesson.color;
    gradient.addColorStop(0, color + (isDark ? 'ff' : 'dd'));
    gradient.addColorStop(0.5, color + (isDark ? 'aa' : '88'));
    gradient.addColorStop(1, color + '00');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, actualSize * 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Core sphere with 3D effect
    const coreGradient = ctx.createRadialGradient(
      projected.x - actualSize * 0.3, projected.y - actualSize * 0.3, 0,
      projected.x, projected.y, actualSize
    );
    coreGradient.addColorStop(0, '#ffffff');
    coreGradient.addColorStop(0.3, color);
    coreGradient.addColorStop(1, this.darkenColor(color, 0.5));
    
    ctx.fillStyle = coreGradient;
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, actualSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Rim highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2 * projected.scale;
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, actualSize, 0, Math.PI * 2);
    ctx.stroke();
    
    // Lesson number
    ctx.fillStyle = 'white';
    ctx.font = `bold ${Math.floor(16 * projected.scale * this.scale)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(this.lesson.id), projected.x, projected.y);
    
    // Extra glow when hovered
    if (this.hovered) {
      ctx.strokeStyle = color + '88';
      ctx.lineWidth = 3 * projected.scale;
      ctx.beginPath();
      ctx.arc(projected.x, projected.y, actualSize * 1.2, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  darkenColor(color: string, factor: number) {
    const hex = color.replace('#', '');
    const r = Math.floor(parseInt(hex.substr(0, 2), 16) * factor);
    const g = Math.floor(parseInt(hex.substr(2, 2), 16) * factor);
    const b = Math.floor(parseInt(hex.substr(4, 2), 16) * factor);
    return `rgb(${r}, ${g}, ${b})`;
  }

  isHovered(mx: number, my: number, projected: { x: number; y: number; scale: number }) {
    const dx = mx - projected.x;
    const dy = my - projected.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.size * projected.scale * this.scale;
  }
}

const MindMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Lesson data with colors
    const lessons = topics[0].sections.map((section, index) => ({
      id: section.id,
      title: section.title,
      color: [
        '#7877c6', '#9d8df1', '#b695f8', '#8b7ec8', '#a594e8',
        '#7877c6', '#9d8df1', '#b695f8', '#8b7ec8', '#a594e8'
      ][index]
    }));

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = 0;
    let mouseY = 0;
    const rotationXRef = { current: 0 };
    const rotationYRef = { current: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;
    const isDarkModeRef = { current: isDarkMode };

    // Create nodes
    const nodes = lessons.map((lesson, i) => 
      new Node3D(lesson, i, lessons.length, ctx, rotationXRef, rotationYRef, isDarkModeRef)
    );

    // Tooltip
    const tooltip = document.getElementById('mindmap-tooltip');
    let hoveredNode: Node3D | null = null;

    // Animation loop
    let time = 0;
    let animationId: number;

    function animate() {
      time++;
      
      // Smooth rotation
      rotationXRef.current += (targetRotationX - rotationXRef.current) * 0.1;
      rotationYRef.current += (targetRotationY - rotationYRef.current) * 0.1;
      isDarkModeRef.current = isDarkMode;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update nodes
      nodes.forEach(node => node.update(time));
      
      // Project and sort by depth
      const projected = nodes.map(node => ({
        node,
        projected: node.project(width, height, rotationXRef.current, rotationYRef.current)
      })).sort((a, b) => a.projected.z - b.projected.z);
      
      // Draw connections
      ctx.strokeStyle = isDarkMode ? 'rgba(120, 119, 198, 0.3)' : 'rgba(102, 126, 234, 0.3)';
      ctx.lineWidth = 2;
      for (let i = 0; i < projected.length; i++) {
        const next = (i + 1) % projected.length;
        const p1 = projected[i].projected;
        const p2 = projected[next].projected;
        
        // Gradient line
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        gradient.addColorStop(0, projected[i].node.lesson.color + '60');
        gradient.addColorStop(1, projected[next].node.lesson.color + '60');
        ctx.strokeStyle = gradient;
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
      
      // Draw nodes
      projected.forEach(({ node, projected: proj }) => {
        node.draw(proj, isDarkMode);
      });
      
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Update rotation based on mouse
      targetRotationX = ((mouseY / height) - 0.5) * 0.5;
      targetRotationY = ((mouseX / width) - 0.5) * 0.5;
      
      // Check hover
      hoveredNode = null;
      nodes.forEach(node => {
        const proj = node.project(width, height, rotationXRef.current, rotationYRef.current);
        node.hovered = node.isHovered(mouseX, mouseY, proj);
        if (node.hovered) hoveredNode = node;
      });
      
      // Show tooltip
      if (hoveredNode && tooltip) {
        tooltip.textContent = `Lesson ${hoveredNode.lesson.id}: ${hoveredNode.lesson.title}`;
        tooltip.style.left = (e.clientX + 20) + 'px';
        tooltip.style.top = (e.clientY - 40) + 'px';
        tooltip.style.opacity = '1';
        canvas.style.cursor = 'pointer';
      } else if (tooltip) {
        tooltip.style.opacity = '0';
        canvas.style.cursor = 'default';
      }
    };

    const handleMouseLeave = () => {
      nodes.forEach(node => node.hovered = false);
      if (tooltip) tooltip.style.opacity = '0';
      targetRotationX = 0;
      targetRotationY = 0;
    };

    const handleClick = () => {
      if (hoveredNode) {
        navigate(`/topic/${hoveredNode.lesson.id}`);
      }
    };

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [navigate, isDarkMode]);

  return (
    <div className="page mindmap-page" style={{ minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        transform: 'translateZ(40px)',
      }}>
        <h2 style={{
          color: '#00d4ff',
          fontSize: '3rem',
          marginBottom: '0.5rem',
          textShadow: '0 0 30px rgba(0, 212, 255, 0.6)',
        }}>
          🌌 3D Mind Map
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#e5e5e5',
          fontSize: '1.2rem',
          marginBottom: '2rem',
        }}>
          Explore lessons in interactive 3D space
        </p>
      </div>

      {/* Canvas Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        minHeight: '700px',
        perspective: '2500px',
        overflow: 'hidden',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(20, 0, 40, 0.9))',
        border: '3px solid rgba(0, 212, 255, 0.5)',
        boxShadow: 'inset 0 0 100px rgba(0, 212, 255, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5)',
      }}>
        {/* Day/Night Toggle */}
        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            background: isDarkMode ? 'linear-gradient(135deg, #FDB813 0%, #FF6B35 100%)' : 'linear-gradient(135deg, #4B0082 0%, #191970 100%)',
            borderRadius: '12px',
            cursor: 'pointer',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isDarkMode ? '0 8px 24px rgba(253, 184, 19, 0.4)' : '0 8px 24px rgba(75, 0, 130, 0.4)',
            transition: 'all 0.5s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          {isDarkMode ? (
            <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="21" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="1" y1="12" x2="3" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="21" y1="12" x2="23" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
          }}
        />

        {/* Tooltip */}
        <div
          id="mindmap-tooltip"
          style={{
            position: 'fixed',
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.95), rgba(168, 85, 247, 0.95))',
            color: '#fff',
            padding: '15px 25px',
            borderRadius: '15px',
            fontWeight: 700,
            fontSize: '15px',
            pointerEvents: 'none',
            opacity: 0,
            transition: 'all 0.3s ease',
            zIndex: 999,
            boxShadow: '0 15px 50px rgba(0, 212, 255, 0.6)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(20px)',
            transform: 'translateZ(100px)',
          }}
        />
      </div>

      {/* Info Panel */}
      <div style={{
        position: 'relative',
        marginTop: '2.5rem',
        padding: '3rem',
        background: 'linear-gradient(135deg, rgba(0, 20, 40, 0.9), rgba(20, 0, 40, 0.9))',
        borderRadius: '30px',
        border: '3px solid rgba(0, 212, 255, 0.5)',
        transform: 'translateZ(30px)',
        transition: 'all 0.4s ease',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 50px rgba(0, 212, 255, 0.1)',
      }}>
        <h3 style={{
          color: '#00d4ff',
          fontSize: '2.2rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
          textShadow: '0 0 30px rgba(0, 212, 255, 0.7)',
          fontWeight: 900,
        }}>
          🎮 Interactive Controls
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}>
          {[
            { icon: '🖱️', title: 'Rotate', desc: 'Move your mouse to rotate the 3D space' },
            { icon: '👆', title: 'Hover', desc: 'See lesson details on floating nodes' },
            { icon: '🎯', title: 'Click', desc: 'Jump directly to any lesson' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(168, 85, 247, 0.15))',
                borderRadius: '20px',
                border: '2px solid rgba(0, 212, 255, 0.4)',
                textAlign: 'center',
                transform: 'translateZ(20px)',
                transition: 'all 0.4s ease',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                animation: 'iconFloat 3s ease-in-out infinite',
                filter: 'drop-shadow(0 5px 15px rgba(0, 212, 255, 0.5))',
              }}>
                {item.icon}
              </div>
              <p style={{
                color: '#e5e5e5',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}>
                <strong style={{
                  color: '#00d4ff',
                  fontWeight: 900,
                  fontSize: '1.15rem',
                }}>
                  {item.title}:
                </strong> {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MindMap;
