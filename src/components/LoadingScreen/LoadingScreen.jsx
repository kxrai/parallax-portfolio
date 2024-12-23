import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-screen">
      <div className="loading-bar">
        <div
          className="loading-bar-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
