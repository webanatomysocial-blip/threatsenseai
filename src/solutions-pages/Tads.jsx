import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/Solutions-pages.css";
import SolutionCards from "../Solutions-components/SolutionCards";
import RisingThreats from "../Solutions-components/RisingThreats";
import {
  FaTh,
  FaLock,
  FaBullseye,
  FaTimes,
  FaCheck,
  FaGlobe,
  FaSearch,
  FaFileAlt,
  FaBell,
  FaUserShield,
  FaShieldAlt,
  FaClipboardCheck,
  FaCogs,
  FaUserLock,
  FaServer,
} from "react-icons/fa";

import CapabilitiesSection from "../components/CapabilitiesSection";
import UseCases from "../Solutions-components/UseCases";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import ComparisonTable from "../Solutions-components/ComparisonTable";
import SolutionCarousel from "../Solutions-components/SolutionCarousel";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";
import ThreatRadiation from "../Solutions-components/ThreatRadiation";
import CoreTechs from "../Solutions-components/CoreTechs";

export default function Tads() {
  const content = [
    {
      title: "Minimize DB Footprint",
      description:
        "Delivers deep visibility without heavy logging—reducing storage usage while preserving SAP performance.",
      img: img,
    },
    {
      title: "Real-time Alerts & Incident Creation",
      description:
        "Instantly triggers alerts and service tickets for non-compliant actions like audit log tampering or unauthorized changes.",
      img: img1,
    },
    {
      title: "Rule 11(g) Compliance",
      description:
        "Automatically captures all DDL audit requirements across SAP systems to ensure full regulatory adherence.",
      img: img2,
    },
    {
      title: "Seamless Integration",
      description:
        "Integrates effortlessly with your existing SAP landscape without requiring major architectural changes.",
      img: img3,
    },
  ];
  const core = [
    {
      icon: <FaSearch />,
      title: "Deep Data Discovery",
      description:
        "Continuously discovers, inventories, and classifies sensitive data across SAP ECC, S/4HANA, HANA DB, and connected systems. Identifies PII, financial data, credentials, and regulated fields to establish a defensible data baseline for security and compliance.",
    },
    {
      icon: <FaLock />,
      title: "Policy Enforcement",
      description:
        "Enforces fine-grained data security policies based on user role, transaction context, data sensitivity, and destination. Prevents unauthorized exports, excessive access, and risky data movements through real-time blocking, justification workflows, or adaptive warnings.",
    },
    {
      icon: <FaFileAlt />,
      title: "Compliance Reporting",
      description:
        "Delivers audit-ready reports mapped to GDPR, DPDP, SOX, PCI-DSS, and internal data governance controls. Provides traceable evidence of data access, usage, and enforcement actions to support audits, regulatory inquiries, and continuous compliance monitoring.",
    },
    {
      icon: <FaBell />,
      title: "Smart Alerting",
      description:
        "Generates high-fidelity, context-aware alerts for real data risk scenarios, not noise. Prioritizes insider misuse, mass data access, and policy violations, with seamless integration into SIEM, SOAR, and ITSM platforms for faster investigation and response.",
    },
  ];

  const capabilities = [
    {
      icon: <FaSearch />,
      title: "Deep Data Discovery",
      description:
        "Continuously discovers, inventories, and classifies sensitive data across SAP ECC, S/4HANA, HANA DB, and connected systems. Identifies PII, financial data, credentials, and regulated fields to establish a defensible data baseline for security and compliance.",
    },
    {
      icon: <FaLock />,
      title: "Policy Enforcement",
      description:
        "Enforces fine-grained data security policies based on user role, transaction context, data sensitivity, and destination. Prevents unauthorized exports, excessive access, and risky data movements through real-time blocking, justification workflows, or adaptive warnings.",
    },
    {
      icon: <FaFileAlt />,
      title: "Compliance Reporting",
      description:
        "Delivers audit-ready reports mapped to GDPR, DPDP, SOX, PCI-DSS, and internal data governance controls. Provides traceable evidence of data access, usage, and enforcement actions to support audits, regulatory inquiries, and continuous compliance monitoring.",
    },
    {
      icon: <FaBell />,
      title: "Smart Alerting",
      description:
        "Generates high-fidelity, context-aware alerts for real data risk scenarios, not noise. Prioritizes insider misuse, mass data access, and policy violations, with seamless integration into SIEM, SOAR, and ITSM platforms for faster investigation and response.",
    },
  ];

  const Benefits = [
    {
      icon: <FaUserShield />,
      title: "CISO & Security Leaders",
      description:
        "Reduce enterprise risk exposure and demonstrate proactive data protection to leadership and regulators. Gain unified visibility into SAP data flows, insider risk, and data leakage paths across the organization.",
    },
    {
      icon: <FaShieldAlt />,
      title: "SAP Security & GRC Teams",
      description:
        "Extend SAP security beyond access controls. Enforce data-centric policies aligned with SAP roles and authorizations while detecting unauthorized data exports, excessive access, and policy violations in real time.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Audit & Compliance Teams",
      description:
        "Meet regulatory and statutory requirements with automated evidence collection. Maintain continuous compliance across GDPR, DPDP, SOX, and industry mandates with audit-ready reports and traceable data access logs.",
    },
    {
      icon: <FaCogs />,
      title: "Enterprise Architects",
      description:
        "Deploy seamlessly across complex SAP landscapes without redesign. Support hybrid, cloud, and RISE environments using a scalable, non-intrusive architecture aligned with enterprise security standards.",
    },
    {
      icon: <FaUserLock />,
      title: "Data Protection Officer (DPO) & Privacy Office",
      description:
        "Enforce privacy-by-design and data minimization principles. Prevent overexposure of PII and sensitive data while demonstrating accountability, lawful processing, and continuous compliance with global privacy regulations.",
    },
    {
      icon: <FaServer />,
      title: "IT Operations & Basis Teams",
      description:
        "Maintain SAP performance and stability while supporting security controls. Gain real-time visibility into risky data activities without disrupting transports, system operations, or day-to-day SAP administration.",
    },
  ];

  const useCasesList = [
    "Protect critical SAP data from insider threats and data leaks",
    "Real-time visibility into sensitive data access and exports",
    "Automated blocking of non-compliant actions and audit log tampering",
    "Ensure compliance with Rule 11(g) and other regulatory requirements",
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
    return text.split("").map((char, index) => (
      <span key={index} className="split-text-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };
  return (
    <>
      <section className="tads-banner">
        <div className="tads-banner-content">
          <h1 ref={headerRef} className="big-text-head">
            TADS — {splitLetters("ThreatSense AI Data Security")}
          </h1>
          <p className="sub-para-text">
            Protect sensitive SAP data from insider misuse, AI-driven data
            leaks, and unauthorized access—across applications, browsers,
            endpoints, and databases.
          </p>

          <p className="sub-para-text">
            Built for modern data risks. Crafted for SAP landscapes.
          </p>
        </div>
      </section>
      <CoreTechs />
      <ThreatRadiation />

      <CapabilitiesSection
        items={capabilities}
        gridTemplateColumns="repeat(2, 1fr)"
      />
      <RisingThreats />
      {/* <SolutionCarousel
        label="Why TADS?"
        title={
          <>
            Built for Data <br /> Protection
          </>
        }
        data={content}
        paddingTop="120px"
      /> */}
      <SolutionCards
        items={content}
        label="Why TADS?"
        title={
          <>
            Built for Data <br /> Protection
          </>
        }
        marginTop="0px"
      />

      <CapabilitiesSection
        items={core}
        gridTemplateColumns="repeat(2, 1fr)"
        header={{
          icon: <FaGlobe size={16} />,
          label: "Key Capabilities",
          title: "Core Capabilities",
        }}
      />

      {/* Protection Layer Section */}
      {/* <section className="protection-layer-section">
        <div className="capabilities-header">
          <div className="sub-para-text security-label">
            <FaGlobe size={16} style={{ marginRight: "4px" }} /> Protection
            layer.
          </div>
          <h2 className="head-text">Complete Data Leak Protection</h2>
        </div>

        <div className="protection-grid">
          <div className="leak-column">
            <h3>How Data Leaks</h3>
            <div className="pl-list">
              {[
                "File Downloads",
                "Email Exports",
                "Copy/Paste",
                "API Calls",
                "Cloud Upload",
              ].map((item, i) => (
                <div key={i} className="pl-item">
                  <div className="pl-icon-x">
                    <FaTimes />
                  </div>
                  <span className="pl-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="block-column">
            <h3>How TADS Blocks It</h3>
            <div className="pl-list">
              {[
                "Content-aware blocking",
                "Real-time classification",
                "User justification workflow",
                "Encrypted channel protection",
                "Print/screenshot prevention",
              ].map((item, i) => (
                <div key={i} className="pl-item">
                  <div className="pl-icon-check">
                    <FaCheck />
                  </div>
                  <span className="pl-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <ComparisonTable />

      <UseCases
        label="Use Cases"
        title={
          <>
            Where ThreatSense <br /> TADS Delivers <br /> Immediate Value
          </>
        }
        list={useCasesList}
        image={img1}
      />
      <CapabilitiesSection
        header={{
          icon: <FaGlobe size={16} />,
          label: "Benefits",
          title: "Who TADS is Built For",
        }}
        border="none"
        borderRadius="20px"
        items={Benefits}
        gridTemplateColumns="repeat(2, 1fr)"
      />
      <Cta
        title="Control How SAP Data Leaves Your Enterprise"
        description="Real-time visibility and enforcement to prevent insider leaks, excessive access,
        and unauthorized data sharing across SAP and beyond."
        backgroundImage={bg}
        buttonText="Book a Demo"
      />
    </>
  );
}
