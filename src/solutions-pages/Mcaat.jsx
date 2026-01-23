import React from "react";
import "../css/Solutions-pages.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SolutionCarousel from "../Solutions-components/SolutionCarousel";
import SolutionCards from "../Solutions-components/SolutionCards";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";
import CapabilitiesSection from "../components/CapabilitiesSection";
import UseCases from "../Solutions-components/UseCases";
import ResultsComp from "../Solutions-components/ResultsComp";
import bgImage from "../assets/home/Our-Solutions/bg1.png";

import { FaTh, FaLock, FaBullseye, FaGlobe } from "react-icons/fa";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";

export default function Mcaat() {
  const core = [
    {
      icon: <FaTh />,
      title: "Always-On Audit Readiness",
      description:
        "Eliminates reliance on manual checks by ensuring audit trails are always active. Even if logs are disabled during maintenance or misuse, MCAAT restores continuity automatically, removing one of the most common causes of audit non-compliance.",
    },
    {
      icon: <FaLock />,
      title: "Before & After Value Capture",
      description:
        "Provides full context for every critical change by recording before-and-after values. This enables precise root-cause analysis, faster audit validation, and clear accountability, without requiring forensic reconstruction during audits or investigations.",
    },
    {
      icon: <FaBullseye />,
      title: "Protection from Audit Trail Tampering",
      description:
        "Shifts audit integrity from trust-based to control-based. By preventing and detecting tampering attempts in real time, MCAAT ensures audit data remains legally defensible and reliable for regulators, auditors, and internal investigations.",
    },
    {
      icon: <FaBullseye />,
      title: "Auditor-Ready Dashboards",
      description:
        "Reduces audit effort by presenting evidence in a format auditors understand immediately. Timelines, change histories, and exportable reports eliminate last-minute data compilation and significantly shorten audit cycles.",
    },
    {
      icon: <FaBullseye />,
      title: "Optimized Logging to Reduce DB Bloat",
      description:
        "Balances compliance with performance by capturing only audit-relevant, high-value events. This prevents excessive database growth while maintaining complete traceability, avoiding the trade-off between system performance and audit coverage. ",
    },
    {
      icon: <FaBullseye />,
      title: "Solution for MS SQL, SAP HANA & RISE",
      description:
        "Delivers consistent audit controls across on-premise, hybrid, and cloud SAP landscapes. MCAAT adapts to modern SAP architectures without requiring system redesign, ensuring compliance continuity during migrations and transformations. ",
    },
  ];
  const content = [
    {
      img: img1,
      title: "Detect Log Tampering",
      description:
        "Standard logs can be altered or deleted without detection. MCAAT actively monitors audit trail integrity and immediately detects any attempt to tamper with logs, ensuring evidence remains trustworthy.",
    },
    {
      img: img2,
      title: "DDL/DML Growth (Database Footprint) Optimization",
      description:
        "Enabling DDL/DML logs increases database footprint and costs. With MCAAT, DDL/DML logging isn’t required. It captures critical DB activities automatically and maintains tamper-proof logs for compliance.",
    },
    {
      img: img3,
      title: "Monitor Critical Database Logins",
      description:
        "Database-level changes bypasses application logging. MCAAT tracks privileged and critical DB logins in real time, closing one of the most common audit blind spots.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Real-Time Alerts for High-Risk Actions",
      description:
        "Standard methods capture changes after the fact - if at all. MCAAT raises real-time alerts for sensitive actions such as DEBUG-mode changes, enabling immediate investigation.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Automatic Reactivation of SM19 Logging",
      description:
        "Audit logging can be manually disabled—intentionally or accidentally. MCAAT continuously checks logging status and automatically re-enables SM19 logs if they are turned off.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Integrated Incident Logging (ITSM)",
      description:
        "Audit violations often remain undocumented or manually tracked. MCAAT automatically creates ITSM incidents, ensuring every compliance breach is logged, tracked, and resolved.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Critical Table Change Monitoring",
      description:
        "Standard tools focus on application changes only. MCAAT monitors critical tables at both SAP application and database layers, ensuring no change goes unrecorded.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Protection of Audit Evidence",
      description:
        "Logs without protection are not legally reliable. MCAAT safeguards audit evidence from deletion or manipulation, preserving integrity for statutory and forensic audits.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Automated Enforcement Actions",
      description:
        "Most compliance tools stop at alerts. MCAAT can automatically trigger enforcement actions, such as locking users or escalating incidents, when violations occur.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Protection of Audit Evidence",
      description:
        "Logs without protection are not legally reliable. MCAAT safeguards audit evidence from deletion or manipulation, preserving integrity for statutory and forensic audits.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Protection of CDHDR and CDPOS Tables",
      description:
        "Change document tables are critical for audit reconstruction. MCAAT explicitly protects CDHDR and CDPOS tables, ensuring SAP change history remains intact and reliable.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
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
      link: "#",
      img: bgImage,
    },
    {
      title: "Automated Detection of Audit Trail Tampering",
      description:
        "Any attempt to delete, alter, or manipulate audit logs is detected in real time. MCAAT immediately records the event, preserves evidence, and triggers alerts or enforcement actions to maintain audit trail integrity and evidentiary reliability.",
      link: "#",
      img: bgImage,
    },
    {
      title: "Automated Protection of Audit Evidence",
      description: "MCAAT safeguards audit logs, change records, and supporting evidence from unauthorized access or modification. This ensures audit data remains complete, accurate, and defensible during internal reviews, statutory audits, and forensic investigations.",
      link: "#",
      img: bgImage,
    },
    {
      title: "Automated Monitoring of High-Risk System Activities",
      description: "Sensitive actions such as DEBUG mode usage, audit policy deletion, or critical configuration changes are continuously monitored. MCAAT detects these high-risk activities instantly, preventing silent compliance breaches and reducing reliance on post-facto audit reviews.d",
      link: "#",
      img: bgImage,
    },
    {
      title: "Automated Audit-Ready Reporting",
      description:
        "Audit dashboards and reports are generated automatically with structured, evidence-backed data. MCAAT reduces audit preparation effort by providing immediate access to traceable, regulator-ready information without manual compilation or reconciliation.",
      link: "#",
      img: bgImage,
    },
  ];

  const useCasesList = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    "Consequatur ex enim fuga necessitatibus quo ipsa id minima impedit eligendi saepe? Id eius laboriosam sed?",
    "Consequatur ex enim fuga necessitatibus quo ipsa id minima impedit eligendi saepe? Id eius laboriosam sed?",
  ];

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
  }, []);

  const splitLetters = (text) => {
    return text.split("").map((char, index) => {
      if (char === "\n") {
        return <br key={index} />;
      }
      return (
        <span key={index} className="split-text-char">
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
            MCAAT — {splitLetters("MCA Audit Trail \n Enforcement for SAP")}
          </h1>
          {/* <p className="sub-para-text">
            Continuous compliance with MCA Rule 11(g) through automated,
            tamper-proof audit controls.
          </p> */}
          <p className="sub-para-text">
            MCAAT is a purpose-built solution that monitors, secures, and
            enforces audit trail integrity across SAP databases, ensuring
            critical activities cannot go untracked, disabled, or altered
          </p>
          <div className="banner-buttons">
            <a href="#" className="red-button">
              Request MCAAT Demo
            </a>
          </div >
        </div>
      </section>
      <SolutionCarousel data={content} />
      <SolutionCards
        label="Automated Controls Delivered by MCAAT"
        title="Compliance that enforces itself"
        description="MCAAT delivers automated compliance controls that continuously protect audit trails, enforce logging policies, and respond instantly to violations, ensuring MCA Rule 11(g) requirements are met at all times."
        items={Cardscontent}
        marginTop="0px"
      />

      <CapabilitiesSection
        items={core}
        gridTemplateColumns="repeat(2, 1fr)"
        header={{
          icon: <FaGlobe size={16} />,
          label: "Key Capabilities",
          title: "What it brings?",
        }}
      />

      <ResultsComp />
      <UseCases
        label="Use Cases"
        title={
          <>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </>
        }
        list={useCasesList}
        image={img2}
      />

      <Cta
        title="Always-On Audit Trail 
        Compliance for MCA Rule 11(g)"
        description="MCAAT continuously enforces, protects, and validates audit trails across SAP systems - automatically detecting tampering,
        reinstating disabled controls, and preserving audit-ready evidence without manual intervention."
        backgroundImage={bg}
        buttonText="Get Started"
      />
    </>
  );
}
