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
      desc: "Continuous monitoring of security events and data activity with immediate response to high-risk threats.",
    },
    {
      id: 2,
      icon: <FiCpu />,
      title: "AI-Powered Threat Intelligence",
      desc: "Advanced analytics and behavioural models to detect anomalies, insider threats, and emerging attack patterns.",
    },
    {
      id: 3,
      icon: <FiGitMerge />,
      title: "Enterprise Integrations",
      desc: "Seamlessly integrates with SAP®, ITSM tools, SIEMs, and enterprise messaging platforms.",
    },
    {
      id: 4,
      icon: <FiToggleLeft />,
      title: "Automated Incident Response",
      desc: "Trigger automated remediation actions to reduce response time and limit impact.",
    },
    {
      id: 5,
      icon: <FiBox />,
      title: "Privacy & Data Protection",
      desc: "Built-in controls to protect sensitive data, enforce policies, and support regulatory compliance.",
    },
    {
      id: 6,
      icon: <FiSliders />,
      title: "Flexible Security Customization",
      desc: "Configure rules, policies, and workflows to align with your enterprise risk and compliance needs.",
    },
    {
      id: 7,
      icon: <FiBell />,
      title: "150+ Pre-Configured Security Rules",
      desc: "Out-of-the-box detection rules covering SAP security, insider risk, and common attack scenarios - extensible as needed.",
    },
    {


      id: 8,
      icon: <FiDatabase />,
      title: "Built-In ITSM & Case Management*",
      desc: "Manage security incidents, investigations, and remediation workflows directly within the platform.",
    },
    {
      id: 9,
      icon: <FiAlertCircle />,
      title: "Real-Time Security Alerts",
      desc: "Context-aware alerts delivered instantly to security teams with actionable insights - not noise.",
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
          <AiFillAppstore />Platform Capabilities
        </div>
        <h2 className="head-text">
          Designed to detect threats, <br /> prevent data leaks, and automate response.
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
