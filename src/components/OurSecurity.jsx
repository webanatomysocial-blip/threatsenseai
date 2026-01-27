import React from "react";
import "../css/OurSecurity.css";
import AnimatedContent from "./AnimatedContent";
import { FaShieldAlt } from "react-icons/fa";

const securitySteps = [
  {
    id: "01",
    title: "Prevent Data Risk at the Source",
    description:
      "We focus on stopping data exposure before it happens. By understanding where sensitive SAP data resides and how it moves, ThreatSenseAI prevents unauthorized access, excessive exports, insider misuse, and modern leak vectors such as GenAI tools and shadow IT—at the point of action.",
  },
  {
    id: "02",
    title: "Enforce Controls in Real Time",
    description:
      "Security policies must do more than alert. ThreatSenseAI enforces data protection controls dynamically—blocking risky actions, reinstating disabled safeguards, masking sensitive data, and restricting unauthorized sharing—without disrupting business operations or system performance.",
  },
  {
    id: "03",
    title: "Prove Compliance with Evidence",
    description:
      "Compliance is not periodic—it is continuous. ThreatSenseAI automatically captures immutable audit trails, before-and-after evidence, and regulator-ready reports, enabling organizations to demonstrate GDPR, DPDP, SOX, and SAP compliance with confidence and clarity.",
  },
];

const OurSecurity = () => {
  return (
    <section className="our-security-section">
      <div className="our-security-container">
        <span className="our-security-label" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FaShieldAlt size={18} color="white" />
          Our Security Philosophy
        </span>

        <h2 className="head-text-white">
          Prevent <span className="highlight-text">→</span> Enforce{" "}
          <span className="highlight-text">→</span> Prove
        </h2>

        <p className="para-text-white security-intro">
          At ThreatSenseAI, we believe security should actively protect the
          business—not just report on what went wrong after the fact.
        </p>

        {/* Animate the security list */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          threshold={0.2}
          className="security-list"
        >
          {securitySteps.map((item, index) => (
            <AnimatedContent
              key={item.id}
              distance={30}
              direction="vertical"
              reverse={false}
              duration={0.6}
              delay={index * 0.2} // stagger each item
              className="philosophy-item"
            >
              <div className="step-badge">{item.id}</div>
              <div className="step-content">
                <h3 className="sub-head-text-white">{item.title}</h3>
                <p className="para-text-white">{item.description}</p>
              </div>
            </AnimatedContent>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
};

export default OurSecurity;
