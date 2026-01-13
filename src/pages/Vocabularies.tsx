import React from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../data';

const Vocabularies: React.FC = () => {
  const systemsOfEquations = topics[0];
  const sections = systemsOfEquations.sections;

  return (
    <div className="page vocabularies" style={{ 
      minHeight: '100vh',
      paddingBottom: '80px',
      background: 'transparent',
    }}>
      {/* Floating Badge */}
      <div style={{
        position: 'absolute',
        top: '40px',
        right: '40px',
        background: 'linear-gradient(135deg, #ff006e, #a855f7)',
        padding: '12px 24px',
        borderRadius: '30px',
        fontSize: '14px',
        fontWeight: 700,
        color: 'white',
        boxShadow: '0 8px 32px rgba(255, 0, 110, 0.4)',
        animation: 'floatBadge 3s ease-in-out infinite',
        transform: 'translateZ(50px)',
      }}>
        📚 VOCABULARY BANK
      </div>

      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        transform: 'translateZ(40px)',
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #ff006e, #a855f7, #00d4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          letterSpacing: '-0.02em',
        }}>
          📖 Vocabulary Guide
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          Master essential terms and definitions for all {sections.length} lessons
        </p>
      </div>

      {/* Vocabularies Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        perspective: '1500px',
      }}>
        {sections.map((section) => {
          return (
            <Link
              key={section.id}
              to={`/vocabulary/${section.id}`}
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  transform: 'translateZ(0)',
                  willChange: 'transform, box-shadow',
                  backfaceVisibility: 'hidden',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-10px) scale(1.02)';
                  el.style.boxShadow = '0 25px 70px rgba(255, 0, 110, 0.4), inset 0 0 60px rgba(168, 85, 247, 0.1)';
                  el.style.borderColor = 'rgba(255, 0, 110, 0.4)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateZ(0)';
                  el.style.boxShadow = '';
                  el.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Gradient Background Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(168, 85, 247, 0.1))',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                }} />

                {/* Lesson Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #ff006e, #a855f7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: 'white',
                  boxShadow: '0 5px 20px rgba(255, 0, 110, 0.5)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}>
                  {section.id}
                </div>

                {/* Content */}
                <div style={{ paddingRight: '60px' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    marginBottom: '12px',
                    background: 'linear-gradient(135deg, #ff006e, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.3,
                  }}>
                    {section.title}
                  </h3>
                  
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}>
                    {section.content.substring(0, 80)}...
                  </p>

                  {/* Concepts Count */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255, 0, 110, 0.15)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#ff006e',
                    border: '1px solid rgba(255, 0, 110, 0.3)',
                  }}>
                    <span>📝</span>
                    <span>{section.concepts.length} Key Terms</span>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  fontSize: '1.5rem',
                  opacity: 0.5,
                  transition: 'all 0.3s ease',
                }}>
                  →
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Info Section */}
      <div style={{
        marginTop: '80px',
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(168, 85, 247, 0.1))',
        borderRadius: '30px',
        border: '2px solid rgba(255, 0, 110, 0.3)',
        textAlign: 'center',
      }}>
        <h3 style={{
          fontSize: '2rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #ff006e, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px',
        }}>
          🎯 Build Your Math Vocabulary
        </h3>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: 1.8,
        }}>
          Understanding key terms is essential for mastering systems of equations. 
          Each lesson includes carefully curated vocabulary to strengthen your mathematical fluency.
        </p>
      </div>
    </div>
  );
};

export default Vocabularies;
