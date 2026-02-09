import React from "react";
import { Link } from "react-router-dom";
import "../css/Solutions-pages.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SolutionCarousel from "../Solutions-components/SolutionCarousel";
import SolutionCards from "../Solutions-components/SolutionCards";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";
import img4 from "../assets/home/tab-section/use cases.png";
import CapabilitiesSection from "../components/CapabilitiesSection";
import UseCases from "../Solutions-components/UseCases";
import ResultsComp from "../Solutions-components/ResultsComp";
import bgImage from "../assets/home/Our-Solutions/bg1.png";
import mcaat1 from "../assets/solutions/mcaat/detect-log.png";
import mcaat2 from "../assets/solutions/mcaat/2.png";
import mcaat3 from "../assets/solutions/mcaat/3.png";
import mcaat4 from "../assets/solutions/mcaat/4.png";
import mcaat5 from "../assets/solutions/mcaat/5.jpg";
import mcaat6 from "../assets/solutions/mcaat/6.png";
import mcaat7 from "../assets/solutions/mcaat/7.png";
import mcaat8 from "../assets/solutions/mcaat/8.png";
import mcaat9 from "../assets/solutions/mcaat/9.jpg";
import mcaat10 from "../assets/solutions/mcaat/10.jpg";
import mcaat11 from "../assets/solutions/mcaat/11.png";
import mcaat12 from "../assets/solutions/mcaat/12.png";
import mcaat14 from "../assets/solutions/mcaat/14.png";
import mcaat15 from "../assets/solutions/mcaat/15.png";
import mcaat16 from "../assets/solutions/mcaat/16.png";
import mcaat17 from "../assets/solutions/mcaat/17.png";

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
        "Eliminates reliance on manual checks by ensuring audit trails are always active. Even if logs are disabled during maintenance or misuse, MCAAT restores continuity automatically, removing one of the most common causes of audit non-compliance.",
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
        "Shifts audit integrity from trust-based to control-based. By preventing and detecting tampering attempts in real time, MCAAT ensures audit data remains legally defensible and reliable for regulators, auditors, and internal investigations.",
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
        "Delivers consistent audit controls across on-premise, hybrid, and cloud SAP landscapes. MCAAT adapts to modern SAP architectures without requiring system redesign, ensuring compliance continuity during migrations and transformations. ",
    },
  ];
  const content = [
    {
      img: mcaat1,
      title: "Detect Log Tampering",
      description:
        "Standard logs can be altered or deleted without detection. MCAAT actively monitors audit trail integrity and immediately detects any attempt to tamper with logs, ensuring evidence remains trustworthy.",
    },
    {
      img: mcaat2,
      title: "DDL/DML Growth (Database Footprint) Optimization",
      description:
        "Enabling DDL/DML logs increases database footprint and costs. With MCAAT, DDL/DML logging isn’t required. It captures critical DB activities automatically and maintains tamper-proof logs for compliance.",
    },
    {
      img: mcaat3,
      title: "Monitor Critical Database Logins",
      description:
        "Database-level changes bypasses application logging. MCAAT tracks privileged and critical DB logins in real time, closing one of the most common audit blind spots.",
    },
    {
      img: mcaat4,
      title: "Automatic Reactivation of SM19 Logging",
      description:
        "Audit logging can be manually disabled—intentionally or accidentally. MCAAT continuously checks logging status and automatically re-enables SM19 logs if they are turned off.",
    },
    {
      img: mcaat6,
      title: "Integrated Incident Logging (ITSM)",
      description:
        "Audit violations often remain undocumented or manually tracked. MCAAT automatically creates ITSM incidents, ensuring every compliance breach is logged, tracked, and resolved.",
    },
    {
      img: mcaat7,
      title: "Critical Table Change Monitoring",
      description:
        "Standard tools focus on application changes only. MCAAT monitors critical tables at both SAP application and database layers, ensuring no change goes unrecorded.",
    },
    {
      img: mcaat8,
      title: "Protection of Audit Evidence",
      description:
        "Logs without protection are not legally reliable. MCAAT safeguards audit evidence from deletion or manipulation, preserving integrity for statutory and forensic audits.",
    },
    {
      img: mcaat11,
      title: "Protection of CDHDR and CDPOS Tables",
      description:
        "Change document tables are critical for audit reconstruction. MCAAT explicitly protects CDHDR and CDPOS tables, ensuring SAP change history remains intact and reliable.",
    },
    {
      img: mcaat12,
      title: "Auditor-Friendly Dashboards",
      description:
        "Raw logs are not audit-ready. MCAAT provides structured, auditor-friendly dashboards and reports, reducing audit preparation effort and risk of interpretation errors.",
    },
  ];

  const Cardscontent = [
    {
      title: "Automated Audit Policy Enforcement",
      description:
        "MCAAT continuously monitors audit policies and logging configurations across SAP application and database layers. If audit logging is disabled, intentionally or accidentally, MCAAT automatically restores it, ensuring uninterrupted audit trail availability and compliance with MCA Rule 11(g)..",
      img: null,
      video: videomcaat1,
    },
    {
      title: "Automated Detection of Audit Trail Tampering",
      description:
        "Any attempt to delete, alter, or manipulate audit logs is detected in real time. MCAAT immediately records the event, preserves evidence, and triggers alerts or enforcement actions to maintain audit trail integrity and evidentiary reliability.",
      img: mcaat14,
      video: null,
    },
    {
      title: "Automated Protection of Audit Evidence",
      description:
        "MCAAT safeguards audit logs, change records, and supporting evidence from unauthorized access or modification. This ensures audit data remains complete, accurate, and defensible during internal reviews, statutory audits, and forensic investigations.",
      img: mcaat15,
      video: null,
    },
    {
      title: "Automated Monitoring of High-Risk System Activities",
      description:
        "Sensitive actions such as DEBUG mode usage, audit policy deletion, or critical configuration changes are continuously monitored. MCAAT detects these high-risk activities instantly, preventing silent compliance breaches and reducing reliance on post-facto audit reviews.",
      img: mcaat16,
      video: null,
    },
    {
      title: "Automated Audit-Ready Reporting",
      description:
        "Audit dashboards and reports are generated automatically with structured, evidence-backed data. MCAAT reduces audit preparation effort by providing immediate access to traceable, regulator-ready information without manual compilation or reconciliation.",
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
            MCAAT —
            {isMobile
              ? splitLetters("  MCA Audit \n Trail Enforcement \n for SAP")
              : splitLetters("  MCA Audit Trail \n Enforcement for SAP")}
          </h1>
          <p className="sub-para-text">
            MCAAT is a purpose-built solution that monitors, secures, and
            enforces audit trail integrity across SAP databases, ensuring
            critical activities cannot go untracked, disabled, or altered
          </p>
          <div className="banner-buttons">
            <Link to="/contact" className="red-button">
              Request MCAAT Demo
            </Link>
          </div>
        </div>
      </section>
      <SolutionCarousel data={content} />
      <SolutionCards
        label="Automated Controls Delivered by MCAAT"
        title="Compliance that enforces itself"
        description={isMobile ? "MCAAT delivers automated compliance controls that continuously protect audit trails,enforce logging policies and respond instantly to violations, ensuring MCA Rule 11(g) requirements are met at all times." : "MCAAT delivers automated compliance controls that continuously protect audit trails,enforce logging policies \n and respond instantly to violations, ensuring MCA Rule 11(g) requirements are met at all times."}
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
        title={<>Always-On Audit Trail Compliance for MCA Rule 11(g)</>}
        list={useCasesList}
        image={img4}
      />

      <Cta
        title="Always-On Audit Trail 
        Compliance for MCA Rule 11(g)"
        description="MCAAT continuously enforces, protects, and validates audit trails across SAP systems - automatically detecting tampering,
        reinstating disabled controls, and preserving audit-ready evidence without manual intervention"
        backgroundImage={bg}
        buttonText="Get Started"
      />
    </>
  );
}
