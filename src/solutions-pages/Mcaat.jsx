import React from "react";
import { Link } from "react-router-dom";
import "../css/Solutions-pages.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SolutionCarousel from "../Solutions-components/SolutionCarousel";
import SolutionCards from "../Solutions-components/SolutionCards";
import FAQ from "../components/FAQ";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";
import img4 from "../assets/solutions/mcaat/results/cta.png";
import CapabilitiesSection from "../components/CapabilitiesSection";
import UseCases from "../Solutions-components/UseCases";
import ResultsComp from "../Solutions-components/ResultsComp";
import bgImage from "../assets/home/Our-Solutions/bg1.png";
import mcaat1 from "../assets/solutions/mcaat/car/1.png";
import mcaat2 from "../assets/solutions/mcaat/car/2.png";
import mcaat3 from "../assets/solutions/mcaat/car/3.png";
import mcaat4 from "../assets/solutions/mcaat/car/4.png";
import mcaat5 from "../assets/solutions/mcaat/car/5.png";
import mcaat6 from "../assets/solutions/mcaat/car/6.png";
import mcaat7 from "../assets/solutions/mcaat/car/7.png";
import mcaat8 from "../assets/solutions/mcaat/car/8.png";
import mcaat9 from "../assets/solutions/mcaat/car/9.png";

import mcaat14 from "../assets/solutions/mcaat/Compliance/2.png";
import mcaat15 from "../assets/solutions/mcaat/Compliance/3.png";
import mcaat16 from "../assets/solutions/mcaat/Compliance/4.png";
import mcaat17 from "../assets/solutions/mcaat/Compliance/5.png";

import videomcaat1 from "../assets/solutions/mcaat/Copy-audit.mp4";

import {
  FaTh,
  FaLock,
  FaBullseye,
  FaGlobe,
  FaSync,
  FaHistory,
  FaUserShield,
  FaChartBar,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";

export default function Mcaat() {
  const core = [
    {
      icon: <FaSync />,
      title: "Always-On\n Audit Readiness",
      description:
        "Audit Trail Enforcer continuously monitors audit policies and logging configurations across SAP application and database layers. If audit logging is disabled, intentionally or accidentally, it automatically restores the required settings, helping ensure uninterrupted audit trail availability, stronger control integrity, and continuous compliance with global regulatory and audit requirements.",
    },
    {
      icon: <FaHistory />,
      title: "Before & After\nValue Capture",
      description:
        "Provides full context for every critical change by recording before-and-after values. This enables precise root-cause analysis, faster audit validation, and clear accountability, without requiring forensic reconstruction during audits or investigations.",
    },
    {
      icon: <FaUserShield />,
      title: "Protection from Audit \nTrail Tampering",
      description:
        "Shifts audit integrity from trust-based to control-based. By preventing and detecting tampering attempts in real time, Audit Trail Enforcer ensures audit data remains legally defensible and reliable for regulators, auditors, and internal investigations.",
    },
    {
      icon: <FaChartBar />,
      title: "Auditor-Ready\n Dashboards",
      description:
        "Reduces audit effort by presenting evidence in a format auditors understand immediately. Timelines, change histories, and exportable reports eliminate last-minute data compilation and significantly shorten audit cycles.",
    },
    {
      icon: <FaDatabase />,
      title: "Optimized Logging\n to Reduce DB Bloat",
      description:
        "Balances compliance with performance by capturing only audit-relevant, high-value events. This prevents excessive database growth while maintaining complete traceability, avoiding the trade-off between system performance and audit coverage. ",
    },
    {
      icon: <FaCloud />,
      title: "Solution for MS SQL,\n SAP HANA & RISE",
      description:
        "Delivers consistent audit controls across on-premise, hybrid, and cloud SAP landscapes. Audit Trail Enforcer adapts to modern SAP architectures without requiring system redesign, ensuring compliance continuity during migrations and transformations. ",
    },
  ];
  const content = [
    {
      img: mcaat1,
      title: "Detect Log Tampering",
      description:
        "Standard logs can be altered or deleted without detection. Audit Trail Enforcer actively monitors audit trail integrity and immediately detects any attempt to tamper with logs, ensuring evidence remains trustworthy.",
    },
    {
      img: mcaat2,
      title: "DDL/DML Growth (Database Footprint) Optimization",
      description:
        "Enabling DDL/DML logs increases database footprint and costs. With Audit Trail Enforcer, DDL/DML logging isn’t required. It captures critical DB activities automatically and maintains tamper-proof logs for compliance.",
    },
    {
      img: mcaat3,
      title: "Monitor Critical Database Logins",
      description:
        "Database-level changes bypasses application logging. Audit Trail Enforcer tracks privileged and critical DB logins in real time, closing one of the most common audit blind spots.",
    },
    {
      img: mcaat4,
      title: "Automatic Reactivation of SM19 Logging",
      description:
        "Audit logging can be manually disabled, intentionally or accidentally. Audit Trail Enforcer continuously checks logging status and automatically re-enables SM19 logs if they are turned off.",
    },
    {
      img: mcaat5,
      title: "Integrated Incident Logging (ITSM)",
      description:
        "Audit violations often remain undocumented or manually tracked. Audit Trail Enforcer automatically creates ITSM incidents, ensuring every compliance breach is logged, tracked, and resolved.",
    },
    {
      img: mcaat6,
      title: "Critical Table Change Monitoring",
      description:
        "Standard tools focus on application changes only. Audit Trail Enforcer monitors critical tables at both SAP application and database layers, ensuring no change goes unrecorded.",
    },
    {
      img: mcaat7,
      title: "Protection of Audit Evidence",
      description:
        "Logs without protection are not legally reliable. Audit Trail Enforcer safeguards audit evidence from deletion or manipulation, preserving integrity for statutory and forensic audits.",
    },
    {
      img: mcaat8,
      title: "Protection of CDHDR and CDPOS Tables",
      description:
        "Change document tables are critical for audit reconstruction. Audit Trail Enforcer explicitly protects CDHDR and CDPOS tables, ensuring SAP change history remains intact and reliable.",
    },
    {
      img: mcaat9,
      title: "Auditor-Friendly Dashboards",
      description:
        "Raw logs are not audit-ready. Audit Trail Enforcer provides structured, auditor-friendly dashboards and reports, reducing audit preparation effort and risk of interpretation errors.",
    },
  ];

  const Cardscontent = [
    {
      title: "Automated Audit Policy Enforcement",
      description:
        "Audit Trail Enforcer continuously monitors audit policies and logging configurations across SAP application and database layers. If audit logging is disabled, intentionally or accidentally, it automatically restores the required settings, helping ensure uninterrupted audit trail availability, stronger control integrity, and continuous compliance with global regulatory and audit requirements. ",
      img: null,
      video: videomcaat1,
    },
    {
      title: "Automated Detection of Audit Trail Tampering",
      description:
        "Any attempt to delete, alter, or manipulate audit logs is detected in real time. Audit Trail Enforcer immediately records the event, preserves evidence, and triggers alerts or enforcement actions to maintain audit trail integrity and evidentiary reliability.",
      img: mcaat14,
      video: null,
    },
    {
      title: "Automated Protection of Audit Evidence",
      description:
        "Audit Trail Enforcer safeguards audit logs, change records, and supporting evidence from unauthorized access or modification. This ensures audit data remains complete, accurate, and defensible during internal reviews, statutory audits, and forensic investigations.",
      img: mcaat15,
      video: null,
    },
    {
      title: "Automated Monitoring of High-Risk System Activities",
      description:
        "Sensitive actions such as DEBUG mode usage, audit policy deletion, or critical configuration changes are continuously monitored. Audit Trail Enforcer detects these high-risk activities instantly, preventing silent compliance breaches and reducing reliance on post-facto audit reviews.",
      img: mcaat16,
      video: null,
    },
    {
      title: "Automated Audit-Ready Reporting",
      description:
        "Audit dashboards and reports are generated automatically with structured, evidence-backed data. Audit Trail Enforcer reduces audit preparation effort by providing immediate access to traceable, regulator-ready information without manual compilation or reconciliation.",
      img: mcaat17,
      video: null,
    },
  ];

  const useCasesList = [
    "Continuous audit trail is enforced across SAP application and database layers",
    "All DDL and DML activities are captured automatically without performance impact",
    "Each change records who performed the action, what was executed, and when it occurred",
    "Audit evidence is stored securely at OS level and database level with tamper resistance",
    "Audit policies are continuously monitored and automatically re-enabled if disabled",
  ];
  const faqContent = [
    {
      question:
        "What is Audit Trail Enforcer and how does it protect audit logs?",
      answer:
        "Audit Trail Enforcer is a comprehensive SAP audit security solution designed to continuously monitor, protect, and enforce audit trail integrity across SAP systems and databases. Unlike basic logging tools, it goes beyond simple log recording to actively prevent tampering and ensure compliance.\n\nKey protection mechanisms include:\n• Real-time monitoring of audit logs to detect deletion or manipulation attempts\n• Tamper-resistant storage at both OS and database levels\n• Automatic protection of CDHDR and CDPOS change document tables\n• Continuous enforcement of audit policies and logging configurations\n• Preservation of audit evidence for forensic and statutory audits\n\nThis ensures that critical activities remain traceable and audit logs cannot be disabled, bypassed, or altered without detection.",
    },
    {
      question:
        "How does Audit Trail Enforcer ensure compliance with MCA Rule 11(g) in India?",
      answer:
        "MCA Rule 11(g) requires organizations to maintain continuous and secure audit trails that cannot be disabled or bypassed. Audit Trail Enforcer meets these requirements through automated controls:\n\n• Continuous Monitoring: Audit policies and logging configurations are continuously monitored across SAP application and database layers\n• Automatic Reactivation: If audit logging is disabled (intentionally or accidentally), SM19 logs are automatically restored\n• Tamper Detection: Any attempt to delete, alter, or manipulate audit logs is detected in real time\n• Evidence Preservation: Audit logs and compliance evidence are protected from unauthorized modification\n• Audit-Ready Reporting: Structured dashboards and reports provide evidence-backed data ready for regulatory review\n\nIn India, this solution is marketed as MCAAT (MCA Audit Trail) to specifically address MCA Rule 11(g) compliance requirements.",
    },
    {
      question:
        "What is the difference between Audit Trail Enforcer and SAP audit logging?",
      answer:
        "While standard SAP audit logging (SM19) records activities, Audit Trail Enforcer provides comprehensive protection that standard logging cannot:\n\n• Standard Logging: Can be manually disabled; logs can be deleted without detection; lacks tamper resistance; database-level changes bypass application logs\n• Audit Trail Enforcer: Cannot be disabled without automatic reactivation; tampering is instantly detected; stores logs with tamper-resistant protection; monitors database logins and changes; provides auditor-ready dashboards\n\nAdditionally, Audit Trail Enforcer captures critical database activities automatically without requiring expensive DDL/DML logging that increases database footprint. Standard logs are often raw data not immediately audit-ready, while Audit Trail Enforcer delivers structured, compliance-focused reports that reduce audit preparation effort by 40-60%.",
    },
    {
      question:
        "Can Audit Trail Enforcer detect and prevent log tampering attempts?",
      answer:
        "Yes. Audit Trail Enforcer includes real-time tamper detection and automated enforcement capabilities:\n\n• Immediately detects any attempt to delete, alter, or manipulate audit logs\n• Records the tampering event with full context (who, what, when, where)\n• Preserves tamper-proof evidence for investigation\n• Triggers instant alerts and automated enforcement actions (ITSM incident creation, system alerts)\n• Prevents silent compliance breaches by detecting high-risk activities (DEBUG mode, policy deletion, configuration changes)\n\nBy shifting from trust-based to control-based audit integrity, Audit Trail Enforcer ensures audit data remains legally defensible and reliable for regulators, auditors, and internal investigations.",
    },
    {
      question:
        "Does Audit Trail Enforcer work with SAP on Cloud (RISE) and SAP architectures?",
      answer:
        "Yes. Audit Trail Enforcer delivers consistent audit controls across all SAP landscapes:\n\n• On-Premise SAP: Full support for traditional SAP systems with database protection\n• SAP HANA: Optimized for SAP HANA databases with native integration\n• SAP on Cloud (RISE): Works seamlessly in hybrid and cloud SAP environments without system redesign\n• MS SQL: Compatible with Microsoft SQL Server backends\n\nThis multi-platform support means you maintain consistent audit enforcement regardless of infrastructure—whether you're on-premise, in the cloud, or in the middle of a SAP transformation. Audit Trail Enforcer adapts to modern SAP architectures and migrations without requiring extensive customization, ensuring compliance continuity throughout your digital transformation journey.",
    },
  ];

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerRef = useRef(null);

  useEffect(() => {
    const chars = headerRef.current.querySelectorAll(".split-text-char");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2,
      },
    );
  }, [isMobile]); // Re-run if text changes to ensure animation hits new chars

  const splitLetters = (text) => {
    return text.split("").map((char, index) => {
      if (char === "\n") {
        return <br key={index} />;
      }
      return (
        <span
          key={index}
          className="split-text-char"
          style={{ font: "italic 400 1em 'Instrument Serif'" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };
  return (
    <>
      <section className="mcaat-banner">
        <div className="mcaat-banner-content">
          <h1 ref={headerRef} className="big-text-head">
            Audit Trail Enforcer <br />
            {isMobile
              ? splitLetters("Built for SAP -\n Trusted for Compliance ")
              : splitLetters("Built for SAP - Trusted for Compliance ")}
          </h1>
          <p className="sub-para-text">
            Audit Trail Enforcer continuously monitors, protects, and enforces
            audit trail integrity across SAP systems and databases, ensuring
            critical activities remain traceable and audit logs cannot be
            disabled, bypassed, or tampered with.
          </p>
          <div className="banner-buttons">
            <a
              href="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
              className="red-button"
            >
              Request Live Demo
            </a>
          </div>
        </div>
      </section>
      <SolutionCarousel data={content} />
      <SolutionCards
        label="Automated Controls Delivered"
        title="Compliance that enforces itself"
        description={
          isMobile
            ? "ThreatSenseAI ATE delivers automated compliance controls that continuously protect audit trails,enforce logging policies and respond instantly to violations, ensuring MCA Rule 11(g) requirements are met at all times."
            : "ThreatSenseAI ATE delivers automated compliance controls that continuously protect audit trails,enforce logging policies and respond instantly to violations, ensuring MCA Rule 11(g) requirements are met at all times."
        }
        items={Cardscontent}
        marginTop="0px"
      />

      <CapabilitiesSection
        items={core}
        gridTemplateColumns="repeat(3 , 1fr)"
        header={{
          icon: <FaGlobe size={16} />,
          label: "Key Capabilities",
          title: "What it brings?",
        }}
      />

      <ResultsComp />
      <UseCases
        label="Use Cases"
        title={<>Always-On Audit Trail Compliance with Audit Trail Enforcer </>}
        list={useCasesList}
        image={img4}
        srcbtn="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
      />

      <p
        className="para-text"
        style={{
          marginTop: "-70px",
          marginBottom: "40px",
          marginLeft: "120px",
        }}
      >
        *This solution is marketed as MCAAT in India to address MCA Rule 11(g)
        requirements.
      </p>

      <FAQ
        title="Audit Trail Enforcer FAQs"
        description=""
        items={faqContent}
        paddingBottom="100px"
      />
      <Cta
        title="Always-On
         Audit Trail Compliance"
        description="Audit Trail Enforcer continuously protects, validates, and restores audit trails across SAP systems, detecting tampering,
         reinstating disabled logging, and preserving audit-ready evidence with no manual intervention."
        backgroundImage={bg}
        buttonText="Request a Demo"
        link="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
      />
    </>
  );
}
