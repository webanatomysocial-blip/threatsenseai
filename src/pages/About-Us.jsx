import "../css/About-Us.css";
import AboutBanner from "../components/AboutBanner";
import LogoCarousel from "../components/LogoCarousel";
import AboutStats from "../components/AboutStats";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import AccordionSection from "../components/AccordionSection";
import OurTeam from "../components/OurTeam";
import Cta from "../components/Cta";
import CapabilitiesSection from "../components/CapabilitiesSection";
import bg from "../assets/home/tab-section/bg-image.png";
import raghu from "../assets/about-images/raghu.webp";
import { FaGlobe, FaUserAlt } from "react-icons/fa";
import WhyWeExist from "../components/WhyWeExist";
import {
  FaShieldAlt,
  FaUserLock,
  FaBullseye,
  FaClipboardCheck,
  FaRobot,
  FaPlusCircle,
} from "react-icons/fa";
import WhatMakesUs from "../components/WhatMakesUs";
import OurSecurity from "../components/OurSecurity";
import InNumbers from "../components/InNumbers";
import OurStory from "../components/OurStory";

export default function AboutUs() {
  const capabilities = [
    {
      icon: <FaShieldAlt />,
      title: "Comprehensive Coverage",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
    },
    {
      icon: <FaUserLock />,
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
      icon: <FaClipboardCheck />,
      title: "Standardized Compliance",
      description:
        "Enforces strict security policies, ensuring alignment with industry regulations and best practices.",
    },
    {
      icon: <FaRobot />,
      title: "Automated Response",
      description:
        "Instantly blocks threats, alerts security teams, and logs incidents for forensic analysis.",
    },
    {
      icon: <FaPlusCircle />,
      title: "And many more..",
      description:
        "Connect with our SMEs to know more. Stay ahead of threats with ThreatSenseAi.",
    },
  ];

  return (
    <div>
      <AboutBanner />

      {/*


<section className="vision-section">
  <div className="vision-header">
    <div
      className="security-label"
      style={{ justifyContent: "center", marginBottom: "15px" }}
    >
      Goals & Mission
    </div>

    <h2 className="head-text">Turning the Vision into reality</h2>
  </div>

  <div className="vision-grid">
    <div className="vision-image-card">
      <img src={raghu} alt="Raghu CEO" className="vision-bg-img" />
      <div className="vision-overlay">
        <p className="vision-quote">
          "Every great project begins with a simple conversation — let’s start yours."
        </p>
        <div className="vision-author">
          <strong>Raghu</strong> <span>Founder & CEO</span>
        </div>
      </div>
    </div>

    <div className="vision-content-col">
      <h3 className="sub-head-text vision-sub-head-text">Our mission</h3>
      <p className="para-text">
        To empower brands through bold design, strategic thinking, and
        digital experiences that inspire action and create lasting impact.
        To help businesses stand out through thoughtful branding and
        high-performance digital solutions rooted in creativity and clarity.
      </p>
    </div>

    <div className="vision-content-col">
      <h3 className="sub-head-text vision-sub-head-text">Our goal</h3>
      <ul className="vision-goal-list">
        <li>Clear and focused strategy</li>
        <li>Design that drives impact</li>
        <li>Collaboration without the chaos</li>
        <li>Outcomes that build momentum</li>
        <li>Smart solutions, tailored for you</li>
      </ul>
    </div>
  </div>
</section>

<LogoCarousel />
<AboutStats />
<HowItWorks />
<Benefits />

<CapabilitiesSection
  items={capabilities}
  gridTemplateColumns="repeat(3, 1fr)"
  header={{
    icon: <FaGlobe size={16} />,
    label: "Capabilities",
    title: "What it brings?",
  }}
/>

<AccordionSection />
<OurTeam />


END 
====================================
*/}

      <WhyWeExist />
      <WhatMakesUs/>
      <OurSecurity/>
      <InNumbers/>
      <OurStory/>
      <Cta
        title="Secure Your SAP Data. Everywhere It Moves."
        description="Prevent data leaks across SAP, browsers, GenAI tools, and third-party access
  with real-time enforcement, masking, and continuous compliance visibility."
        backgroundImage={bg}
        buttonText="Book a Demo"
      />

    </div>
  );
}
