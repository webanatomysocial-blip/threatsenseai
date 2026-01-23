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

import { FaTh, FaLock, FaBullseye, FaGlobe } from "react-icons/fa";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";

export default function Mcaat() {
  const core = [
    {
      icon: <FaTh />,
      title: "Comprehensive Coverage",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
    },
    {
      icon: <FaLock />,
      title: "Identity & Access Protection",
      description:
        "Continuously monitors user activities, detects anomalies, and automatically blocks suspicious actions.",
    },
    {
      icon: <FaBullseye />,
      title: "Accurate Risk Detection",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
    },
    {
      icon: <FaBullseye />,
      title: "Accurate Risk Detection",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
    },
    {
      icon: <FaBullseye />,
      title: "Accurate Risk Detection",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
    },
    {
      icon: <FaBullseye />,
      title: "Accurate Risk Detection",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
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
        "Enabling DDL/DML logs increases the DB footprint and costs. With MCAAT, DDL/DML logging is not required and all the critical DB activities are captured automatically and a tampered proof logs are maintained.",
    },
    {
      img: img3,
      title: "Monitor Critical Database Logins",
      description:
        "Database-level changes bypasses application logging. MCAAT tracks privileged and critical DB logins in real time, closing one of the most common audit blind spots.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Real-Time Alerts for High-Risk Actions (Including DEBUG)",
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
      title: "Critical Table Change Monitoring (Application & DB Level)",
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
      img: img1,
      title: "Detect Log Tampering",
      description:
        "Standard logs can be altered or deleted without detection. MCAAT actively monitors audit trail integrity and immediately detects any attempt to tamper with logs, ensuring evidence remains trustworthy.",
    },
    {
      img: img2,
      title: "DDL/DML Growth (Database Footprint) Optimization",
      description:
        "Enabling DDL/DML logs increases the DB footprint and costs. With MCAAT, DDL/DML logging is not required and all the critical DB activities are captured automatically and a tampered proof logs are maintained.",
    },
    {
      img: img3,
      title: "Monitor Critical Database Logins",
      description:
        "Database-level changes bypasses application logging. MCAAT tracks privileged and critical DB logins in real time, closing one of the most common audit blind spots.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Real-Time Alerts for High-Risk Actions (Including DEBUG)",
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
      title: "Critical Table Change Monitoring (Application & DB Level)",
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

  const useCasesList = [
    "Identify and track sensitive configurations and customization in SAP",
    "Monitor user activity for potential security violations or unauthorized changes",
    "Enable faster incident response with automated alerting and forensics",
    "Simplify audit preparation with comprehensive logging and reporting",
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
          <p className="sub-para-text">
            Continuous compliance with MCA Rule 11(g) through automated,
            tamper-proof audit controls.
          </p>
          <p className="sub-para-text">
            MCAAT is a purpose-built solution that monitors, secures, and
            enforces audit trail integrity across SAP databases, ensuring
            critical activities cannot go untracked, disabled, or altered.
          </p>
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
          label: "Capabilities",
          title: "What it brings?",
        }}
      />

      <UseCases
        label="Use Cases"
        title={
          <>
            Where ThreatSense <br /> MCAAT Delivers <br /> Immediate Value
          </>
        }
        list={useCasesList}
        image={img2}
      />
      <ResultsComp />

      <Cta
        title="Stay Ahead of Threats with AI-Powered Security"
        description="Protect your SAP® environments with real-time monitoring, 
        automated response, and deep threat analytics. Experience 
        the power of ThreatSense AI today!"
        backgroundImage={bg}
        buttonText="Get Started"
      />
    </>
  );
}
