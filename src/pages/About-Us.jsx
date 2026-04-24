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
      <WhyWeExist />
      <WhatMakesUs />
      <OurSecurity />
      <InNumbers />
      <OurStory />
      <Cta
        title="Secure Your SAP Data 
         Everywhere It Moves"
        description="Prevent data leaks across SAP, browsers, GenAI tools, and third-party access
  with real-time enforcement, masking, and continuous compliance visibility"
        backgroundImage={bg}
        buttonText="Request a Demo"
      />
    </div>
  );
}
