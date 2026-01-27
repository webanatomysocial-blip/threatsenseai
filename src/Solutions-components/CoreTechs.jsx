import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/CoreTechs.css";
import cardImage from "../assets/home/Our-Solutions/bg1.png"; // Using requested placeholder
import { FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CoreTechs = () => {
  const containerRef = useRef(null);

  const techs = [
    {
      id: "01",
      title: "TADS Protection",
      subtitle:
        "Monitors and controls how sensitive data moves out of your enterprise, with a primary focus on SAP ERP, the most business-critical system.",
      description:
        "TADS prevents unauthorized exports, excessive data access, and insider misuse through real-time, policy-driven enforcement across SAP environments.",
      image: cardImage,
    },
    {
      id: "02",
      title: "DotLayer",
      subtitle:
        "Monitors and controls sensitive data exposure at the browser layer, where most modern data leaks occur.n",
      description:
        "DotLayer prevents unauthorized data sharing into generative AI tools, personal email accounts, and cloud drives by enforcing real-time, context-aware controls on user actions.",
      image: cardImage,
    },
    {
      id: "03",
      title: "DMSS – Data Masking & Scrambling Solution",
      subtitle: "lorem ipsum dolor sit amet consectetur adipiscing elit",
      description:
        "Dynamically masks and scrambles sensitive SAP data in real time to enforce data minimization aivilend least-prge access principles. With DMSS, enterprises can ensure personal, financial, and regulated data is exposed only to authorized users.\n\nIt reduces risk of data misuse in production and non-production environments while maintaining business continuity.\n\nSupports regulatory compliance requirements under GDPR, DPDP, SOX, and similar data protection frameworks.",
      image: cardImage,
    },
  ];

  useEffect(() => {
    const rows = containerRef.current.querySelectorAll(".tech-row");

    rows.forEach((row) => {
      const textContainer = row.querySelector(".tech-text-container");
      const imageContainer = row.querySelector(".tech-image-container");

      // Animation for text container
      gsap.fromTo(
        textContainer,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        },
      );

      // Animation for image container
      gsap.fromTo(
        imageContainer,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        },
      );
    });
  }, []);

  return (
    <section className="core-techs-section" ref={containerRef}>
      <div className="capabilities-header">
        <div
          className="sub-para-text security-label"
          style={{ justifyContent: "center" }}
        >
          <FaCheckCircle size={16} style={{ marginRight: "4px" }} />
          Core Techs
        </div>
        <h2 className="head-text">
          Data Protection, Insider Risk <br /> AI Leakage,
          Misuse Prevention
        </h2>
      </div>

      <div className="techs-timeline">
        <div className="timeline-line"></div>
        {techs.map((tech, index) => (
          <div
            key={tech.id}
            className={`tech-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* Timeline node */}
            <div className="timeline-node">
              <span className="node-number">{tech.id}</span>
            </div>

            <div className="tech-image-container">
              <div className="image-blob-bg">
                <img src={tech.image} alt={tech.title} className="tech-image" />
              </div>
            </div>

            <div className="tech-text-container">
              <h3 className="head-text">{tech.title}</h3>
              <h4 className="sub-para-text tech-subtitle">{tech.subtitle}</h4>
              <p className="para-text tech-desc">{tech.description}</p>
              <button className="white-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTechs;
