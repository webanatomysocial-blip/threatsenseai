import React from "react";
import "../css/tadsprotect.css";
import "../css/Solutions-pages.css";

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
} from "react-icons/fa";
import {
  FiSend,
  FiCpu,
  FiGitMerge,
  FiToggleLeft,
  FiBox,
  FiSliders,
} from "react-icons/fi";
import EndpointVulnerability from "../Solutions-components/EndpointVulnerability";
import RealWorld from "../Solutions-components/RealWorld";
import TadsCap from "../Solutions-components/TadsCap";
import AdsProtectWorks from "../Solutions-components/AdsProtectWorks";
import AdvancedTabs from "../Solutions-components/AdvancedTabs";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import FAQ from "../components/FAQ";

import tab1 from "../assets/solutions/dotlayer/tab1.png";
import tab2 from "../assets/solutions/dotlayer/tab2.png";
import tab3 from "../assets/solutions/dotlayer/tab3.png";
import tab4 from "../assets/solutions/dotlayer/tab4.png";

import img1 from "../assets/solutions/dotlayer/1.png";
import img2 from "../assets/solutions/dotlayer/2.png";
import img3 from "../assets/solutions/dotlayer/3.png";
import img4 from "../assets/solutions/dotlayer/cta.png";

const DotLayer = () => {
  const endpointFeatures = [
    { icon: <FaPrint />, title: "Entering sensitive data into\n AI tools" },
    {
      icon: <FaFileAlt />,
      title: "Uploading confidential files to \ncloud apps",
    },
    { icon: <FaUsb />, title: "Copy-paste data leaks across \nplatforms" },
    {
      icon: <FaDesktop />,
      title: "Data exposure via emails and \nweb forms",
    },
  ];
  const realWorldFeatures = [
    { title: "Generative AI tools (ChatGPT, Copilot, etc.)" },
    { title: "Email platforms (Gmail, Outlook Web) " },
    { title: "Collaboration tools and web apps " },
    { title: "Cloud storage and file-sharing platforms " },
  ];
  const realWorldFeatures2 = [
    { title: "Prevent sensitive data exposure in AI tools and prompts" },
    { title: "Protect PII and customer data from browser-based leaks" },
    { title: "Secure financial and confidential business information" },
    {
      title: "Control data sharing across SaaS apps, email, and web platforms",
    },
  ];

  const tadsCapFeatures = [
    {
      id: 1,
      icon: <FiSend />,
      title: "AI Tool Data Protection ",
      desc: "Blocks sensitive data from being entered, pasted, or shared into generative AI tools like ChatGPT, Copilot, and others. ",
    },
    {
      id: 2,
      icon: <FiCpu />,
      title: "Context-Aware Data Controls ",
      desc: "Analyzes data sensitivity, user role, and application context to decide whether to allow, mask, or block actions. ",
    },
    {
      id: 3,
      icon: <FiGitMerge />,
      title: "Copy-Paste Protection ",
      desc: "Controls copy-paste actions in real time to prevent sensitive data from being transferred across applications. ",
    },
    {
      id: 4,
      icon: <FiToggleLeft />,
      title: "File Upload Protection ",
      desc: "Prevents sensitive files from being uploaded to AI tools, cloud storage, or unauthorized web platforms. ",
    },
    {
      id: 5,
      icon: <FiBox />,
      title: "Personal Email Controls ",
      desc: "Blocks or restricts sharing of sensitive data through personal email platforms like Gmail or web-based Outlook. ",
    },
    {
      id: 6,
      icon: <FaUserShield />,
      title: "PII Exposure Prevention",
      desc: "Automatically masking or blocking PII data from being exposed to GenAI tools or through any other channel from web applications.",
    },
  ];

  const adsProtectWorksFeatures = [
    {
      title: "Step 1: Detect\n Sensitive Data ",
      desc: "Identifies sensitive data such as PII, SPII, financial, and business-critical information as users type, paste, or upload within the browser. ",
    },
    {
      title: "Step 2: Analyze \nContext ",
      desc: "Evaluates the application (AI tool, email, SaaS), user role, and action (typing, copy, upload) to determine risk ",
    },
    {
      title: "Step 3: Control Data \nin Real Time ",
      desc: "Blocks, masks, or restricts sensitive data before it can be entered, shared, or uploaded.",
    },
    {
      title: "Step 4: Enforce \n & Log ",
      desc: "Applies policies instantly and logs all activities for audit, compliance, and monitoring.",
    },
  ];

  const advancedControlsData = [
    {
      label: "AI Tools",
      title: "AI Interaction Control",
      points: [
        "Blocks sensitive data from being entered into AI tools",
        "Prevents copy-paste into GenAI prompts",
        "Masks or restricts sensitive responses",
        "Controls data exposure across AI platforms",
      ],
      image: tab1,
    },
    {
      label: "Personal Email",
      title: "Personal Email Protection",
      points: [
        "Prevents sending sensitive data via personal email",
        "Blocks typing of PII/SPII in email compose fields",
        "Restricts attachments with sensitive content",
        "Controls web-based email platforms (Gmail, Outlook)",
      ],
      image: tab2,
    },
    {
      label: "File Uploads",
      title: "File Upload Control",
      points: [
        "Blocks sensitive files from being uploaded",
        "Detects confidential data before upload",
        "Restricts uploads to unauthorized platforms",
        "Applies policies across SaaS and cloud apps",
      ],
      image: tab3,
    },
    {
      label: "Copy-Paste",
      title: "Copy-Paste Protection",
      points: [
        "Prevents sensitive data from being copied or transferred",
        "Blocks cross-tab and cross-app data movement",
        "Controls data flow between browser sessions",
        "Stops hidden data leakage via copy actions",
      ],
      image: tab4,
    },
  ];
  const faqdata = [
    {
      question: "What is DotLayer?",
      answer:
        "DotLayer is a browser-level data protection solution that prevents sensitive data from being exposed across AI tools, email platforms, and web applications. It detects, masks, or blocks personal information (PII), financial data, and business-critical information before users can type, paste, or upload it into generative AI tools like ChatGPT and Copilot, email platforms, or cloud storage. DotLayer operates in real-time across all browser interactions to stop data leaks at the point of entry.",
    },
    {
      question: "Why is sensitive data vulnerable in the browser?",
      answer:
        "Modern workflows rely on browsers to access AI tools, email platforms, and cloud applications. Once users enter or access sensitive data in the browser, it can be easily exposed through everyday actions like typing into AI tools, pasting into web forms, uploading files to cloud storage, or sending emails often without visibility or control. Traditional security tools don't monitor browser-level activities, leaving this critical exposure point unprotected where most modern data leaks actually occur.",
    },
    {
      question: "What security controls does DotLayer provide?",
      answer:
        "DotLayer includes: AI tool data protection that blocks sensitive data from being entered or pasted into ChatGPT, Copilot, and other generative AI tools; context-aware data controls that analyze sensitivity and user role before allowing actions; copy-paste protection that prevents data transfer between applications; file upload protection that stops sensitive files from being uploaded to unauthorized platforms; and personal email controls that restrict sharing of sensitive data through Gmail or web-based Outlook. All controls work in real-time with instant logging for compliance.",
    },
    {
      question: "Does DotLayer protect data in AI tools like ChatGPT?",
      answer:
        "Yes. DotLayer specifically prevents sensitive data from being entered into generative AI tools by blocking typing and paste actions when PII, financial information, or business-critical data is detected. It masks or restricts sensitive responses from AI tools before they're displayed to users. This prevents accidental exposure of confidential information to third-party AI platforms that may use data for training or storage beyond your control.",
    },
    {
      question: "Can DotLayer block sensitive file uploads to cloud storage?",
      answer:
        "Absolutely. DotLayer's file upload protection prevents sensitive files from being uploaded to cloud storage platforms, SaaS applications, and unauthorized web services. It evaluates file content and user role to determine whether the upload should be allowed, blocked, or flagged for review. This protects confidential documents, spreadsheets containing financial data, and business-critical files from being stored on platforms outside your organization's control.",
    },
  ];

  return (
    <>
      <section className="tads-protect-banner">
        <div className="tads-banner-content">
          <h1 className="big-text-head" style={{ color: "#fff" }}>
            Browser-Level Data
          </h1>
          <h1
            className="big-text-head"
            style={{
              font: "italic 400 1em 'Instrument Serif'",
              color: "#fff",
              margin: "-28px",
            }}
          >
            Protection for the AI Era
          </h1>
          <p
            className="sub-para-text-white"
            style={{ color: "#fff", margin: "10px" }}
          >
            Prevent Data Leakage Across Browsers, AI Tools, and Email Detect,{" "}
            <br></br>
            mask, or block sensitive data like PII and SPII before it leaves
            your organization.
          </p>
        </div>
      </section>
      <EndpointVulnerability
        label="Browser Data Exposure"
        icon={FaExclamationTriangle}
        title={
          <>
            Why Sensitive Data Is <br></br> Vulnerable in the Browser
          </>
        }
        desc="Modern workflows rely heavily on browsers for accessing applications, AI tools, and email platforms. Once sensitive data is entered or accessed in the browser, it can be easily exposed through everyday user actions often without visibility or control."
        ctaText="Book A Free Demo"
        ctaLink="https://tidycal.com/threatsenseai/data-security-suite"
        features={endpointFeatures}
        img={[img1, img2]}
        margin="40px"
      />
      <RealWorld
        subtitle="Browser Data Risks "
        icon={FaChartBar}
        title="Protect Data Where Modern Leaks Actually Happen "
        desc="Today’s biggest data risks don’t come from traditional downloads or external devices they happen directly in the browser through everyday workflows. "
        ctaText=""
        ctaLink=""
        features={realWorldFeatures}
        direction="row"
        enddesc="Sensitive data is exposed the moment it is typed, pasted, or uploaded often without any control or visibility. "
        img={img3}
      />
      <TadsCap
        label="Browser Protection Layer "
        icon={FaCheckCircle}
        title={
          <>
            Intelligent Browser-Level <br />
            Data Protection{" "}
          </>
        }
        features={tadsCapFeatures}
      />
      <AdsProtectWorks
        label="The Solution"
        title="How DotLayer Works  "
        desc="A real-time browser protection pipeline"
        features={adsProtectWorksFeatures}
      />
      <AdvancedTabs
        label="Advanced Controls"
        icon={FaSlidersH}
        title="Security Controls Across Every Browser Interaction"
        description="Granular, real-time protection across AI tools, email, uploads, and user inputs"
        tabsData={advancedControlsData}
      />
      <RealWorld
        title="Real-World Scenarios Where DotLayer Protects Your Data "
        icon={FaUserShield}
        ctaText="Book A Free Demo"
        ctaLink="https://tidycal.com/threatsenseai/data-security-suite"
        features={realWorldFeatures2}
        enddesc="Stops data leaks at the point of entry before it can be typed, shared, or uploaded. "
        img={img4}
      />
      <FAQ title="DotLayer FAQs" items={faqdata} paddingBottom="100px" />
      <Cta
        title={
          <>
            Protect Your Data
            <br /> Before It Leaves the Browser{" "}
          </>
        }
        description={
          <>
            DotLayer delivers real-time protection against data leaks across AI
            tools, personal email, SaaS platforms,
            <br /> and web applications blocking sensitive data before it can be
            typed, pasted, or uploaded.{" "}
          </>
        }
        backgroundImage={bg}
        buttonText="Request A Demo"
        link="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
      />
    </>
  );
};

export default DotLayer;
