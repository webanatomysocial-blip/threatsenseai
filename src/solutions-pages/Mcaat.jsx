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
        "Audit Trail Enforcer is a robust audit security software package that will constantly keep a watch over and safeguard the integrity of your audit trails in SAP system and database. While logging is an important feature by itself, it fails to provide protection against data tampering.",
    },
    {
      question:
        "How does Audit Trail Enforcer ensure compliance with MCA Rule 11(g) in India?",
      answer: (
        <>
          <p>
            MCA Rule 11(g) requires organizations to maintain continuous and
            secure{" "}
            <Link
              style={{ textDecoration: "none" }}
              to="/blogs/mca-audit-trail-compliance"
            >
              {" "}
              audit trails
            </Link>{" "}
            that cannot be disabled or bypassed. Audit Trail Enforcer meets
            these requirements through automated controls:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
            <li style={{ marginBottom: "10px" }}>
              <>Continuous Monitoring:</> Audit policies and logging
              configurations are continuously monitored across SAP application
              and database layers
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>Automatic Reactivation:</> If audit logging is disabled
              (intentionally or accidentally), SM19 logs are automatically
              restored
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>Tampering detection:</> Any attempt to tamper with or manipulate
              the audit logs is noticed immediately.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>Protection of Evidence:</> Any attempts to tamper with audit
              logs and compliance papers are effectively prohibited.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>Audit-Ready Reports:</> Ready-to-use reports give evidence-based
              data that is audit-ready.
            </li>
          </ul>
          <p>
            In India, this solution is marketed as MCAAT (MCA Audit Trail) to
            specifically address MCA Rule 11(g) compliance requirements.
          </p>
        </>
      ),
    },
    {
      question:
        "What is the difference between Audit Trail Enforcer and SAP audit logging?",
      answer: (
        <>
          <p>
            While normal SAP audit logging (SM19) records actions, Audit Trail
            Enforcer offers extensive protection that regular logging cannot.
          </p>
          <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
            <li style={{ marginBottom: "10px" }}>
              <>Standard Logging:</> Can be manually disabled; logs can be
              erased without discovery; tamper resistance is lacking;
              database-level changes bypass application logs.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>Audit Trail Enforcer:</> cannot be disabled without automatic
              reactivation; tampering is immediately recognised; keeps logs with
              tamper-resistant security; monitors database logins and changes;
              provides auditor-ready dashboards.
            </li>
          </ul>
          <p>
            Additionally, Audit Trail Enforcer automatically captures key
            database activities without the need for expensive DDL/DML
            recording, which increases database footprint. Standard logs are
            frequently raw data that is not immediately audit-ready, whereas
            Audit Trail Enforcer generates organised, compliance-focused reports
            that cut audit preparation time by 40-60%.
          </p>
        </>
      ),
    },
    {
      question:
        "Can Audit Trail Enforcer detect and prevent log tampering attempts?",
      answer: (
        <>
          <p>
            Yes. Audit Trail Enforcer includes real-time tamper detection and
            automated enforcement capabilities:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
            <li style={{ marginBottom: "10px" }}>
              Immediately detects any attempt to delete, alter, or manipulate
              audit logs
            </li>
            <li style={{ marginBottom: "10px" }}>
              Records the tampering event with full context (who, what, when,
              where)
            </li>
            <li style={{ marginBottom: "10px" }}>
              Preserves tamper-proof evidence for investigation
            </li>
            <li style={{ marginBottom: "10px" }}>
              Triggers instant alerts and automated enforcement actions (ITSM
              incident creation, system alerts)
            </li>
            <li style={{ marginBottom: "10px" }}>
              Stops silent breach of compliance by spotting risk activities such
              as debug mode, policy deletion, and configuration changes.
            </li>
          </ul>
          <p>
            Audit Trail Enforcer ensures that audit data is legally defensible
            and reliable for the regulatory bodies and auditors by shifting to
            audit trail integrity based on controls rather than trust.
          </p>
        </>
      ),
    },
    {
      question:
        "Does Audit Trail Enforcer work with SAP on Cloud (RISE) and SAP architectures?",
      answer: (
        <>
          <p>
            Yes. Audit Trail Enforcer ensures consistent audit controls within
            all SAP landscapes:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
            <li style={{ marginBottom: "10px" }}>
              <>On-Premise SAP:</> Complete compatibility with classic SAP
              solutions, including database security
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>SAP HANA:</> Designed specifically for SAP HANA databases
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>SAP on Cloud (RISE):</> Functional within mixed and cloud-based
              SAP systems without changes to the system design
            </li>
            <li style={{ marginBottom: "10px" }}>
              <>MS SQL:</> Support for Microsoft SQL Server databases
            </li>
          </ul>
          <p>
            The versatile nature of this solution allows for consistency in
            audit trail enforcement irrespective of the underlying
            infrastructure, whether you are running on-premise, in the cloud, or
            in the process of transitioning to SAP.
          </p>
        </>
      ),
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
      <SolutionCarousel icon={FaHistory} data={content} />
      <SolutionCards
        label="Automated Controls Delivered"
        icon={FaSync}
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
          icon: <FaChartBar size={16} />,
          label: "Key Capabilities",
          title: "What it brings?",
        }}
      />

      <ResultsComp icon={FaDatabase} />
      <UseCases
        label="Use Cases"
        icon={FaBullseye}
        title={<>Always-On Audit Trail Compliance with Audit Trail Enforcer </>}
        list={useCasesList}
        image={img4}
        srcbtn="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
      />

      <p
        className="para-text"
        style={{
          marginTop: isMobile ? "20px" : "-70px",
          marginBottom: isMobile ? "60px" : "40px",
          marginLeft: isMobile ? "20px" : "120px",
          marginRight: isMobile ? "20px" : "0px",
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
