// src/pages/LandingPage.js
import React from "react";
import LargeButton from "../../components/Buttons/LargeButton";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Optional if you want custom styles for the landing page

import colors from "../../Resourses/colors";


function LandingPage() {


  const navigate = useNavigate();

  const handleWebsiteButtonClick = () => {
    navigate("/Website-questionnaire"); // Navigate to the website questionnaire
  };
  const handleAppButtonClick= () => {
    navigate("/Mobile-questionare"); // Navigate to the website questionnaire
  };


  return (
    <div className="landing-main-container">
   

      <div className="landing-container">
      <div className="large-text-container">
          <h1 style={{ color: colors.white, fontWeight: "500" }}>
            Let's Grow Your Business
          </h1>
        </div>
        <div className="small-text-container">
          <h5 style={{ color: colors.white, fontWeight: "100" }}>
            Helping Winnipeg’s Small Businesses Thrive Online! Affordable Website 
            and App Development. Get a free design demo, only pay when satisfied—flexible packages 
            made for your budget and vision.
          </h5>
        </div>
        <div className="buttons-div-container">
          <LargeButton
            label="Looking for a Website?"
            onClick={handleWebsiteButtonClick}
            textColor={colors.white}
            fillColor={colors.teal}
            strokeColor={colors.white}
          />
          <LargeButton
            label="Looking for an App?"
            onClick={handleAppButtonClick}
            textColor={colors.black}
            fillColor={colors.white}
            strokeColor={colors.teal}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;