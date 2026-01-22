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
  ];

  const capabilities = [
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
  ];

  const Benefits = [
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
            TADS — {splitLetters("Data Security for SAP")}
          </h1>
          <p className="sub-para-text">
            Beyond Endpoint Security. Built for Data Protection. Protect your
            most critical SAP data from insider threats, AI-driven data leaks,
            and compliance risks—before damage occurs.
          </p>
        </div>
      </section>

      <CapabilitiesSection
        items={capabilities}
        gridTemplateColumns="repeat(3, 1fr)"
      />
      <RisingThreats />
      <SolutionCarousel
        label="Why TADS?"
        title={
          <>
            Built for Data <br /> Protection
          </>
        }
        data={content}
        paddingTop="120px"
      />
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

      <CapabilitiesSection items={core} gridTemplateColumns="repeat(2, 1fr)" />

      {/* Protection Layer Section */}
      <section className="protection-layer-section">
        <div className="capabilities-header">
          <div className="sub-para-text security-label">
            <FaGlobe size={16} style={{ marginRight: "4px" }} /> Protection
            layer.
          </div>
          <h2 className="head-text">Complete Data Leak Protection</h2>
        </div>

        <div className="protection-grid">
          {/* Left Column: How Data Leaks */}
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

          {/* Right Column: How TADS Blocks It */}
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
      </section>
      <ComparisonTable />
      <CapabilitiesSection
        border="none"
        borderRadius="20px"
        items={Benefits}
        gridTemplateColumns="repeat(2, 1fr)"
      />
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
      <Cta
        title="Stay Ahead of Threats with
AI-Powered Security"
        description="Protect your SAP® environments with real-time monitoring, 
        automated response, and deep threat analytics. Experience 
        the power of ThreatSense AI today!"
        backgroundImage={bg}
        buttonText="Get Started"
      />
    </>
  );
}
