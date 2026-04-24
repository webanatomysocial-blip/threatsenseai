import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/CoreTechs.css";
import cardImage from "../assets/home/Our-Solutions/bg1.png"; // Using requested placeholder
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CoreTechs = ({ technologies, subheading, description }) => {
  const containerRef = useRef(null);

  const defaultTechs = [
    {
      id: "01",
      title: "TADS Protect",
      subtitle:
        "Prevents unauthorized SAP data exports, excessive access, insider misuse, and risky data movement through real-time, policy-driven controls built for SAP environments.",
      image: cardImage,
      video: null,
      url: "/tads-protect",
      btnText: "Explore TADS Protect",
    },
    {
      id: "02",
      title: "Dot Layer",
      subtitle:
        "Stops browser-based data leaks by controlling copy, paste, upload, print, screenshot, and AI prompt actions - without agents or complex endpoint deployments.",
      description:
        "Dot Layer provides a secure browser environment for SAP, preventing data leakage through common web-based actions without impacting user experience.",
      image: cardImage,
      video: null,
      url: "/dot-layer",
      btnText: "Explore Dot Layer",
    },
    {
      id: "03",
      title: "DMSS – Data Masking & Scrambling",
      subtitle:
        "Masks and scrambles sensitive SAP data in production and non-production systems to reduce exposure, enable safe testing, and support privacy compliance.",
      description:
        "DMSS ensures that sensitive data is only visible to authorized personnel, protecting privacy and maintaining regulatory compliance across SAP landscapes.",
      image: cardImage,
      video: null,
      url: "/dmss",
      btnText: "Explore DMSS",
    },
    {
      id: "04",
      title: "DPRM – Data Privacy Regulation Manager",
      subtitle:
        "Operationalizes privacy laws such as GDPR, DPDPA, CCPA, and similar regulations through consent governance, data subject rights workflows, retention controls, and compliance reporting.",
      description:
        "DPRM streamlines privacy management by automating regulatory workflows and providing comprehensive reporting for global privacy standards.",
      image: cardImage,
      video: null,
      url: "/dprm",
      btnText: "Explore DPRM",
    },
  ];

  const techs = technologies || defaultTechs;

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="core-techs-section" ref={containerRef}>
      <div className="capabilities-header">
        <div
          className="sub-para-text security-label"
          style={{ justifyContent: "center" }}
        >
          {/* <FaCheckCircle size={16} style={{ marginRight: "4px" }} />
          {subheading} */}
        </div>
        <h2 className="head-text">
          {subheading ||
            "Complete SAP Data Protection  Across Every Risk Layer"}
        </h2>
        {description && (
          <p
            className="para-text"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "20px auto",
            }}
          >
            {description}
          </p>
        )}
      </div>

      <div className="techs-timeline" id="sap-data">
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
                {tech.video ? (
                  <video
                    src={tech.video}
                    className="tech-image"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="tech-image"
                  />
                )}
              </div>
            </div>

            <div className="tech-text-container">
              <h3 className="head-text">{tech.title}</h3>
              <h4 className="para-text tech-subtitle">{tech.subtitle}</h4>
              {/* <p className="para-text tech-desc">{tech.description}</p> */}
              <Link
                to={tech.url}
                className="ev-cta "
                style={{ width: "fit-content" }}
              >
                {tech.btnText || "Read More"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTechs;
