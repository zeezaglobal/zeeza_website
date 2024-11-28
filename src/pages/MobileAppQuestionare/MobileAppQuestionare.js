import React, { useState } from "react";
import LargeButton from "../../components/Buttons/LargeButton";
import colors from "../../Resourses/colors";
import "./MobileAppQuestionare.css";
import { useNavigate } from "react-router-dom";

function MobileAppQuestionare() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
  const [logoAndContent, setLogoAndContent] = useState("");
  const [tabletSupport, setTabletSupport] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleLogoAndContentChange = (event) => {
    setLogoAndContent(event.target.value);
  };

  const handleTabletSupportChange = (event) => {
    setTabletSupport(event.target.value);
  };

  const handleViewEstimateClick = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!platform || !logoAndContent || !tabletSupport) {
      alert(
        "Please select all options, including platform, logo and content, and tablet support."
      );
      return;
    }

 

    // Navigate to the estimation page and pass data
    navigate("/Estimation", {
      state: { email, platform, logoAndContent, tabletSupport },
    });
  };

  return (
    <div className="mobile-app-questionare-container">
      <div className="large-text-container">
        <h1 style={{ color: "black" }}>
          Answer Few Questions to Get Free Quote.
        </h1>
        <h5 style={{ color: colors.grey, fontWeight: 400 }}>
          One more step to see your quote.
        </h5>
      </div>

      {/* Email field */}
      <div style={{ margin: "20px 0" }}>
        <label
          style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}
        >
          Enter Your Email
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Platform type dropdown */}
      <div style={{ margin: "20px 0" }}>
        <label
          style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}
        >
          Which platform do you need the app for?
        </label>
        <select
          value={platform}
          onChange={handlePlatformChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">-- Select Platform --</option>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
          <option value="Android/iOS">Android/iOS</option>
        </select>
      </div>

      {/* Logo and content dropdown */}
      <div style={{ margin: "20px 0" }}>
        <label
          style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}
        >
          Will you be providing the logo and app content?
        </label>
        <select
          value={logoAndContent}
          onChange={handleLogoAndContentChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">-- Select Yes or No --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Tablet support dropdown */}
      <div style={{ margin: "20px 0" }}>
        <label
          style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}
        >
          Do you need support for tablets?
        </label>
        <select
          value={tabletSupport}
          onChange={handleTabletSupportChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">-- Select Yes or No --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* View estimate button */}
      <div style={{ marginTop: "30px" }}>
        <LargeButton
          label="View Estimate"
          onClick={handleViewEstimateClick}
          textColor={colors.white}
          fillColor={colors.teal}
          strokeColor={colors.white}
        />
      </div>
    </div>
  );
}

export default MobileAppQuestionare;
