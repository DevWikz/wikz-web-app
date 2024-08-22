import React, { useEffect, useState } from "react";
import "./styles.css";
const OnBoardingPage = () => {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-black fixed top-0 left-0 z-50">
        <div className="text-center">
          {/* Logo */}
          <img src="wikz-web-app/images/wikz-circle-dark-logo.png" alt="Logo" className="mx-auto mb-4" />
  
          {/* Progress Bar */}
          <div className="w-84 bg-gray-700 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full progress-bar"></div>
          </div>
        </div>
      </div>
    );
  };

export default OnBoardingPage;
