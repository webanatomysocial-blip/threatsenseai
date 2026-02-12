import "../css/Solutions-pages.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";

import soar from "../assets/home/Custom-Options/SOAR Focus.png";
import detect from "../assets/home/Custom-Options/Detection Focus.png";
import govern from "../assets/home/Custom-Options/Governance focus.png";
import platform from "../assets/home/Custom-Options/Focus Response.png";

import real from "../assets/solutions/siem/1.png";
import real1 from "../assets/solutions/siem/2.png";
import real2 from "../assets/solutions/siem/3.png";
import real3 from "../assets/solutions/siem/4.png";
import real4 from "../assets/solutions/siem/5.png";
import real5 from "../assets/solutions/siem/6.png";

import SolutionCarousel from "../Solutions-components/SolutionCarousel";
import SolutionCards from "../Solutions-components/SolutionCards";
import CapabilitiesSection from "../components/CapabilitiesSection";
import UseCases from "../Solutions-components/UseCases";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import {
  FaTh,
  FaLock,
  FaBullseye,
  FaGlobe,
  FaLayerGroup,
  FaUserShield,
  FaSearchPlus,
  FaMicroscope,
  FaMagic,
} from "react-icons/fa";

export default function SiemSoar() {
  const content = [
    {
      title: "Real-time Alerts & Incident Creation",
      description:
        "Continuously monitors SAP security events and system activities to detect suspicious behavior in real time. Automatically generates alerts and security incidents, enabling faster investigation and response without manual intervention",
      img: real,
    },
    {
      title: "Intelligent Event Correlation",
      description:
        "Correlates events across SAP application servers, databases, and connected systems to identify complex attack patterns that isolated logs cannot reveal. Reduces noise while highlighting high-risk security signals.",
      img: real1,
    },
    {
      title: "Automated Response Playbooks",
      description:
        "Triggers predefined response actions when threats are detected, such as session termination, alert escalation, or access control actions, ensuring consistent and rapid containment of security incidents",
      img: real2,
    },
    {
      title: "Compliance & Audit Readiness",
      description:
        "Maintains structured, centralized security records for SAP activities, supporting internal audits and regulatory requirements. Ensures traceability of events, alerts, and response actions without additional operational overhead.",
      img: real3,
    },
    {
      title: "Seamless SAP Integration",
      description:
        "Integrates smoothly with existing SAP landscapes without requiring major architectural changes. Designed to work alongside current SAP security configurations and enterprise monitoring tools",
      img: real4,
    },
    {
      title: "Minimal Performance Impact",
      description:
        "Delivers deep security visibility while keeping system and database overhead low. Designed to operate efficiently without affecting SAP performance or business operations.",
      img: real5,
    },
  ];
  const cardcontent = [
    {
      title: "SOAR Focus",
      subtitle: "Orchestrated Incident Response",
      description:
        "When a security event is detected, response should be immediate and consistent. SIEM & SOAR for SAP enables automated response workflows that guide incidents through investigation, containment, and remediation, without relying on manual intervention.",
      img: soar,
      readMoreContent: (
        <>
          <ul>
            <li>Guided investigation workflows</li>
            <li>Automated containment based on risk severity</li>
            <li>Controlled remediation with full traceability</li>
          </ul>
          <p>
            <strong>Outcome:</strong> Incidents are handled faster, safer, and
            with predictable outcomes.
          </p>
        </>
      ),
    },
    {
      title: "Detection Focus",
      subtitle: "Immediate Threat Visibility",
      description:
        "SAP security events are identified and surfaced the moment they occur. Suspicious activities are converted into actionable alerts and structured incidents, enabling security teams to respond without delay.",
      img: detect,
      readMoreContent: (
        <>
          <ul>
            <li>Continuous monitoring of SAP activities</li>
            <li>Instant alert generation for critical events</li>
            <li>Clear incident context for SOC teams</li>
          </ul>
          <p>
            <strong>Outcome:</strong> Threats are detected early—before they
            escalate.
          </p>
        </>
      ),
    },
    {
      title: " Governance Focus",
      subtitle: "Built-in Audit Readiness",
      description:
        "Security monitoring should support audits, not complicate them. SIEM & SOAR for SAP maintains centralized, tamper-resistant records of security events and response actions, simplifying compliance and investigations.",
      img: govern,
      readMoreContent: (
        <>
          <ul>
            <li>Centralized event and incident records</li>
            <li>End-to-end activity traceability</li>
            <li>Reduced manual audit preparation</li>
          </ul>
          <p>
            <strong>Outcome:</strong> Audit readiness becomes continuous, not
            reactive.
          </p>
        </>
      ),
    },
    {
      title: "Platform Focus",
      subtitle: "Native SAP Landscape Fit",
      description:
        "Security tooling should adapt to SAP, not the other way around. The solution integrates smoothly into existing SAP environments without introducing architectural complexity or operational overhead.",
      img: platform,
      readMoreContent: (
        <>
          <ul>
            <li>Works with existing SAP configurations</li>
            <li>Minimal deployment effort</li>
            <li>No performance disruption</li>
          </ul>
          <p>
            <strong>Outcome:</strong> Security enhancement without operational
            compromise.
          </p>
        </>
      ),
    },
  ];

  const core = [
    {
      icon: <FaLayerGroup />,
      title: "End-to-End SAP Security Visibility",
      description:
        "Gain centralized visibility across SAP applications, databases, and connected components. Security-relevant events are continuously collected and analyzed to provide a complete view of activity across the SAP landscape.",
    },
    {
      icon: <FaUserShield />,
      title: "User & Privilege Activity Monitoring",
      description:
        "Tracks user actions and privilege usage across SAP systems to identify risky behavior patterns. Helps security teams understand who did what, when, and where, with full context.",
    },
    {
      icon: <FaBullseye />,
      title: "High-Fidelity Threat Identification",
      description:
        "Security events are enriched and correlated to surface real threats while filtering out noise. Focuses analyst attention on what truly matters instead of overwhelming them with raw logs.",
    },
    {
      icon: <FaSearchPlus />,
      title: "Behavior-Based Risk Detection",
      description:
        "Continuously evaluates deviations from normal SAP user and system behavior. Subtle changes that indicate potential threats are identified before they escalate into incidents.",
    },
    {
      icon: <FaMicroscope />,
      title: "Proactive Threat Discovery",
      description:
        "Actively searches for hidden or emerging threats across SAP environments by analyzing patterns, indicators, and historical activity, not just reacting to alerts.",
    },
    {
      icon: <FaMagic />,
      title: "Intelligent Alert Prioritization",
      description:
        "Assigns contextual risk levels to alerts based on impact, asset criticality, and activity severity. Ensures security teams address the most critical risks first.",
    },
  ];

  const useCasesList = [
    "Insider & Privileged Activity Detection in SAP",
    "Automated Response to Critical SAP Security Events",
    "Cross-System Event Correlation (SAP & Non-SAP)",
    "Real-Time Alerts, Evidence & Incident Timelines for SOC Teams",
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
      <span
        key={index}
        className="split-text-char"
        style={{ font: "italic 400 1em 'Instrument Serif'" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };
  return (
    <>
      <section className="siem-soar-banner">
        <div className="siem-soar-banner-content">
          <h1 ref={headerRef} className="big-text-head">
            SIEM & SOAR for SAP
            <br />{" "}
            {splitLetters("Intelligent Threat Detection & Automated Response")}
          </h1>
          <p className="sub-para-text">
            AI-powered visibility and response to SAP environments. Correlate
            security events across SAP systems, detect suspicious activity
            early, and trigger automated response workflows to reduce risk,
            response time, and operational overhead.
          </p>
        </div>
      </section>

      <SolutionCarousel
        label="Why SIEM & SOAR for SAP?"
        title="We Don’t Just Log, We Detect, Correlate and Respond"
        description="Basic logging only records events. SIEM & SOAR for SAP transforms those events into actionable intelligence with real-time detection and automated response."
        data={content}
      />
      <SolutionCards
        label="Automated Threat Detection & Response"
        title="Security that watches, detects and acts automatically"
        description=""
        items={cardcontent}
        marginTop="0px"
      />
      <CapabilitiesSection
        items={core}
        gridTemplateColumns="repeat(3, 1fr)"
        header={{
          icon: <FaGlobe size={16} />,
          label: "We Don’t Just Log, We Detect, Correlate and Respond",
          title: "Why SIEM & SOAR for SAP?",
        }}
      />

      <UseCases
        label="Use Cases"
        title={
          <>
            Where ThreatSense <br /> SIEM & SOAR Delivers <br /> Immediate Value
          </>
        }
        list={useCasesList}
        // image={usecasessiem}
      />
      <Cta
        title="Stay Ahead of Threats with
AI-Powered Security"
        description="Protect your SAP® environments with real-time monitoring, 
        automated response, and deep threat analytics. Experience 
        the power of ThreatSense AI today!"
        backgroundImage={bg}
        buttonText="Get Started"
        link="https://tidycal.com/threatsenseai/siem-soar-sap"
      />
    </>
  );
}
