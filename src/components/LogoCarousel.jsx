import React from "react";
import "../css/AboutSections.css";
import logo from "../assets/logo.png";

const LogoCarousel = () => {
  // Duplicating logos for infinite loop effect
  const logos = Array(12).fill(logo);

  return (
    <div className="logo-carousel-section">
      <p className="para-text">
        Trusted by 100+ brands worldwide to deliver data-powered communication
        daily.
      </p>
      <div className="logo-carousel-wrapper">
        <div className="logo-carousel-track">
          {logos.map((src, index) => (
            <div key={index} className="logo-item">
              <img src={src} alt="Brand Logo" />
            </div>
          ))}
          {/* Repeat for seamless scroll */}
          {logos.map((src, index) => (
            <div key={`dup-${index}`} className="logo-item">
              <img src={src} alt="Brand Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
