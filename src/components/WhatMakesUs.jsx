import "../css/WhatMakesUs.css";
import { BsArchive, BsShield, BsFileText } from "react-icons/bs";
import { FaBolt, FaBuilding, FaExclamationTriangle } from "react-icons/fa";
import AnimatedContent from "./AnimatedContent"; 

const WhatMakesUs = () => {
  return (
    <section className="different-section">
      <div className="different-container">

        <span className="different-eyebrow">
          WHAT MAKES US DIFFERENT
        </span>

        <h2 className="head-text different-heading">
          Built for Enforcement,{" "}
          <span className="muted-text">Not Just Observation</span>
        </h2>

        <p className="para-text different-subtext">
          Most security tools detect events and generate alerts.
          ThreatSenseAI is designed to enforce control.
        </p>

        {/* Animate the grid */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          threshold={0.2}
          className="different-grid"
        >
          <div className="different-card">
            <div className="different-icon"><BsArchive size={20}  color="#F97015" /></div>
            <p className="sub-head-text">"SAP First" – by Design</p>
            <p className="sub-para-text">
              We build natively for SAP application, database, and data layers—rather than retrofitting generic security tools onto complex SAP environments.
            </p>
          </div>

          <div className="different-card">
            <div className="different-icon"><FaBolt size={20}  color="#F97015" /></div>
            <p className="sub-head-text">Real-Time Control, Not Postmortem</p>
            <p className="sub-para-text">
              We don't just log violations. We automatically respond—reinstating controls, blocking actions, and preserving evidence as incidents occur.
            </p>
          </div>

          <div className="different-card">
            <div className="different-icon"><BsShield size={20}  color="#F97015" /></div>
            <p className="sub-head-text">Data-Centric Protection</p>
            <p className="sub-para-text">
              Our focus is on how data is accessed, exposed, copied, exported, or shared—across SAP, browsers, AI tools, and third-party channels.
            </p>
          </div>

          <div className="different-card">
            <div className="different-icon"><BsFileText size={20}  color="#F97015"/></div>
            <p className="sub-head-text">Compliance That Stays On</p>
            <p className="sub-para-text">
              Continuous enforcement of regulatory requirements such as MCA Rule 11(g), GDPR, DPDP, SOX, and industry mandates—without relying on manual checks.
            </p>
          </div>

          <div className="different-card">
            <div className="different-icon"><FaBuilding size={20}  color="#F97015"/></div>
            <p className="sub-head-text">Enterprise-Safe Architecture</p>
            <p className="sub-para-text">
              Lightweight, non-intrusive deployment that integrates seamlessly with existing SAP landscapes, SIEM/SOAR platforms, and ITSM tools.
            </p>
          </div>

          <div className="different-card">
            <div className="different-icon"><FaExclamationTriangle size={20}  color="#F97015" /></div>
            <p className="sub-head-text">Built to Stop Insider & AI-Driven Leaks</p>
            <p className="sub-para-text">
              Addresses modern leak vectors including privileged misuse, excessive access, browser-based exfiltration, and data exposure through GenAI tools.
            </p>
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
};

export default WhatMakesUs;
