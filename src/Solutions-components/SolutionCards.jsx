import React, { useState, useLayoutEffect, useRef } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/Solutions-pages.css";
import "../css/newSoultion.css";
import bgImage from "../assets/home/Our-Solutions/bg1.png";

gsap.registerPlugin(ScrollTrigger);

// --- Original Zig-Zag Components ---

function ZigZagCardRow({ card }) {
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

        {card.link && card.link !== "#" && (
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
        {description && (
          <p className="sub-para-text">
            {description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < description.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
      {displayItems.map((card, index) => (
        <ZigZagCardRow key={index} card={card} />
      ))}
    </section>
  );
}

// --- Named Exports for Scroll Stacking ---

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

export const ScrollStackCards = ({
  children,
  className = '',
  itemDistance = 80,
  itemScale = 0.04,
  label,
  title,
  icon,
  ...props
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const cards = containerRef.current.querySelectorAll('.scroll-stack-card');
    if (!cards.length) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        // Staggered offset only for the second card (index 1)
        const topOffset = index === 1 ? 130 : 100;

        // Add scroll depth between cards
        if (!isLast) {
          card.style.marginBottom = "50vh";
        }

        ScrollTrigger.create({
          trigger: card,
          start: `top ${topOffset}px`,
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        // Progressive Scaling: Each card scales down further as every subsequent card arrives
        for (let j = index + 1; j < cards.length; j++) {
          gsap.to(card, {
            scale: 1 - (itemScale * (j - index)),
            scrollTrigger: {
              trigger: cards[j],
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            }
          });
        }
      });
    });

    // Refresh triggers after a short delay to ensure correct calculations
    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      mm.revert();
      clearTimeout(timer);
    };
  }, [itemScale]);

  return (
    <div
      className={`scroll-stack-scroller window-scroll ${className}`.trim()}
      ref={containerRef}
      {...props}
    >
      <div className="scroll-stack-inner">
        {(label || title) && (
          <div className="capabilities-header" style={{ marginBottom: "60px", textAlign: "center" }}>
            <div className="sub-para-text security-label" style={{ justifyContent: "center" }}>
              {icon || <AiFillInfoCircle size={18} style={{ marginRight: "4px" }} />}
              {label}
            </div>
            {title && <h2 className="head-text">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
