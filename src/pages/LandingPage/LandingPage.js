// src/pages/LandingPage.js
import React from "react";
import LargeButton from "../../components/Buttons/LargeButton";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Optional if you want custom styles for the landing page
import LargeText from "../../components/Texts/LargeText";
import colors from "../../Resourses/colors";
import SmallText from "../../components/Texts/SmallText";
import TextButton from "../../components/Buttons/TextButton";
function LandingPage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  const handleClick = () => {
    alert("Text button clicked!");
  };

  return (
    <div className="landing-main-container">
      <div className="top-nav-bar">
        <TextButton text="Click Me" textColor="#007474" onClick={handleClick} />
      </div>

      <div className="landing-container">
        <div className="large-text-container">
          <LargeText
            text="Lets Grow your "
            color={colors.white}
            fontWeight="50"
          />
          <LargeText text="Business" color={colors.white} fontWeight="500" />
        </div>
        <div className="small-text-container">
          <SmallText
            text="Helping Winnipeg’s Small Businesses Thrive Online! Affordable Website and App Development.Get a free design demo, only pay when satisfied—flexible packages made for your budget and vision."
            color={colors.white}
            fontWeight="100"
          />
        </div>
        <div className="buttons-div-container">
          <LargeButton
            label="Looking for a Website?"
            onClick={() => console.log("Button clicked!")}
            textColor={colors.white}
            fillColor={colors.teal}
            strokeColor={colors.white}
          />
          <LargeButton
            label="Looking for an App?"
            onClick={() => console.log("Button clicked!")}
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
