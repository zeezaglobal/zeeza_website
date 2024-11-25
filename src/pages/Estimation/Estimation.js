import React, { useState, useEffect } from "react";
import LoadingPage from "../../pages/LoadingPage/LoadingPage"; // Adjust the path as per your project structure
import "./Estimation.css";
import { useLocation } from "react-router-dom";
function Estimation() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { websiteType, logoAndContent } = location.state || {};
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
    <div className="estimation-container">
      <h1>Estimation Results</h1>
      <p>Website Type: {websiteType}</p>
      <p>Logo and Content Provided: {logoAndContent}</p>

    </div>
  );
}

export default Estimation;