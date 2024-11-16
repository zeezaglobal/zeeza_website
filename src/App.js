// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;