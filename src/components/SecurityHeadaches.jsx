import React from "react";
import "../css/SecurityHeadaches.css";
import securityVideo from "../assets/home/Security-Headaches/Security-video.mp4";
import { MdSecurity, MdCheckCircle } from "react-icons/md";

const SecurityHeadaches = () => {
  const headaches = [
    "No real-time threat detection",
    "Delayed incident response",
    "Hidden privileged user access",
    "Excessive admin permissions",
    "Inactive but enabled user accounts",
    "Vendor and third-party access risks",
    "Orphaned and shared accounts",
    "Configuration drift across systems",
    "No centralized security visibility",
    "Incomplete audit trails",
    "Lack of contextual risk scoring",
    "Reactive security posture",
    "Insider-driven data leaks",
    "No visibility into data movement",
    "Sensitive data copied via browsers",
    "GenAI tools exposing enterprise data",
    "Excessive internal data access",
    "Uncontrolled data downloads",
    "Data shared outside approved channels",
    "Lack of data-level access controls",
    "Manual data privacy reporting",
    "Sensitive data in non-production systems",
    "Attacks without malware signatures",
    "Data loss without security alerts",
    "Compliance failures discovered too late",
    "Trusted users, untrusted actions",
    "Data leaks without attacks",
    "Access without accountability",
    "Alerts without context",
  ];

  // Duplicate the list for infinite scroll effect
  const marqueeItems = [...headaches, ...headaches];

  return (
    <div className="security-headaches-container">
      {/* Label */}
      <div className="Head-security-label">
        <MdSecurity size={18} style={{ marginRight: "4px" }} /> Cybersecurity &
        Data Security Reality
      </div>

      {/* Header */}
      <h2 className="head-text security-header">
        Security Risks That Threaten <br /> Your Systems and Your Data!
      </h2>

      {/* Marquee Section */}
      <div className="marquee-wrapper">
        {/* Row 1: Left to Right (or standard) */}
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div key={`row1-${index}`} className="marquee-item">
              <MdCheckCircle
                style={{ marginRight: "4px", color: "#000" }}
                size={16}
              />{" "}
              {item}
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left (reverse) */}
        <div className="marquee-track reverse">
          {marqueeItems.map((item, index) => (
            <div key={`row2-${index}`} className="marquee-item">
              <MdCheckCircle
                style={{ marginRight: "4px", color: "#000" }}
                size={16}
              />{" "}
              {item}
            </div>
          ))}
        </div>

        {/* Row 3: Left to Right (standard) */}
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div key={`row3-${index}`} className="marquee-item">
              <MdCheckCircle
                style={{ marginRight: "4px", color: "#000" }}
                size={16}
              />{" "}
              {item}
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
