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
import {
  FaTh,
  FaLock,
  FaBullseye,
  FaList,
  FaRobot,
  FaMagic,
  FaGlobe,
} from "react-icons/fa";

export default function AboutUs() {
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
    {
      icon: <FaList />,
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
      icon: <FaMagic />,
      title: "And many more..",
      description:
        "Connect with our SMEs to know more. Stay ahead of threats with ThreatSenseAi.",
    },
  ];

  return (
    <div>
      <AboutBanner />
      {/* <LogoCarousel /> */}
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
      <Cta
        title="Stay Ahead of Threats with
AI-Powered Security"
        description="Protect your SAP® environments with real-time monitoring, 
        automated response, and deep threat analytics. Experience 
        the power of ThreatSense AI today!"
        backgroundImage={bg}
        buttonText="Get Started"
      />
    </div>
  );
}
