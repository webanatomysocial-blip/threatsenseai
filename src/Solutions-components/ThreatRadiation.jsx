import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import "../css/ThreatRadiation.css";
import halfCircleBg from "../assets/solutions/tads/half-circle.png";

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
  ];

  // Center point for the radiation effect
  const centerX = 50; // 50%
  const centerY = 90; // 90% from top

  const getPillPosition = (index, total) => {
    // For 6 items, use a single arc for better aesthetics
    const r = 35; // Radius in % units

    const startAngle = 160;
    const endAngle = 20;
    const angleRange = startAngle - endAngle;

    // Spread items evenly across the arc
    const angleDeg = startAngle - (index / (total - 1)) * angleRange;
    const angleRad = (angleDeg * Math.PI) / 180;

    const left = centerX + r * Math.cos(angleRad) * 1.0; // Wide enough but contained
    const top = centerY - r * Math.sin(angleRad);

    return { left, top, angleRad };
  };

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".threat-pill");
    const lines = svgRef.current.querySelectorAll(".radiation-line");

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
        stagger: 0.08,
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
        stagger: 0.08,
        ease: "back.out(1.5)",
      },
      "-=1.2",
    );
  }, []);

  return (
    <section className="threat-radiation-section" ref={sectionRef}>
      <div className="radiation-header">
        <div
          className="security-label"
          style={{ justifyContent: "center", marginBottom: "15px" }}
        >
          <FaCheckCircle size={16} style={{ marginRight: "4px" }} /> Risks
          Controlled by TADS
        </div>
        <h2 className="head-text">Complete Visibility into SAP & Data Risks</h2>
        <p className="sub-para-text">
          Detect and prevent the most critical data security threats across your
          landscape.
        </p>
      </div>

      <div className="radiation-container" ref={containerRef}>
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
              className="threat-pill"
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
    </section>
  );
};

export default ThreatRadiation;
