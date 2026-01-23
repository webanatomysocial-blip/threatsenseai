import React from "react";
import "../css/About-Us.css";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import bgImage from "../assets/home/Our-Solutions/bg1.png";

const Benefits = () => {
  const benefitsList = [
    "Threat Monitor",
    "Threat Response",
    "Threat Analytics",
  ];

  return (
    <div className="benefits-section">
      <div className="benefits-container">
        {/* Left Content */}
        <div className="benefits-content">
          <div className="benefits-label">
            <FaShieldAlt size={16} style={{ marginRight: "8px" }} />
            Benefits
          </div>
          <h2 className="head-text benefits-title">
            Benefits of <br /> ThreatSenseAi
          </h2>

          <div className="benefits-list">
            {benefitsList.map((item, index) => (
              <div key={index} className="benefit-item">
                <FaCheckCircle className="check-icon" />
                <span className="sub-para-text">{item}</span>
              </div>
            ))}
          </div>

          <a href="#" className="red-button">
            Book A Free Demo
          </a>
        </div>

        {/* Right Image */}
        <div className="benefits-image-wrapper">
          <img
            src={bgImage}
            alt="Benefits Background"
            className="benefits-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
