import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShieldAlt } from "react-icons/fa";
import "../css/SecurityControls.css";

gsap.registerPlugin(ScrollTrigger);

const SecurityControls = ({
  label,
  title,
  controls = [],
  minHeight = "380",
  gridCols = "4",
}) => {
  const containerRef = useRef(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll(".sc-card");

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="security-controls-section" ref={containerRef}>
      <div className="sc-header">
        <div className="sc-label">
          <FaShieldAlt />
          <span>{label}</span>
        </div>
        <h2 className="head-text">{title}</h2>
      </div>

      <div
        className="sc-grid"
        style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
      >
        {controls.map((control, index) => (
          <div
            key={index}
            className="sc-card"
            style={{
              minHeight: isNaN(minHeight) ? minHeight : `${minHeight}px`,
            }}
          >
            <div className="sc-icon-wrapper">
              {control.icon || <FaShieldAlt />}
            </div>
            <h3 className="sub-head-text">{control.title}</h3>
            <ul className="sc-list">
              {control.points.map((point, i) => (
                <li key={i} className="sc-list-item">
                  <span className="sc-bullet">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityControls;
