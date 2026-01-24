import React from "react";
import "../css/AboutSections.css";
import {
  FaPlug,
  FaHeartbeat,
  FaBrain,
  FaRegBell,
  FaCompressArrowsAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaPlug />,
      title: "Deploy the\n ThreatSenseAi Agent",
      description:
        "Install the lightweight ThreatSense AI agent on your SAP system—quick, seamless, and zero impact on performance.",
    },
    {
      icon: <FaHeartbeat />, // or FaWaveSquare
      title: "Real-Time\n Log Collection",
      description:
        "The agent continuously collects logs and security events from your SAP system & securely transmitted to the ThreatSense AI system.",
    },
    {
      icon: <FaBrain />,
      title: "AI-Powered\n Threat Detection & Analysis",
      description:
        "Our advanced SIEM & SOAR engine analyzes patterns, identifies anomalies, and flags potential threats instantly.",
    },
    {
      icon: <FaRegBell />,
      title: "Instant Alerts\n & Notifications",
      description:
        "Alerts are securely sent to your SOC team via Slack, Teams, Email, or any preferred messaging platform with No delays and other security threats.",
    },
    {
      icon: <FaCompressArrowsAlt />, // Seamless ITSM Integration
      title: "Seamless\n ITSM Integration",
      description:
        "Every security event is automatically recorded in our ITSM tool or integrated into your existing ITSM system.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Automated Response\n   & Threat Mitigation",
      description:
        "Our AI engine determines the right action based on threat severity and Automates defense mechanisms instantly.",
    },
  ];

  return (
    <div className="how-it-works-section">
      <div className="how-it-works-header">
        {/* Label - Using sub-para-text as per instructions for subheading/label consistency if desired or specific class from user instructions */}
        <div className="sub-para-text security-label">
          <FaShieldAlt size={16} style={{ marginRight: "4px" }} />
          Security Headaches
        </div>
        <h2 className="head-text">How ThreatSenseAi works</h2>
      </div>

      <div className="how-it-works-grid">
        {steps.map((step, index) => (
          <div key={index} className="work-box">
            <div className="icon-wrapper">{step.icon}</div>
            <div className="work-content">
              <h3 className="sub-head-text">{step.title}</h3>
              <p className="sub-para-text">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
