import React, { useState, useEffect } from "react";
import LoadingPage from "../../pages/LoadingPage/LoadingPage"; // Adjust the path as per your project structure
import "./Estimation.css";
import { useLocation } from "react-router-dom";

function Estimation() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Destructure the data passed through state
  const {
    websiteType,
    logoAndContent,
    platform,
    tabletSupport,
  } = location.state || {};

  // Calculate price based on the questionnaire type
  let price = 0;

  if (websiteType) {
    // Pricing logic for website
    price = websiteType === "Single Page Static" && logoAndContent === "Yes" ? 599 : 899;
  } else if (platform) {
    // Pricing logic for mobile apps
    const basePrice = 6000; // Minimum price for apps
    const platformMultiplier = platform === "Android/iOS" ? 1.5 : 1.2; // Higher cost for dual platform
    const tabletSupportCost = tabletSupport === "Yes" ? 1000 : 0; // Additional cost for tablet support
    price = basePrice * platformMultiplier + tabletSupportCost;
  }

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
            {websiteType && (
              <>
                <li>Custom Website Design tailored to your business needs.</li>
                <li>Responsive Layout for mobile, tablet, and desktop.</li>
                <li>SEO-Friendly Development to boost search engine visibility.</li>
                <li>Secure and Reliable Hosting with server maintenance.</li>
                <li>Fast Loading Speed optimized for performance.</li>
                <li>Dedicated Support for one month post-launch.</li>
              </>
            )}
            {platform && (
              <>
                <li>Custom Mobile App Design for {platform} platform(s).</li>
                <li>Responsive Layout for mobile and tablet (if selected).</li>
                <li>Scalable Architecture for future growth.</li>
                <li>Secure Data Handling and Authentication.</li>
                <li>One Month Free Maintenance and Bug Fixing.</li>
              </>
            )}
          </ul>
        </div>
        <div className="estimation-card-bottom">
          <h2>$ {price.toFixed(2)}</h2>
          {websiteType && <h4>Includes Website Development and Server Maintenance</h4>}
          {platform && <h4>Includes App Development and Tablet Support</h4>}
        </div>
      </div>
    </div>
  );
}

export default Estimation;
