import React from "react";
import "../css/SecurityHeadaches.css";
import securityVideo from "../assets/home/Security-Headaches/Security-video.mp4";
// If you have a specific icon for the label, import it here, otherwise use valid JSX

const SecurityHeadaches = () => {
  const headaches = [
    "Slow Incident Response",
    "Hidden Privileged Users",
    "Configuration Drift",
    "Unmonitored APIs",
    "No Anomaly Detection",
    "False Positive Fatigue",
    "No Behavior Analytics",
    "Vendor Access Blind Spots",
    "Lack of Real-Time Threat Alerts",
    "Unclear Value Proposition",
    "Poor Access Controls",
  ];

  // Duplicate the list for infinite scroll effect
  const marqueeItems = [...headaches, ...headaches];

  return (
    <div className="security-headaches-container">
      {/* Label */}
      <div className="security-label">
        {/* Simple icon placeholder or use text */}
        <span style={{ fontSize: "18px" }}>🛡️</span> Security Headaches
      </div>

      {/* Header */}
      <h2 className="head-text security-header">
        The Security Problems <br /> Keeping you down!!
      </h2>

      {/* Marquee Section */}
      <div className="marquee-wrapper">
        {/* Row 1: Left to Right (or standard) */}
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div key={`row1-${index}`} className="marquee-item">
              <span className="check-icon">✓</span> {item}
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left (reverse) */}
        <div className="marquee-track reverse">
          {marqueeItems.map((item, index) => (
            <div key={`row2-${index}`} className="marquee-item">
              <span className="check-icon">✓</span> {item}
            </div>
          ))}
        </div>

        {/* Row 3: Left to Right (standard) */}
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div key={`row3-${index}`} className="marquee-item">
              <span className="check-icon">✓</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="video-container">
        <video
          className="security-video"
          src={securityVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default SecurityHeadaches;
