import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contents from './pages/Contents';
import Topic from './pages/Topic';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import MindMap from './pages/MindMap';

function App() {
  return (
    <Router basename="/Edward-s-codes">
      <div className="app">
        {/* Navigation Header */}
        <header style={{
          background: 'rgba(10, 10, 30, 0.95)',
          borderBottom: '2px solid rgba(0, 212, 255, 0.3)',
          padding: '1rem 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backdropFilter: 'blur(20px)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Link to="/" style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
            }}>
              Middle School Systems of Equations
            </Link>
            <nav style={{
              display: 'flex',
              gap: '2rem',
            }}>
              <Link to="/" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.3s ease',
              }}>Home</Link>
              <Link to="/mindmap" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.3s ease',
              }}>S.O.E Mind-map</Link>
              <Link to="/contents" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color 0.3s ease',
              }}>Lessons</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mindmap" element={<MindMap />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/topic/:topicId" element={<Topic />} />
          <Route path="/quiz/:topicId" element={<Quiz />} />
          <Route path="/result/:topicId" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
