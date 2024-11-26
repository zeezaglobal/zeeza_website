import React, { useState, useEffect } from "react";
import LoadingPage from "../../pages/LoadingPage/LoadingPage"; // Adjust the path as per your project structure
import "./Estimation.css";
import { useLocation } from "react-router-dom";

function Estimation() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { websiteType, logoAndContent } = location.state || {};
  const price = websiteType === "Single Page Static" && logoAndContent === "Yes" ? 599 : 899;

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or calculating estimation)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (isLoading) {
    // Use the LoadingPage component while loading
    return <LoadingPage />;
  }

  return (
    <div className="estimation-page">
    <div className="estimation-header">
      <h1>Your Quote is Ready</h1>
      <h4>Your personalized quote is below</h4>
    </div>
  
    <div className="estimation-card">
      <div className="estimation-card-top">
        <h3>What’s Included in Your Package:</h3>
        <ul className="estimation-list">
          <li>Custom Website Design tailored to your business needs.</li>
          <li>Responsive Layout for mobile, tablet, and desktop.</li>
          <li>SEO-Friendly Development to boost search engine visibility.</li>
          <li>Secure and Reliable Hosting with server maintenance.</li>
          <li>Fast Loading Speed optimized for performance.</li>
          <li>Dedicated Support for one month post-launch.</li>
        </ul>
      </div>
      <div className="estimation-card-bottom">
        <h2>$ {price}</h2>
        <h4>and</h4>
        <h3>Server Maintenance Cost</h3>
      </div>
    </div>
  </div>
  );
}

export default Estimation;