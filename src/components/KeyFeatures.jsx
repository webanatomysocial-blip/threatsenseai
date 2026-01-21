import React, { useEffect, useRef } from "react";
import "../css/KeyFeatures.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiFillAppstore } from "react-icons/ai";
import {
  FiSend,
  FiCpu,
  FiGitMerge,
  FiToggleLeft,
  FiBox,
  FiSliders,
  FiBell,
  FiDatabase,
  FiAlertCircle,
} from "react-icons/fi"; // Using Feather icons for clean look

gsap.registerPlugin(ScrollTrigger);

const KeyFeatures = () => {
  const gridRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: <FiSend />,
      title: "24/7 Monitoring & Response",
      desc: "Continuous threat detection and instant response, anytime.",
    },
    {
      id: 2,
      icon: <FiCpu />,
      title: "AI Enabled",
      desc: "Smart threat analysis powered by artificial intelligence.",
    },
    {
      id: 3,
      icon: <FiGitMerge />,
      title: "Integrations",
      desc: "Seamlessly connects with various SAP®, ITSM, and messenger tools.",
    },
    {
      id: 4,
      icon: <FiToggleLeft />,
      title: "Auto Response",
      desc: "Automated incident handling for faster threat mitigation.",
    },
    {
      id: 5,
      icon: <FiBox />,
      title: "Privacy & Security",
      desc: "Sync campaign data with Customer.io via integrations or APIs.",
    },
    {
      id: 6,
      icon: <FiSliders />,
      title: "Flexible Customizations",
      desc: "Adapt the solution to fit your enterprise unique security needs.",
    },
    {
      id: 7,
      icon: <FiBell />,
      title: "150+ Pre-delivered Rules",
      desc: "Ready-to-use rules for comprehensive threat detection with an option to add more.",
    },
    {
      id: 8,
      icon: <FiDatabase />,
      title: "Built-in ITSM solution",
      desc: "Streamlined incident management within the platform.",
    },
    {
      id: 9,
      icon: <FiAlertCircle />,
      title: "Transaction Alerts",
      desc: "Send receipts, resets, updates, and reminders—all with your branding.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current.children;

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%", // Start when top of grid hits 80% viewport
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="key-features-container">
      <div className="key-features-header">
        <div
          className="sub-para-text"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <AiFillAppstore /> Key Features
        </div>
        <h2 className="head-text">
          Comprehensive SAP® <br /> Security & Compliance <br /> Solution
        </h2>
      </div>

      <div className="key-features-grid" ref={gridRef}>
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-wrapper">{feature.icon}</div>
            <div className="feature-content">
              <h3 className="sub-head-text feature-title">{feature.title}</h3>
              <p className="sub-para-text feature-desc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
