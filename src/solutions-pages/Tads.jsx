import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/Solutions-pages.css";
import SolutionCards from "../Solutions-components/SolutionCards";
import RisingThreats from "../Solutions-components/RisingThreats";
import { Link } from "react-router-dom";
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
  FaBalanceScale,
  FaChartPie,
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
import dmssimg from "../assets/solutions/tads/tads-in/3.png";
import tadsimg from "../assets/solutions/tads/tads-in/1.png";
import dotimg from "../assets/solutions/tads/tads-in/2.png";
import usecaseimg from "../assets/solutions/tads/tads-in/cta.png";
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
        "Automate regulatory obligations across GDPR, DPDPA, CCPA, and evolving privacy laws with built-in workflows, controls, and evidence reporting. ",
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
    {
      icon: <FaBalanceScale />,
      title: "Privacy Compliance Made Operational",
      description:
        "Automate regulatory obligations across GDPR, DPDPA, CCPA, and evolving privacy laws with built-in workflows, controls, and evidence reporting. ",
    },
    {
      icon: <FaChartPie />,
      title: "Data Risk Analytics ",
      description:
        "Provides unified visibility into data exposure, policy violations, user behavior, and emerging risks through dashboards, trends, and actionable insights. ",
    },

  ];

  const Benefits = [
    {
      icon: <FaUserShield />,
      title: "CISO & Security Leaders",
      description:
        "Reduce enterprise data risk, strengthen governance, and gain executive visibility into insider threats, policy violations, and sensitive data movement.",
    },
    {
      icon: <FaShieldAlt />,
      title: "SAP Security & GRC Teams",
      description:
        "Extend SAP security beyond access controls with data-centric policies that prevent unauthorized exports, excessive access, and misuse in real time.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Audit & Compliance Teams",
      description:
        "Meet regulatory requirements with automated evidence collection, continuous monitoring, and audit-ready reporting across key compliance frameworks.",
    },
    {
      icon: <FaCogs />,
      title: "Enterprise Architects",
      description:
        "Deploy seamlessly across SAP ECC, S/4HANA, HANA, cloud, hybrid, and RISE environments with scalable enterprise-ready architecture.",
    },
    {
      icon: <FaUserLock />,
      title: "Data Privacy Officers",
      description:
        "Operationalize privacy programs with consent governance, retention controls, rights requests, and defensible evidence for evolving regulations.",
    },
    {
      icon: <FaServer />,
      title: "IT Operations Teams",
      description:
        "Centralize policy enforcement, streamline administration, and reduce operational overhead with unified controls across systems, browsers, and endpoints.",
    },
  ];

  const useCasesList = [
    "Prevent insider-driven data leaks across SAP, browsers, and connected environments in real time ",
    " Gain immediate visibility into user actions, policy violations, and high-risk behavior ",
    "Centrally govern data movement across applications, devices, and GenAI usage channels",
    "Accelerate audits, investigations, and compliance readiness with unified evidence and reporting ",
  ];

  const technologies = [
    {
      id: "01",
      title: "TADS Protect",
      subtitle:
        "Prevents unauthorized SAP data exports, excessive access, insider misuse, and risky data movement through real-time, policy-driven controls built for SAP environments.",
      description:
        "TADS Protect ensures that sensitive SAP data remains within the enterprise by enforcing context-aware security policies at the point of access and egress.",
      image: tadsimg,
      video: null,
      url: "/tads-protect",
      btnText: "Explore TADS Protect",
    },
    {
      id: "02",
      title: "Dot Layer",
      subtitle:
        "Stops browser-based data leaks by controlling copy, paste, upload, print, screenshot, and AI prompt actions - without agents or complex endpoint deployments.",
      description:
        "Dot Layer provides a secure browser environment for SAP, preventing data leakage through common web-based actions without impacting user experience.",
      image: dotimg,
      video: null,
      url: "/dot-layer",
      btnText: "Explore Dot Layer",
    },
    {
      id: "03",
      title: "DMSS – Data Masking & Scrambling",
      subtitle:
        "Masks and scrambles sensitive SAP data in production and non-production systems to reduce exposure, enable safe testing, and support privacy compliance.",
      description:
        "DMSS ensures that sensitive data is only visible to authorized personnel, protecting privacy and maintaining regulatory compliance across SAP landscapes.",
      image: dmssimg,
      video: null,
      url: "/dmss",
      btnText: "Explore DMSS",
    },
    {
      id: "04",
      title: "DPRM – Data Privacy Regulation Manager",
      subtitle:
        "Operationalizes privacy laws such as GDPR, DPDPA, CCPA, and similar regulations through consent governance, data subject rights workflows, retention controls, and compliance reporting.",
      description:
        "DPRM streamlines privacy management by automating regulatory workflows and providing comprehensive reporting for global privacy standards.",
      image: tadsimg, // Using tadsimg as a fallback for the new product
      video: null,
      url: "/dprm",
      btnText: "Explore DPRM",
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
  }, [isMobile]);

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
      <section className="tads-banner">
        <div className="tads-banner-content">
          <h1 ref={headerRef} className="big-text-head">
            ThreatSenseAI ADS
            {isMobile
              ? splitLetters("\nData Security Suite (TADS)")``
              : splitLetters("\nData Security Suite (TADS)")}
          </h1>
          <p className="sub-para-text">
            Unified protection for SAP data across leaks, privacy, masking, browsers, and compliance.

            <br />
            <br />

            Four products. One platform. Complete SAP data protection.

            <br />
            <br />


            Protect sensitive enterprise data across SAP applications, browsers, databases, endpoints, and AI-driven workflows with an integrated suite built for modern data risks.

            Built for modern data risks. Crafted for SAP landscapes.
          </p>
          <a href="https://tidycal.com/threatsenseai/tads" className="black-button">
            Explore the Suite
          </a>
        </div>
      </section>
      <CoreTechs
        technologies={technologies}
        subheading="Complete SAP Data Protection Across Every Risk Layer"
        description="Prevent data leaks, reduce insider risk, secure sensitive data usage, and stay compliant with global privacy regulations - all from one integrated suite."
      />
      <ThreatRadiation />

      <CapabilitiesSection
        items={capabilities}
        gridTemplateColumns="repeat(2, 1fr)"
      />

      <ComparisonTable />

      <UseCases
        label="Use Cases"
        title={
          <>
            Where ThreatSense AI Data Security Suite Delivers Immediate Value
          </>
        }
        list={useCasesList}
        image={usecaseimg}
        btnName="Explore the Suite"
        srcbtn="https://tidycal.com/threatsenseai/tads"
      />
      <CapabilitiesSection
        header={{
          icon: <FaGlobe size={16} />,
          label: "Benefits",
          title: "Built for Teams That Protect Enterprise Data",
        }}
        border="none"
        borderRadius="20px"
        items={Benefits}
        gridTemplateColumns="repeat(2, 1fr)"
      />
      {/* Protection Layer Section */}
      <section className="protection-layer-section">
        <div className="capabilities-header">
          <div className="sub-para-text security-label">
            <FaGlobe size={16} style={{ marginRight: "4px" }} /> Unified Protection
          </div>
          <h2 className="head-text">Complete Protection Against Modern Data Leaks</h2>
        </div>

        <div className="protection-grid">
          <div className="leak-column">
            <h3>How Data Leaks Happen</h3>
            <div className="pl-list">
              {[
                "Copying sensitive SAP or enterprise data",
                "Pasting data into AI tools, browsers, or chat apps",
                "Uploading files to personal email or external sites",
                "Screenshots, screen sharing, or unauthorized printing",
                "Uncontrolled USB and peripheral device usage",
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
            <h3>How ThreatSense AI Blocks It</h3>
            <div className="pl-list">
              {[
                "Blocks copy, paste, downloads, and data exports",
                "Detects and stops data shared with AI tools",
                "Prevents unauthorized uploads and external sharing",
                "Restricts screenshots, screen capture, and printing",
                "Enforces USB, device, and peripheral controls",
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
        <a href="https://tidycal.com/threatsenseai/tads" className="black-button">
          Request a Live Demo
        </a>
      </section>
      <RisingThreats />
      <Cta
        title="Take Control of How SAP Data Moves
         Across Your Enterprise "
        description="Gain real-time visibility and policy enforcement to prevent insider leaks, excessive access,
         and unauthorized data sharing across SAP, browsers, and connected systems. "
        backgroundImage={bg}
        buttonText="Book a Demo"
        link="https://tidycal.com/threatsenseai/tads"
      />
    </>
  );
}
