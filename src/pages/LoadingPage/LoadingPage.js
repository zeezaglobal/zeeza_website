import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
}

export default LoadingPage;