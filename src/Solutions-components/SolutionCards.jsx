import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "../css/Solutions-pages.css";
import bgImage from "../assets/home/Our-Solutions/bg1.png";
import { FaGlobe } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function SolutionCardRow({ card }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="solution-card-row">
      <div className="solution-card-text">
        <h3>{card.title}</h3>
        {card.subtitle && <p style={{ fontWeight: 600, color: "#444", marginTop: "-10px", marginBottom: "15px" }}>{card.subtitle}</p>}
        <p>{card.description}</p>

        {card.readMoreContent && (
          <div className="read-more-wrapper-card">
            <div className={`read-more-content ${isExpanded ? "expanded" : ""}`}>
              {card.readMoreContent}
            </div>
            <button
              className="solution-card-readmore section-readmore-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  Read Less <MdKeyboardArrowUp />
                </>
              ) : (
                <>
                  Read More <MdKeyboardArrowDown />
                </>
              )}
            </button>

          </div>
        )}

        {!card.readMoreContent && card.link && (
          <a href={card.link} className="solution-card-readmore">
            Read More <BsArrowRight />
          </a>
        )}
      </div>
      <div className="solution-card-visual">
        {card.video ? (
          <video src={card.video} autoPlay loop muted playsInline />
        ) : (
          <img src={card.img} alt={card.title} />
        )}
      </div>
    </div>
  );
}

export default function SolutionCards({
  items,
  label,
  title,
  description,
  marginTop,
}) {
  const defaultLabel = "Why MCAAT?";
  const defaultTitle = (
    <>
      It goes beyond basic <br /> logging
    </>
  );

  const cardData = [
    {
      title: "Automated Audit Policy Enforcement",
      description:
        "MCAAT continuously monitors audit policies and logging configurations across SAP application and database layers. If audit logging is disabled, intentionally or accidentally, MCAAT automatically restores it, ensuring uninterrupted audit trail availability and compliance with MCA Rule 11(g)..",
      link: "#",
      img: bgImage,
      video: null,
    },
    {
      title: "Automated Detection of Audit Trail Tampering",
      description:
        "Any attempt to delete, alter, or manipulate audit logs is detected in real time. MCAAT immediately records the event, preserves evidence, and triggers alerts or enforcement actions to maintain audit trail integrity and evidentiary reliability.",
      link: "#",
      img: bgImage,
      video: null,
    },
    {
      title: "Automated Protection of Audit Evidence",
      description:
        "MCAAT safeguards audit logs, change records, and supporting evidence from unauthorized access or modification. This ensures audit data remains complete, accurate, and defensible during internal reviews, statutory audits, and forensic investigations.",
      link: "#",
      img: bgImage,
      video: null,
    },
    {
      title: "Automated Monitoring of High-Risk System Activities",
      description:
        "Sensitive actions such as DEBUG mode usage, audit policy deletion, or critical configuration changes are continuously monitored. MCAAT detects these high-risk activities instantly, preventing silent compliance breaches and reducing reliance on post-facto audit reviews.",
      link: "#",
      img: bgImage,
      video: null,
    },
    {
      title: "Automated Enforcement and Corrective Actions",
      description:
        "When compliance violations are detected, MCAAT automatically executes predefined actions such as user locking, escalation, or workflow initiation. This ensures policy breaches are not only identified but actively contained and addressed without manual intervention.",
      link: "#",
      img: bgImage,
      video: null,
    },
    {
      title: "Automated Incident Creation and ITSM Integration",
      description:
        "Every audit or compliance violation is automatically logged as an incident through API-based integration with enterprise ITSM platforms. MCAAT also supports an optional built-in ITSM module, ensuring consistent tracking, accountability, and resolution of compliance events.",
      link: "#",
      img: bgImage,
      video: null,
    },
    {
      title: "Automated Cross Layer Change Visibility",
      description:
        "MCAAT tracks changes consistently across SAP application and database layers, eliminating visibility gaps. This ensures all critical table, configuration, and structural changes are captured in a single, unified audit trail aligned with regulatory expectations.",
      link: "#",
      img: bgImage,
      video: null,
    },
    {
      title: "Automated Audit-Ready Reporting",
      description:
        "Audit dashboards and reports are generated automatically with structured, evidence-backed data. MCAAT reduces audit preparation effort by providing immediate access to traceable, regulator-ready information without manual compilation or reconciliation.",
      link: "#",
      img: bgImage,
      video: null,
    },
  ];

  const displayItems = items || cardData;

  return (
    <section
      className="solution-cards-container"
      style={{ marginTop: marginTop }}
    >
      <div className="capabilities-header">
        <div className="sub-para-text security-label">
          <FaGlobe size={16} style={{ marginRight: "4px" }} />{" "}
          {label || defaultLabel}
        </div>
        <h2 className="head-text">{title || defaultTitle}</h2>
        {description && <p className="sub-para-text">{description}</p>}
      </div>
      {displayItems.map((card, index) => (
        <SolutionCardRow key={index} card={card} />
      ))}
    </section>
  );
}
