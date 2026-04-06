import React from 'react'
import "../css/tadsprotect.css";
import "../css/Solutions-pages.css";

import { FaPrint, FaUsb, FaDesktop, FaFileAlt, FaInfoCircle, FaShieldAlt, FaChartBar, FaCheckCircle, FaSlidersH, FaUserShield, FaExclamationTriangle } from "react-icons/fa";
import { FiSend, FiCpu, FiGitMerge, FiToggleLeft, FiBox, FiSliders } from "react-icons/fi";
import EndpointVulnerability from "../Solutions-components/EndpointVulnerability";
import RealWorld from "../Solutions-components/RealWorld";
import TadsCap from "../Solutions-components/TadsCap";
import AdsProtectWorks from "../Solutions-components/AdsProtectWorks";
import AdvancedTabs from "../Solutions-components/AdvancedTabs";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";

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
    { icon: <FaPrint />, title: "Entering sensitive data into AI tools" },
    { icon: <FaFileAlt />, title: "Uploading confidential files to cloud apps" },
    { icon: <FaUsb />, title: "Copy-paste data leaks across platforms" },
    { icon: <FaDesktop />, title: "Data exposure via emails and web forms" },
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
    { title: "Control data sharing across SaaS apps, email, and web platforms" },
  ];

  const tadsCapFeatures = [
    {
      id: 1, icon: <FiSend />, title: "AI Tool Data Protection ",
      desc: "Blocks sensitive data from being entered, pasted, or shared into generative AI tools like ChatGPT, Copilot, and others. ",
    },
    {
      id: 2, icon: <FiCpu />, title: "Context-Aware Data Controls ",
      desc: "Analyzes data sensitivity, user role, and application context to decide whether to allow, mask, or block actions. ",
    },
    {
      id: 3, icon: <FiGitMerge />, title: "Copy-Paste Protection ",
      desc: "Controls copy-paste actions in real time to prevent sensitive data from being transferred across applications. ",
    },
    {
      id: 4, icon: <FiToggleLeft />, title: "File Upload Protection ",
      desc: "Prevents sensitive files from being uploaded to AI tools, cloud storage, or unauthorized web platforms. ",
    },
    {
      id: 5, icon: <FiBox />, title: "Personal Email Controls ",
      desc: "Blocks or restricts sharing of sensitive data through personal email platforms like Gmail or web-based Outlook. ",
    },

  ];

  const adsProtectWorksFeatures = [
    {
      title: "Step 1: Detect Sensitive Data ",
      desc: "Identifies sensitive data such as PII, SPII, financial, and business-critical information as users type, paste, or upload within the browser. ",
    },
    {
      title: "Step 2: Analyze Context ",
      desc: "Evaluates the application (AI tool, email, SaaS), user role, and action (typing, copy, upload) to determine risk ",
    },
    {
      title: "Step 3: Control Data in Real Time ",
      desc: "Blocks, masks, or restricts sensitive data before it can be entered, shared, or uploaded.",
    },
    {
      title: "Step 4: Enforce & Log ",
      desc: "Applies policies instantly and logs all activities for audit, compliance, and monitoring.",
    }
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

  return (
    <>
      <section className="tads-protect-banner">
        <div className="tads-banner-content">
          <h1 className="big-text-head" style={{ color: "#fff" }}>
            Browser-Level Data
          </h1>
          <h1 className="big-text-head" style={{ font: "italic 400 1em 'Instrument Serif'", color: "#fff", margin: "-28px" }}>
            Protection for the AI Era
          </h1>
          <p className="sub-para-text" style={{ color: "#fff", margin: "10px" }}>
            Prevent Data Leakage Across Browsers, AI Tools, and Email Detect, mask, or block sensitive data like PII and SPII before it leaves your organization.
          </p>
        </div>
      </section>
      <EndpointVulnerability
        label="Browser Data Exposure"
        icon={FaExclamationTriangle}
        title={<>Why Sensitive Data Is Vulnerable in the Browser</>}
        desc="Modern workflows rely heavily on browsers for accessing applications, AI tools, and email platforms. Once sensitive data is entered or accessed in the browser, it can be easily exposed through everyday user actions often without visibility or control."
        ctaText="Book A Free Demo"
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={endpointFeatures}
        img={[img1, img2]}
        margin="40px"
      />
      <RealWorld
        subtitle='Browser Data Risks '
        icon={FaChartBar}
        title="Protect Data Where Modern Leaks Actually Happen "
        desc="Today’s biggest data risks don’t come from traditional downloads or external devices they happen directly in the browser through everyday workflows. "
        ctaText=""
        ctaLink=""
        features={realWorldFeatures}
        direction='row'
        enddesc="Sensitive data is exposed the moment it is typed, pasted, or uploaded often without any control or visibility. "
        img={img3}
      />
      <TadsCap
        label="Browser Protection Layer "
        icon={FaCheckCircle}
        title={<>Intelligent Browser-Level  <br />Data Protection </>}
        features={tadsCapFeatures}
      />
      <AdsProtectWorks
        label="The Solution"
        subPara="How It Works"
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
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={realWorldFeatures2}
        enddesc='Stops data leaks at the point of entry before it can be typed, shared, or uploaded. '
        img={img4}
      />
      <Cta
        title={<>Protect Your Data Before <br /> It Leaves the Browser </>}
        description={<>DotLayer delivers real-time protection against data leaks across AI tools, personal email, SaaS platforms,<br /> and web applications blocking sensitive data before it can be typed, pasted, or uploaded. </>}
        backgroundImage={bg}
        buttonText="Request A Demo"
        link="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
      />
    </>
  )
}

export default DotLayer;