// src/pages/LandingPage.js
import React from 'react';
import LargeButton from '../../components/Buttons/LargeButton';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Optional if you want custom styles for the landing page

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <LargeButton label="Go to Page 1" onClick={() => navigate('/page1')} />
      <LargeButton label="Go to Page 2" onClick={() => navigate('/page2')} />
    </div>
  );
}

export default LandingPage;