import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics } from '../data';
import type { Section } from '../types';

const Vocabulary: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const sectionId = parseInt(topicId || '1');
  
  const topic = topics[0];
  const section = topic?.sections.find((s: Section) => s.id === sectionId);

  if (!section) {
    return (
      <div className="page error text-center">
        <h1>Vocabulary Not Found</h1>
        <Link to="/vocabularies" className="btn">
          Back to Vocabularies
        </Link>
      </div>
    );
  }

  return (
    <div className="page vocabulary" style={{ 
      perspective: '1500px', 
      transformStyle: 'preserve-3d',
      paddingBottom: '80px',
    }}>
      {/* Header */}
      <div className="vocabulary-header" style={{
        textAlign: 'center',
        marginBottom: '3rem',
        position: 'relative',
        padding: '2.5rem',
        background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.15), rgba(168, 85, 247, 0.15))',
        borderRadius: '30px',
        border: '2px solid rgba(255, 0, 110, 0.4)',
        transform: 'translateZ(50px)',
        transition: 'transform 0.3s ease',
      }}>
        <div className="lesson-number" style={{
          position: 'absolute',
          top: '-25px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90px',
          height: '90px',
          background: 'linear-gradient(135deg, #ff006e, #a855f7)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.8rem',
          fontWeight: 900,
          color: '#fff',
          boxShadow: '0 12px 50px rgba(255, 0, 110, 0.6)',
          animation: 'float 3s ease-in-out infinite',
          border: '3px solid rgba(255, 255, 255, 0.3)',
        }}>
          {sectionId}
        </div>
        <h2 style={{ 
          fontSize: '3rem', 
          marginTop: '2.5rem', 
          marginBottom: '0.8rem',
          background: 'linear-gradient(135deg, #ff006e, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 900,
        }}>
          {section.title}
        </h2>
        <p style={{ fontSize: '1.3rem', color: '#ff006e', fontWeight: 700 }}>
          📖 Vocabulary & Key Terms
        </p>
      </div>

      {/* Overview Card */}
      <div className="summary-card" style={{
        position: 'relative',
        padding: '2.5rem',
        marginBottom: '3rem',
        background: 'rgba(20, 20, 50, 0.9)',
        borderRadius: '25px',
        border: '2px solid rgba(255, 0, 110, 0.4)',
        transform: 'translateZ(30px)',
        transition: 'all 0.4s ease',
        overflow: 'hidden',
      }}>
        <h3 style={{ 
          color: '#ff006e', 
          fontSize: '1.9rem', 
          marginBottom: '1.2rem',
          fontWeight: 800,
        }}>
          📌 Lesson Overview
        </h3>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#e5e5e5' }}>
          {section.content}
        </p>
      </div>

      {/* Key Terms Section */}
      <div className="vocabulary-terms" style={{
        marginBottom: '3rem',
        padding: '2.5rem',
        background: 'rgba(255, 0, 110, 0.05)',
        borderRadius: '25px',
        transform: 'translateZ(20px)',
      }}>
        <h3 style={{ 
          color: '#a855f7', 
          fontSize: '2.2rem', 
          marginBottom: '2rem', 
          textAlign: 'center',
          fontWeight: 900,
        }}>
          💡 Essential Vocabulary
        </h3>
        <div style={{ 
          display: 'grid',
          gap: '1.5rem',
        }}>
          {section.concepts.map((concept: string, index: number) => (
            <div
              key={index}
              className="vocab-item"
              style={{
                position: 'relative',
                padding: '2rem 2rem 2rem 5rem',
                background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(168, 85, 247, 0.1))',
                borderRadius: '20px',
                border: '2px solid rgba(255, 0, 110, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px) scale(1.01)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 110, 0.6)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 0, 110, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 110, 0.3)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Term Number Badge */}
              <div style={{
                position: 'absolute',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #ff006e, #a855f7)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 900,
                fontSize: '1.2rem',
                boxShadow: '0 4px 15px rgba(255, 0, 110, 0.5)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}>
                {index + 1}
              </div>
              
              <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: '#e5e5e5',
                margin: 0,
              }}>
                {concept}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        marginTop: '3rem',
        flexWrap: 'wrap',
      }}>
        <Link 
          to="/vocabularies" 
          className="btn"
          style={{
            padding: '1.2rem 2.5rem',
            background: 'linear-gradient(135deg, #ff006e, #a855f7)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 800,
            fontSize: '1.1rem',
            boxShadow: '0 10px 30px rgba(255, 0, 110, 0.5)',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          ← Back to Vocabularies
        </Link>
        <Link 
          to={`/topic/${sectionId}`}
          className="btn"
          style={{
            padding: '1.2rem 2.5rem',
            background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 800,
            fontSize: '1.1rem',
            boxShadow: '0 10px 30px rgba(0, 212, 255, 0.5)',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          📚 View Full Lesson
        </Link>
      </div>
    </div>
  );
};

export default Vocabulary;
