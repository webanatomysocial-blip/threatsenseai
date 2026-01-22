import "../css/Solutions-pages.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";
import SolutionCarousel from "../Solutions-components/SolutionCarousel";
import SolutionCards from "../Solutions-components/SolutionCards";
import CapabilitiesSection from "../components/CapabilitiesSection";
import UseCases from "../Solutions-components/UseCases";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";
import { FaTh, FaLock, FaBullseye } from "react-icons/fa";

export default function SiemSoar() {
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
    "Detect insider threats such as privilege abuse, suspicious logins, or policy violations in SAP",
    "Respond automatically to critical incidents like audit log tampering or unauthorized changes",
    "Correlate SAP and non-SAP events for full attack-chain visibility",
    "Support SOC and audit teams with real-time alerts, evidence, and incident timelines",
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
      <section className="siem-soar-banner">
        <div className="siem-soar-banner-content">
          <h1 ref={headerRef} className="big-text-head">
            SIEM & SOAR — {splitLetters("AI-Powered Security")}
          </h1>
          <p className="sub-para-text">
            AI-Powered Security. Built for Business Protection. Protect your
            most critical business data from insider threats, AI-driven data
            leaks, and compliance risks—before damage occurs.
          </p>
        </div>
      </section>

      <SolutionCarousel data={content} />
      <SolutionCards items={content} marginTop="0px" />
      <CapabilitiesSection items={core} gridTemplateColumns="repeat(3, 1fr)" />
      <UseCases
        label="Use Cases"
        title={
          <>
            Where ThreatSense <br /> SIEM & SOAR Delivers <br /> Immediate Value
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
