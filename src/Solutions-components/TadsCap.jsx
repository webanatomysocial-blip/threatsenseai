import React, { useEffect, useRef } from "react";
import "../css/KeyFeatures.css";
import "../css/tadscap.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiFillAppstore } from "react-icons/ai";
// Using Feather icons for clean look

gsap.registerPlugin(ScrollTrigger);

const TadsCap = ({ label, icon: Icon, title, features = [],subtitle,gridCols="3" }) => {
  const gridRef = useRef(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current.children;

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%", 
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="key-features-container">
      <div className="key-features-header">
        <div
          className="sub-para-text"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {Icon ? <Icon /> : <AiFillAppstore />}
          {subtitle || label}
        </div>
        <h2 className="head-text">
         {title}
        </h2>
      </div>

      <div className="tads-cap-features-grid" style={{gridTemplateColumns:`repeat(${gridCols},1fr)`}} ref={gridRef}>
        {features.map((feature) => (
          <div key={feature.id} className="tads-cap-card">
            <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3 className="sub-para-text ">{feature.subtitle}</h3>
            <div className="feature-content">
              <h3 className="sub-head-text feature-title">{feature.title}</h3>
              <p className="sub-para-text feature-desc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TadsCap;
