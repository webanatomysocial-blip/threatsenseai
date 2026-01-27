import React from "react";
import "../css/OurStory.css";
import { FiAlertTriangle, FiUserX, FiClipboard, FiBell } from "react-icons/fi";
import AnimatedContent from "./AnimatedContent"; // make sure path is correct
import { FaBookOpen } from "react-icons/fa";

const gaps = [
  {
    icon: <FiAlertTriangle size={20} />,
    text: "Sensitive SAP data leaving systems without visibility or control",
  },
  {
    icon: <FiUserX size={20} />,
    text: "Insider misuse and excessive access going undetected until audits",
  },
  {
    icon: <FiClipboard size={20} />,
    text: "Compliance dependent on manual checks and after-the-fact reporting",
  },
  {
    icon: <FiBell size={20} />,
    text: "Traditional security tools focused on alerts, not enforcement",
  },
];

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="our-story-container">
        {/* Left content */}
        <div className="our-story-left">
          <span className="story-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FaBookOpen size={18} color="black" />
            Our Story
          </span>

          <h2 className="head-text">Why We Built ThreatSense AI</h2>

          <p className="para-text">
            Enterprise risk today is no longer driven only by external attackers.
            It is driven by how data is accessed, moved, copied, and misused
            inside the organization—often through trusted users, business-critical
            systems, and modern tools like browsers and generative AI.
          </p>

          <p className="para-text">
            We design security solutions that work where enterprises actually
            operate—across SAP applications, databases, browsers, third parties,
            and modern AI tools—without disrupting business operations.
          </p>
        </div>

        {/* Right content with animation */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          threshold={0.2}
          className="our-story-right"
        >
          <p className="sub-para-text">
            We built ThreatSense AI after repeatedly seeing the same gaps across
            large enterprises:
          </p>

          <div className="story-gaps">
            {gaps.map((item, index) => (
              <AnimatedContent
                key={index}
                distance={30}
                direction="vertical"
                reverse={false}
                duration={0.6}
                delay={index * 0.15} // stagger each gap card
                className="story-gap-card"
              >
                <div className="story-icon">{item.icon}</div>
                <p className="sub-para-text">{item.text}</p>
              </AnimatedContent>
            ))}
          </div>
        </AnimatedContent>
      </div>

      {/* Story highlight with animation */}
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        threshold={0.2}
        delay={0.2}
        className="story-highlight"
      >
        <p className="sub-head-text">
          ThreatSense AI exists to help organizations stay secure, compliant, and
          in control of their most critical data—
          <span className="story-highlight-accent">
            every day, not just during audits.
          </span>
        </p>
      </AnimatedContent>
    </section>
  );
};

export default OurStory;
