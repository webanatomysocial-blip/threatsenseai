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
import {
  FiEyeOff,
  FiShuffle,
  FiLock,
  FiUserCheck,
  FiLayers,
} from "react-icons/fi";
import SecurityControls from "../Solutions-components/SecurityControls";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import FAQ from "../components/FAQ";

import img1 from "../assets/solutions/dmss/1.png";
import img2 from "../assets/solutions/dmss/2.png";
import img3 from "../assets/solutions/dmss/cta.png";

const Dmss = () => {
  const securityControlsData = [
    {
      icon: <FiUserCheck />,
      title: "Personal Information (PII)",
      points: [
        "Names, addresses, and contact details",
        "Identification numbers (PAN, SSN, Aadhaar, etc.)",
        "Email IDs and phone numbers",
        "Customer master data (e.g., KNA1 fields)",
      ],
    },
    {
      icon: <FiLock />,
      title: "Financial Data",
      points: [
        "Bank account and payment details",
        "Invoice and transaction data",
        "Salary and payroll information",
        "Vendor financial records (e.g., LFA1, BSEG)",
      ],
    },
    {
      icon: <FiShuffle />,
      title: "Business Confidential Data",
      points: [
        "Sales and pricing information",
        "Contracts and procurement data",
        "Business reports and analytics data",
        "Strategic and operational data",
      ],
    },
    {
      icon: <FiLayers />,
      title: "Employee Information (HR Data)",
      points: [
        "Employee personal records (PA tables)",
        "Compensation and benefits data",
        "Performance and appraisal details",
        "Organizational and HR master data",
      ],
    },
  ];
  const adsProtectWorksFeatures = [
    {
      title: "Step 1: Identify Sensitive Data",
      desc: "Detects sensitive fields across SAP tables, including personal, financial, and regulated information. ",
    },
    {
      title: "Step 2: Apply Dynamic Masking ",
      desc: "Applies real-time masking rules based on user roles, ensuring only authorized users can view complete data. ",
    },
    {
      title: "Step 3: Scramble Data for Non-Production ",
      desc: "Transforms sensitive data in non-production environments to prevent exposure during testing and development.",
    },
    {
      title: "Step 4: Enforce Access Policies ",
      desc: "Controls data visibility based on roles, authorization levels, and data sensitivity across the SAP landscape.",
    },
  ];

  const tadsCapFeatures = [
    {
      id: 1,
      icon: <FiEyeOff />,
      title: " Dynamic Data Masking ",
      desc: "Masks sensitive data in real time based on user roles, ensuring only authorized users can view full data while others see masked values. ",
    },
    {
      id: 2,
      icon: <FiShuffle />,
      title: "Data Scrambling ",
      desc: "Transforms sensitive data in non-production environments (QA, Dev, Sandbox) to prevent exposure of real data during testing and development. ",
    },
    {
      id: 3,
      icon: <FiLock />,
      title: "Field-Level Data Protection ",
      desc: "Applies masking at the field level across SAP tables, protecting sensitive information such as PII, financial, and HR data. ",
    },
    {
      id: 4,
      icon: <FiUserCheck />,
      title: "Secure Data Access for Third Parties ",
      desc: "Provides controlled and masked data access to vendors and external users without exposing real sensitive information. ",
    },
    {
      id: 5,
      icon: <FiLayers />,
      title: "Seamless Landscape Deployment ",
      desc: "Applies data masking and protection policies consistently across environments, ensuring secure and controlled rollout throughout the SAP landscape. ",
    },
  ];
  const realWorldFeatures2 = [
    { title: "Production data is copied into QA, Dev, or sandbox systems " },
    {
      title: "Developers access real customer and business data during testing",
    },
    { title: " Users have access to more data than required for their roles" },
    { title: "Reports expose sensitive financial and personal information" },
    { title: "Third-party vendors access critical SAP environments" },
  ];
  const realWorldFeatures = [
    { title: "Protect non-production environments from real data exposure " },
    { title: "Secure financial and business-critical SAP data" },
    { title: "Safeguard employee and HR data with controlled visibility" },
    {
      title:
        "Enable secure access for third parties without exposing real data",
    },
  ];

  const faqdata = [
    {
      question: "What is DMSS?",
      answer:
        "DMSS (Data Masking & Scrambling Solution) is a data protection solution for SAP environments that secures sensitive information through dynamic data masking and scrambling. It masks personal, financial, and regulated data in real-time based on user roles, ensuring only authorized users can view complete information while others see masked values. DMSS protects data across production and non-production systems (QA, Dev, Sandbox) while maintaining seamless business operations and allowing teams to work efficiently.",
    },
    {
      question: "Why is sensitive data vulnerable in SAP systems?",
      answer:
        "Sensitive data in SAP systems is frequently exposed due to operational needs, lack of access controls, or unrestricted user permissions. Production data is often copied into development and testing environments where developers access real customer and financial information during testing. Users frequently have access to more data than required for their roles, and third-party vendors may access critical SAP environments without data protection. Reports often expose sensitive financial and personal information without restriction—making data masking essential for security.",
    },
    {
      question: "What security controls does DMSS provide?",
      answer:
        "DMSS includes: dynamic data masking that hides sensitive information in real-time based on user roles and authorization levels; data scrambling that transforms sensitive data in non-production environments to prevent exposure during testing; field-level protection across SAP tables for PII, financial data, and HR information; secure data access controls for third parties and vendors without exposing real data; and seamless landscape deployment that applies consistent masking policies across all SAP environments. All controls operate transparently without disrupting business processes.",
    },
    {
      question:
        "Does DMSS protect non-production environments like QA and sandbox systems?",
      answer:
        "Yes. DMSS specifically protects non-production environments by scrambling real sensitive data in QA, Dev, and sandbox systems. This prevents developers and testers from accessing actual customer information, financial records, or employee data while still allowing them to perform their work with realistic data patterns. Scrambled data maintains referential integrity and business logic for testing purposes while ensuring real sensitive information remains protected and unexposed.",
    },
    {
      question: "Can DMSS provide controlled access to third-party vendors?",
      answer:
        "Absolutely. DMSS enables secure access for external vendors and third-party users by providing masked or controlled views of SAP data without exposing real sensitive information. Organizations can grant vendors access to necessary business data—such as vendor records, transaction details, or reporting information—while automatically masking personal details, payment information, and other confidential data. This allows vendors to perform their functions while maintaining data security and compliance requirements.",
    },
  ];

  return (
    <>
      <section className="tads-protect-banner">
        <div className="tads-banner-content">
          <h1 className="big-text-head" style={{ color: "#fff" }}>
            DMSS
          </h1>
          <h1
            className="big-text-head"
            style={{
              font: "italic 400 1em 'Instrument Serif'",
              color: "#fff",
              margin: "-28px",
            }}
          >
            Data Masking & Scrambling Solution for SAP
          </h1>
          <p
            className="sub-para-text-white"
            style={{ color: "#fff", margin: "10px" }}
          >
            Secure personal, financial, and regulated data within SAP
            environments using dynamic data masking and scrambling. DMSS ensures
            sensitive information is protected across production and
            non-production systems while maintaining seamless business
            operations.
          </p>
        </div>
      </section>

      <RealWorld
        subtitle="Data Protection Without Disruption"
        title="Secure Data Access Without Compromising Productivity "
        icon={FaUserShield}
        desc={
          <>
            Enterprise SAP systems store highly sensitive data, including
            financial records, employee information, and customer data.
            <br />
            <br />
            DMSS enables organizations to protect this data through dynamic
            masking and scrambling ensuring secure access while allowing teams
            to work efficiently across business processes, reporting, and
            analytics.
          </>
        }
        ctaText="Book A Free Demo"
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={[]}
        img={img1}
        direction="row-reverse"
      />
      <RealWorld
        title="Sensitive Data Is Often Overexposed Inside SAP Systems "
        desc="Sensitive data is frequently exposed across SAP environments due to operational needs, lack of controls, or unrestricted access. "
        icon={FaExclamationTriangle}
        ctaText=""
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={realWorldFeatures2}
        img={img2}
        direction="row"
      />
      <TadsCap
        label="The Solution "
        icon={FaCheckCircle}
        title={<>Advanced Data Protection for SAP Landscapes </>}
        features={tadsCapFeatures}
      />
      <AdsProtectWorks
        label=" "
        icon={FaShieldAlt}
        subPara="How DMSS Works"
        title="Intelligent Data Protection Built for SAP  "
        desc="DMSS protects sensitive SAP data through real-time masking and data scrambling, ensuring secure access across all environments. "
        features={adsProtectWorksFeatures}
      />

      <SecurityControls
        label="Data Protection Scope "
        title="Sensitive Data That Can Be Protected "
        controls={securityControlsData}
        minHeight="0"
        gridCols="2"
      />
      <RealWorld
        title="Where DMSS Delivers Immediate Value  "
        desc=""
        icon={FaRocket}
        ctaText="Book A Free Demo"
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={realWorldFeatures}
        img={img3}
        direction="row"
      />
      <FAQ title="DMSS FAQs" items={faqdata} paddingBottom="100px" />
      <Cta
        title={
          <>
            Protect Sensitive SAP Data <br></br>
            Before It Leaves Your Enterprise
          </>
        }
        description={
          <>
            DMSS secures sensitive data within SAP environments using dynamic
            masking and data scrambling ensuring privacy, compliance,
            <br /> and controlled access across users, roles, and environments.
          </>
        }
        backgroundImage={bg}
        buttonText="Request A Demo"
        link="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
      />
    </>
  );
};

export default Dmss;
