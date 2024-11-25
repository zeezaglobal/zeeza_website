import React, { useState } from "react";
import LargeText from "../../components/Texts/LargeText";
import SmallText from "../../components/Texts/SmallText";
import LargeButton from "../../components/Buttons/LargeButton";
import colors from "../../Resourses/colors";
import "./WebsiteQuestionare.css";

function WebsiteQuestionare() {
  const [websiteType, setWebsiteType] = useState("");
  const [logoAndContent, setLogoAndContent] = useState("");

  const handleWebsiteTypeChange = (event) => {
    setWebsiteType(event.target.value);
  };

  const handleLogoAndContentChange = (event) => {
    setLogoAndContent(event.target.value);
  };

  const handleViewEstimateClick = () => {
    if (!websiteType || !logoAndContent) {
      alert("Please select both the website type and whether you'll provide the logo and content.");
      return;
    }
  
    console.log({
      websiteType,
      logoAndContent,
    });
    alert("Estimate will be generated based on your inputs!");
  };

   
    return (
      <div className="website-questionare-container">
      
        <div className="large-text-container">
          <LargeText
            text="Answer Few Questions to Get Free Estimate."
            color={colors.black}
            fontWeight="400"
          />
        </div>
    
     
        <SmallText
          text="One more step to see your quote."
          color={colors.grey}
          fontWeight="400"
        />
    
       
        <div style={{ margin: "20px 0" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}>
            Which type of website do you need?
          </label>
          <select
            value={websiteType}
            onChange={handleWebsiteTypeChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="">-- Select Website Type --</option>
            <option value="Single Page Static">Single Page Static</option>
            <option value="Multiple Page Static">Multiple Page Static</option>
            <option value="Appointment Booking System">Appointment Booking System</option>
            <option value="E-commerce Store">E-commerce Store</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Blog or News Website">Blog or News Website</option>
            <option value="Membership System">Membership System</option>
          </select>
        </div>
    
        
        <div style={{ margin: "20px 0" }}>
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}>
            Will you be providing the logo and website content?
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

export default WebsiteQuestionare;