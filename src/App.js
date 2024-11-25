// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import WebsiteQuestionare from './pages/WebsiteQuestianair/WebsiteQuestionare';
import Estimation from "./pages/Estimation/Estimation";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/website-questionnaire" element={<WebsiteQuestionare />} /> 
        <Route path="/estimation" element={<Estimation />} />
      </Routes>
    </Router>
  );
}

export default App;