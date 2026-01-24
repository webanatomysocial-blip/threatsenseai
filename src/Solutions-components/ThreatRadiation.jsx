import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import "../css/ThreatRadiation.css";
import halfCircleBg from "../assets/solutions/tads/half-circle.png";
import mobileBg from "../assets/home/Our-Solutions/bg1.png"; // Import bg1.png for mobile

gsap.registerPlugin(ScrollTrigger);

const ThreatRadiation = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  const subheadings = [
    "Excessive SAP Data Exports",
    "Privileged User Misuse",
    "Unauthorized Table Access",
    "Sensitive Data Overexposure",
    "Data Pasted into GenAI Tools",
    "Uploads to Personal Email",
    "Test System Replication", // New Item
    "Policy Bypass Attempts", // New Item
  ];

  // Center point for the radiation effect
  const centerX = 50; // 50%
  const centerY = 90; // 90% from top

  const getPillPosition = (index, total) => {
    // Stagger layout: alternating radii to prevent overlap
    const isOuter = index % 2 === 0;
    const r = isOuter ? 44 : 26; // Increased separation between layers

    const startAngle = 175;
    const endAngle = 5;
    const angleRange = startAngle - endAngle;

    const angleDeg = startAngle - (index / (total - 1)) * angleRange;
    const angleRad = (angleDeg * Math.PI) / 180;

    const left = centerX + r * Math.cos(angleRad);
    const top = centerY - r * Math.sin(angleRad);

    return { left, top, angleRad };
  };

  useEffect(() => {
    // Only animate if not mobile (or if elements exist in the radiation container)
    // CSS hides radiation-container features on mobile, but we should ensure GSAP doesn't break
    const items = containerRef.current.querySelectorAll(".threat-pill-desktop");
    const lines = svgRef.current
      ? svgRef.current.querySelectorAll(".radiation-line")
      : [];

    if (items.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        lines,
        { strokeDasharray: "100%", strokeDashoffset: "100%", opacity: 0 },
        {
          strokeDashoffset: "0%",
          opacity: 0.4,
          duration: 1.5,
          stagger: 0.05,
          ease: "power2.out",
        },
      );

      tl.fromTo(
        items,
        { scale: 0, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
        },
        "-=1.2",
      );
    }
  }, []);

  return (
    <section className="threat-radiation-section" ref={sectionRef}>
      <div className="radiation-header">
        <div
          className="security-label"
          style={{ justifyContent: "center", marginBottom: "15px" }}
        >
          <FaCheckCircle size={16} style={{ marginRight: "4px" }} /> Risks The
          Challenge
        </div>
        <h2 className="head-text">Where does data actually leak?</h2>
      </div>

      {/* Desktop/Tablet Arc Layout */}
      <div className="radiation-container desktop-only" ref={containerRef}>
        <div className="bg-half-moon">
          <img src={halfCircleBg} alt="Background" />
        </div>

        <svg
          className="radiation-svg"
          ref={svgRef}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {subheadings.map((_, index) => {
            const { left, top } = getPillPosition(index, subheadings.length);

            return (
              <line
                key={index}
                className="radiation-line"
                x1={centerX}
                y1={centerY}
                x2={left}
                y2={top}
                stroke="#000"
                strokeWidth="0.1"
              />
            );
          })}
        </svg>

        {subheadings.map((text, index) => {
          const { left, top } = getPillPosition(index, subheadings.length);

          return (
            <div
              key={index}
              className="threat-pill threat-pill-desktop"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            >
              <FaCheckCircle className="pill-check" />
              <span>{text}</span>
            </div>
          );
        })}
      </div>

      {/* Mobile Box Layout */}
      <div className="mobile-threat-container">
        {subheadings.map((text, index) => (
          <div
            key={index}
            className="mobile-threat-box"
            style={{
              backgroundImage: `url(${mobileBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mobile-box-content">
              <FaCheckCircle className="pill-check" style={{ color: "#000" }} />
              <span
                className="sub-para-text"
                style={{ fontWeight: "500", color: "#000" }}
              >
                {text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreatRadiation;
