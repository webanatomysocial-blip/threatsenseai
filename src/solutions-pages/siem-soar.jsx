import "../css/Solutions-pages.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";

import soar from "../assets/solutions/siem/Security/1.png";
import detect from "../assets/solutions/siem/Security/2.png";
import govern from "../assets/solutions/siem/Security/3.png";
import platform from "../assets/solutions/siem/Security/4.png";

import real from "../assets/solutions/siem/1.png";
import real1 from "../assets/solutions/siem/2.png";
import real2 from "../assets/solutions/siem/3.png";
import real3 from "../assets/solutions/siem/4.png";
import real4 from "../assets/solutions/siem/5.png";
import real5 from "../assets/solutions/siem/6.png";

import SolutionCarousel from "../Solutions-components/SolutionCarousel";
import FAQ from "../components/FAQ";
import SolutionCards from "../Solutions-components/SolutionCards";
import CapabilitiesSection from "../components/CapabilitiesSection";
import UseCases from "../Solutions-components/UseCases";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import { Link } from "react-router-dom";

import usecasessiem from "../assets/solutions/siem/usecase.png";
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
      title: "180+ Pre-Built SAP Detections & Playbooks",
      description:
        "Accelerate deployment with ready-to-use threat patterns and automated response workflows built for real SAP attack and misuse scenarios.",
      img: real,
    },
    {
      title: "Real-Time Threat Detection",
      description:
        "Detect suspicious activities instantly including privileged misuse, risky changes, abnormal access behavior, and critical security events.",
      img: real1,
    },
    {
      title: "Intelligent Event Correlation",
      description:
        "Correlate signals across SAP application, database, user, and infrastructure layers to identify real threats instead of isolated alerts.",
      img: real2,
    },
    {
      title: "Automated Response Orchestration",
      description:
        "Trigger predefined playbooks to contain incidents, disable access, escalate alerts, notify teams, or enforce controls automatically.",
      img: real3,
    },
    {
      title: "Seamless SAP Integration",
      description:
        "Deploy smoothly across SAP ECC, S/4HANA, HANA, GRC, and hybrid landscapes without complex redesign or business disruption.",
      img: real4,
    },
    {
      title: "Audit & Compliance Readiness",
      description:
        "Maintain traceable evidence, centralized logs, investigation history, and control reports to support audits and regulatory requirements.",
      img: real5,
    },
  ];
  const cardcontent = [
    {
      title: "SOAR Focus",
      subtitle: "Orchestrated Incident Response",
      description:
        "When a security event is detected, response should be immediate and consistent. ThreatSense ITDAR for SAP enables automated response workflows that guide incidents through investigation, containment, and remediation, without relying on manual intervention.",
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
      title: "Detection Focus ",
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
        "Security monitoring should support audits, not complicate them. ThreatSense ITDAR for SAP maintains centralized, tamper-resistant records of security events and response actions, simplifying compliance and investigations.",
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
        "Gain centralized visibility across SAP applications, databases, interfaces, and connected systems through a unified security monitoring layer.",
    },
    {
      icon: <FaUserShield />,
      title: "User & Privileged Activity Monitoring",
      description:
        "Track user actions, privileged access, sensitive transactions, and administrative behavior with complete operational context.",
    },
    {
      icon: <FaBullseye />,
      title: "High-Fidelity Threat Detection",
      description:
        "Correlate events intelligently to identify real threats, reduce false positives, and focus analysts on incidents that matter.",
    },
    {
      icon: <FaSearchPlus />,
      title: "Behavior-Based Risk Analytics",
      description:
        "Detect abnormal user behavior, excessive access, unusual transaction patterns, and emerging insider risks before damage occurs.",
    },
    {
      icon: <FaMicroscope />,
      title: "Proactive Threat Hunting",
      description:
        "Search across SAP activity data, indicators, and patterns to uncover hidden threats, misuse, and control bypass attempts.",
    },
    {
      icon: <FaMagic />,
      title: "Intelligent Alert Prioritization",
      description:
        "Rank incidents based on severity, business impact, user risk, and asset criticality so teams respond faster and smarter.",
    },
  ];

  const useCasesList = [
    <>
      <strong>Insider & Privileged Threat Detection:</strong> Identify misuse,
      unauthorized actions, risky access, and abnormal privileged behavior
      across SAP systems.
    </>,
    <>
      <strong>Automated Response to Critical Incidents:</strong> Trigger
      containment playbooks, disable risky access, notify teams, and escalate
      incidents instantly.
    </>,
    <>
      <strong>Cross-System Event Correlation:</strong> Connect signals across
      SAP, databases, infrastructure, and external systems to uncover hidden
      threats faster.
    </>,
    <>
      <strong>SOC-Ready Alerts & Evidence Timelines:</strong> Provide structured
      alerts, investigation history, audit evidence, and complete incident
      timelines for rapid response.
    </>,
  ];

  const sapFaqData = [
    {
      question: "What is ThreatOps for SAP?",
      answer:
        "ThreatOps for SAP is an SAP-focused threat detection and response solution that provides real-time monitoring, intelligent event correlation, and automated incident response across SAP environments.",
    },
    {
      question: "How is ThreatOps different from traditional SIEM tools?",
      answer:
        "Traditional SIEM tools collect logs but often lack SAP business context. ThreatOps is built to understand SAP users, transactions, privileges, and security events, helping teams detect real threats faster with less noise.",
    },
    {
      question: "Which SAP environments are supported?",
      answer:
        "ThreatOps supports SAP ECC, SAP S/4HANA, SAP HANA, hybrid landscapes, and connected SAP ecosystems based on deployment architecture.",
    },
    {
      question: "Does ThreatOps support automated response actions?",
      answer:
        "Yes. ThreatOps includes automated playbooks that can trigger alerts, escalate incidents, disable risky access, contain sessions, and initiate remediation workflows.",
    },
    {
      question: "Will it impact SAP system performance?",
      answer:
        "ThreatOps is designed for enterprise environments with optimized architecture and minimal operational impact when deployed correctly.",
    },
    {
      question: "Can it integrate with our existing SOC tools?",
      answer:
        "Yes. ThreatOps can integrate with SIEM, SOAR, ITSM, ticketing, and enterprise security operations workflows based on your architecture needs.",
    },
    {
      question: "How long does deployment take?",
      answer:
        "Deployment timelines depend on landscape complexity, scope, and integrations. Initial rollout can typically begin faster than large-scale traditional security transformation projects.",
    },
    {
      question: "Does it help with audits and compliance?",
      answer:
        "Yes. ThreatOps provides centralized logs, evidence trails, investigation history, and reporting that support internal audits and regulatory requirements.",
    },
    {
      question: "Are pre-built detections and playbooks included?",
      answer:
        "Yes. ThreatOps includes 180+ pre-built detection patterns with associated playbooks for common SAP security and insider risk scenarios.",
    },
    {
      question: "Is ThreatOps available for cloud and on-premise environments?",
      answer:
        "Yes. Deployment options can be aligned to enterprise requirements including on-premise, private cloud, and hybrid models.",
    },
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
      <section className="siem-soar-banner">
        <div className="siem-soar-banner-content">
          <h1 ref={headerRef} className="big-text-head">
            ThreatOps for SAP

            <br />{" "}
            {splitLetters("Real-Time Threat Detection \n  and Automated Response for SAP ")}
          </h1>
          <p className="sub-para-text">
            Secure SAP environments continuously with 180+ pre-built detections, intelligent investigations, and automated response playbooks.
          </p>
          <a href="https://tidycal.com/threatsenseai/siem-soar-sap" className="red-button">
            Book a Demo
          </a>
        </div>
      </section>

      <SolutionCarousel
        label="Why ThreatOps for SAP? "
        title={<>We Don’t Just Log, We Detect, <br /> Correlate and Respond</>}
        description="Basic logging only records events. ThreatSense ITDAR for SAP transforms those events into actionable intelligence with real-time detection and automated response."
        data={content}
      />
      <SolutionCards
        label="The SAP SOC Layer You’ve Been Missing "
        title="Security that watches,
        detects and acts automatically"
        description=""
        items={cardcontent}
        marginTop="0px"
      />
      <CapabilitiesSection
        items={core}
        gridTemplateColumns="repeat(3, 1fr)"
        header={{
          icon: <FaGlobe size={16} />,
          label: "Why ThreatOps for SAP? ",
          title: "Advanced threat detection, intelligent correlation, and automated response for SAP environments.",
        }}
      />

      <UseCases
        label="Use Cases"
        title={
          <>
           Where ThreatOps Delivers <br></br> Immediate Value 
          </>
        }
        para="Real-time SAP threat detection, response, and visibility where enterprises need it most."
        list={useCasesList}
        image={usecasessiem}
        srcbtn="https://tidycal.com/threatsenseai/siem-soar-sap"
      />

      <FAQ
        title="Frequently Asked Questions"
        description="Everything you need to know about ThreatOps for SAP."
        items={sapFaqData}
        paddingBottom = "100px"
      />

      <Cta
        title="Secure SAP Before
         Threats Become Incidents "
        description="Detect suspicious activity in real time,
         automate response actions, and gain full visibility
          across your SAP landscape with ThreatOps. "
        backgroundImage={bg}
        buttonText="Book a Demo "
        link="https://tidycal.com/threatsenseai/siem-soar-sap"
      />
    </>
  );
}
