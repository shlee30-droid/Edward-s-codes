import React from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../data';

const Home: React.FC = () => {
  const totalLessons = topics[0]?.sections.length || 10;
  const totalQuizzes = topics[0]?.quizzes.length || 50;

  return (
    <div className="page home">
      {/* Hero Section */}
      <header className="hero text-center">
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 900 }}>
          Systems of Equations
        </h2>
        <p style={{ fontSize: '1.3rem', color: '#a855f7', marginBottom: '2rem', fontWeight: 600 }}>
          Master Linear Algebra • {totalLessons} Interactive Lessons • Comprehensive Quizzes
        </p>
        <p style={{ fontSize: '1.1rem', color: '#e0e0e0', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          A complete course covering fundamental concepts, solution methods, and practical applications of systems of linear equations.
        </p>
        
        {/* Stats Cards */}
        <div className="stats-container">
          <div className="stat-card" style={{ background: 'rgba(0, 255, 255, 0.1)', borderColor: 'rgba(0, 255, 255, 0.4)' }}>
            <div className="stat-number" style={{ color: '#00ffff' }}>{totalLessons}</div>
            <div className="stat-label">Lessons</div>
          </div>
          <div className="stat-card" style={{ background: 'rgba(255, 0, 255, 0.1)', borderColor: 'rgba(255, 0, 255, 0.4)' }}>
            <div className="stat-number" style={{ color: '#ff00ff' }}>{totalQuizzes}</div>
            <div className="stat-label">Quizzes</div>
          </div>
          <div className="stat-card" style={{ background: 'rgba(255, 255, 0, 0.1)', borderColor: 'rgba(255, 255, 0, 0.4)' }}>
            <div className="stat-number" style={{ color: '#ffff00' }}>3D</div>
            <div className="stat-label">Mind Map</div>
          </div>
        </div>
      </header>

      {/* Lessons List */}
      <section className="lessons-section" style={{ marginTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📚 Complete Course Curriculum</h2>
        <div className="lessons-grid">
          {topics[0]?.sections.map((section) => (
            <div key={section.id} className="lesson-card">
              <Link to={`/topic/${section.id}`}>
                <div className="lesson-number">{section.id}</div>
                <span className="lesson-title">{section.title}</span>
                <span className="lesson-summary">{section.content}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center" style={{ marginTop: '4rem', marginBottom: '3rem' }}>
        <Link to="/contents" className="btn quiz-button">
          <span>🚀 Start Learning</span>
          <span>→</span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="home-footer text-center" style={{ 
        padding: '2rem', 
        background: 'rgba(20, 20, 40, 0.6)', 
        borderRadius: '20px',
        border: '1px solid rgba(0, 212, 255, 0.2)'
      }}>
        <p style={{ marginBottom: '1rem', fontSize: '1rem', color: '#d0d0d0' }}>
          📧 Questions? Contact: <strong style={{ color: '#00d4ff' }}>010-5103-3405</strong>,{' '}
          <a href="mailto:shlee110115@gmail.com" style={{ color: '#a855f7', textDecoration: 'none' }}>shlee110115@gmail.com</a>,{' '}
          or <strong style={{ color: '#00d4ff' }}>@eddieweirdo13</strong> on Instagram
        </p>
        <p style={{ fontSize: '0.9rem', color: '#999' }}>
          <strong>Developer:</strong> Edward Lee |{' '}
          <a href="https://github.com/shlee30-droid/Edward-s-codes" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7', textDecoration: 'none' }}>
            GitHub Repository
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;

