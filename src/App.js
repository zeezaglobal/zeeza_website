// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import WebsiteQuestionare from './pages/WebsiteQuestianair/WebsiteQuestionare';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/website-questionnaire" element={<WebsiteQuestionare />} /> 
      </Routes>
    </Router>
  );
}

export default App;