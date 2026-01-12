import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contents from './pages/Contents';
import Topic from './pages/Topic';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  return (
    <Router basename="/Edward-s-codes">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
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
