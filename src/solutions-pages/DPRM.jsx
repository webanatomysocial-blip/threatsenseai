import React from "react";
import "../css/tadsprotect.css";
import "../css/Solutions-pages.css";
import RealWorld from "../Solutions-components/RealWorld";
import {
  FaPrint,
  FaUsb,
  FaDesktop,
  FaFileAlt,
  FaInfoCircle,
  FaShieldAlt,
  FaChartBar,
  FaCheckCircle,
  FaSlidersH,
  FaUserShield,
  FaExclamationTriangle,
  FaRocket,
} from "react-icons/fa";
import TadsCap from "../Solutions-components/TadsCap";
import AdsProtectWorks from "../Solutions-components/AdsProtectWorks";
import EndpointVulnerability from "../Solutions-components/EndpointVulnerability";
import BuildToProtect from "../Solutions-components/BuildToProtect";
import {
  FiEyeOff,
  FiShuffle,
  FiLock,
  FiUserCheck,
  FiLayers,
  FiSliders,
} from "react-icons/fi";
import SecurityControls from "../Solutions-components/SecurityControls";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import FAQ from "../components/FAQ";

import img1 from "../assets/solutions/dprm/1.png";
import img2 from "../assets/solutions/dprm/2.png";
import img3 from "../assets/solutions/dprm/cta.png";
import cta from "../assets/solutions/dprm/3.png";

const Dprm = () => {
  const endpointFeatures = [
    { icon: <FaShieldAlt />, title: "Consent Not Recorded" },
    { icon: <FaFileAlt />, title: "Data Used Beyond Purpose" },
    { icon: <FaUserShield />, title: "Rights Request Unanswered" },
    { icon: <FaExclamationTriangle />, title: "Breach Not Reported" },
  ];

  const buildToProtectFeatures = [
    { icon: <FaCheckCircle />, title: "Consent lifecycle tracking" },
    { icon: <FaSlidersH />, title: "Purpose registry & enforcement" },
    { icon: <FiUserCheck />, title: "Data principal rights fulfilment" },
    {
      icon: <FaExclamationTriangle />,
      title: "Breach detection & DPB notification",
    },
  ];

  const securityControlsData = [
    {
      icon: <FaCheckCircle />,
      title: "Consent & Lawful Basis Controls",
      points: [
        "Enforce consent before any data processing begins",
        "Link every processing activity to a lawful basis",
        "Block operations where consent is absent or expired",
      ],
    },
    {
      icon: <FaSlidersH />,
      title: "Purpose Governance",
      points: [
        "Maintain a registry of all declared processing purposes",
        "Monitor for purpose drift across systems",
        "Apply purpose-based restrictions by data category",
      ],
    },
    {
      icon: <FiUserCheck />,
      title: "Rights Request Management",
      points: [
        "Route access, erasure, and correction requests automatically",
        "Track SLA compliance for every open request",
        "Maintain audit evidence for fulfilled rights",
      ],
    },
    {
      icon: <FaChartBar />,
      title: "Audit & Compliance Reporting",
      points: [
        "Track all data processing activities in real time",
        "Generate clause-mapped DPDPA reports on demand",
        "Log all actions for DPB inquiry and internal audit",
      ],
    },
  ];

  const adsProtectWorksFeatures = [
    {
      title: "Step 1: Discover &\n Map",
      desc: "Scans all systems to find and classify personal data. Builds a live inventory of PII and data flows.",
    },
    {
      title: "Step 2: Capture & Govern Consent",
      desc: "Captures consent at every collection point. Links consent records to processing activities.",
    },
    {
      title: "Step 3: Fulfil Rights & Enforce Purpose",
      desc: "Automates data principal rights requests. Enforces purpose limits - flags any drift.",
    },
    {
      title: "Step 4: Report &\n Respond",
      desc: "Generates audit-ready DPDPA compliance reports. Triggers DPB notification on breach detection.",
    },
  ];

  const tadsCapFeatures = [
    {
      id: 1,
      icon: <FiUserCheck />,
      title: "Consent Management",
      desc: "Capture consent across web, mobile, and offline channels. Track versions, withdrawals, and expiry in real time. Ensure no data is processed without valid consent.",
    },
    {
      id: 2,
      icon: <FaChartBar />,
      title: "PII Discovery & Data Mapping",
      desc: "Scan databases, apps, and cloud for personal data. Classify and inventory PII across your organization. Generate data maps for DPA submissions and audits.",
    },
    {
      id: 3,
      icon: <FiSliders />,
      title: "Purpose Registry & Limitation",
      desc: "Define and enforce purpose for every data collection. Block processing that deviates from declared purpose. Detect purpose drift across systems and integrations.",
    },
    {
      id: 4,
      icon: <FaUserShield />,
      title: "Data Principal Rights Fulfilment",
      desc: "Automate access, correction, erasure, and nomination requests. SLA enforcement for 30-day DPDPA deadline. Full audit trail for every rights request.",
    },
    {
      id: 5,
      icon: <FaExclamationTriangle />,
      title: "Breach Detection & Notification",
      desc: "Real-time detection of unauthorized data access. Automated DPB notification workflow. Incident log with timeline and evidence package.",
    },
    {
      id: 6,
      icon: <FiLayers />,
      title: "Grievance Redressal",
      desc: "Log, track, escalate, and resolve data principal complaints. SLA-driven response with defensible evidence. Immutable record for regulatory inquiry.",
    },
  ];

  const realWorldFeatures = [
    {
      title:
        "BFSI - Manage consent and rights for millions of customers across KYC, loans, and insurance data",
    },
    {
      title:
        "Healthcare - Handle patient data with purpose-linked consent and breach response workflows",
    },
    {
      title:
        "E-commerce - Scale consent governance across web and mobile with purpose enforcement",
    },
    {
      title:
        "HR & Payroll - Fulfil employee data rights and manage retention under DPDPA",
    },
  ];

  const faqdata = [
    {
      question: "What is DPRM and who is it for?",
      answer:
        "DPRM is a platform that helps organizations meet their obligations under India's Digital Personal Data Protection Act 2023 covering consent, PII discovery, data principal rights, breach notification, and compliance reporting. It is built for any organization that processes personal data of Indian residents.",
    },
    {
      question: "What obligations under DPDPA 2023 does DPRM cover?",
      answer:
        "DPRM covers consent management, purpose registry, PII discovery, data mapping, data principal rights (access, correction, erasure, nomination), breach detection and DPB notification, grievance redressal, retention governance, and audit-ready compliance reporting.",
    },
    {
      question: "How does DPRM handle consent withdrawal?",
      answer:
        "When a data principal withdraws consent, DPRM propagates the withdrawal across all connected systems in real time - halting processing and flagging any downstream usage, with a full audit trail.",
    },
    {
      question: "Can DPRM fulfill erasure requests across multiple systems?",
      answer:
        "Yes. DPRM maps PII locations across all systems and orchestrates deletion or anonymization workflows automatically - with a complete audit trail of every action taken.",
    },
    {
      question: "Does DPRM work with non-SAP systems?",
      answer:
        "Yes. DPRM is platform-agnostic and connects to cloud platforms, CRMs, ERPs, custom databases, and SaaS tools through native connectors and open APIs.",
    },
  ];

  return (
    <>
      <section className="tads-protect-banner">
        <div className="tads-banner-content">
          <h1 className="big-text-head" style={{ color: "#fff" }}>
            DPRM
          </h1>
          <h1
            className="big-text-head"
            style={{
              font: "italic 400 1em 'Instrument Serif'",
              color: "#fff",
              margin: "-28px",
            }}
          >
            Data Protection Rights Manager
          </h1>
          <p
            className="sub-para-text-white"
            style={{ color: "#fff", margin: "10px" }}
          >
            A platform to manage your DPDPA obligations - from consent and PII
            discovery to data principal rights, breach notification, and
            audit-ready compliance reporting.
          </p>
        </div>
      </section>

      <EndpointVulnerability
        label="DPDPA Obligations & Risks"
        title="Why DPDPA Compliance Is at Risk in Your Organization"
        desc="Organizations handling personal data face DPDPA obligations from day one. Without the right controls, violations happen through everyday operations:"
        listItems={[
          "Personal data collected without valid or recorded consent",
          "Data used beyond its declared processing purpose",
          "Data principal requests not tracked or fulfilled within 30 days",
          "Breach incidents not detected or reported to the DPB in time",
        ]}
        bottomDesc="No visibility into how personal data flows or where compliance breaks down."
        ctaText="Book A Free Demo"
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={endpointFeatures}
        img={[img1, img2]}
      />

      <BuildToProtect
        label="DPDPA Enforcement Layer"
        title="Managing DPDPA Obligations Across Your Organization"
        desc="Traditional compliance tools track policies but rarely connect them to actual data flows. DPRM bridges that gap - linking consent records, processing activities, data principal rights, and breach events into one governed, auditable platform."
        features={buildToProtectFeatures}
        img={img3}
      />

      <TadsCap
        label="DPRM Capabilities"
        title="What DPRM Manages for You"
        features={tadsCapFeatures}
        gridCols="2"
      />

      <AdsProtectWorks
        label="The Process"
        subPara="How DPRM Works"
        title="How DPRM Works"
        desc="Four steps to structured DPDPA compliance"
        features={adsProtectWorksFeatures}
        icon={FaShieldAlt}
      />

      <SecurityControls
        label="Core Capabilities"
        title="Compliance Controls"
        controls={securityControlsData}
        minHeight="0"
        gridCols="2"
      />

      <RealWorld
        title="Where DPRM Delivers Value"
        desc=""
        icon={FaRocket}
        ctaText="Book a Demo"
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={realWorldFeatures}
        img={cta}
        direction="row"
      />

      <FAQ title="DPRM FAQs" items={faqdata} paddingBottom="100px" />

      <Cta
        title="Meet Your DPDPA Obligations.
         Starting Today."
        description="DPRM helps your organization manage consent, fulfill data principal rights, detect breaches,
         and stay audit-ready - across any tech stack, for any industry."
        backgroundImage={bg}
        buttonText="Book a Demo"
        link="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
      />
    </>
  );
};

export default Dprm;
