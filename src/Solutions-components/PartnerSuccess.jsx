import React, { useEffect, useRef } from "react";
import "../css/KeyFeatures.css";
import "../css/tadscap.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiFillAppstore } from "react-icons/ai";
// Using Feather icons for clean look

gsap.registerPlugin(ScrollTrigger);

const PartnerSuccess = ({ label, icon: Icon,num=[], title, features = [],subtitle,gridCols="3" }) => {
  const gridRef = useRef(null);

  useEffect(() => {
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
    <div className="partner-features-container">
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
          <div key={feature.id} className="partner-cap-card">
            <div className="number-circle">{feature.num}</div>
              <h3 className="sub-para-text ">{feature.subtitle}</h3>
            <div className="feature-content">
              <h3 className="sub-head-text feature-title">{feature.title}</h3>
              {feature.desc && <p className="sub-para-text feature-desc">{feature.desc}</p>}
              {feature.items && (
                <ul className="partner-items-list">
                  {feature.items.map((item, index) => (
                    <li key={index} className="partner-item">
                      <span className="partner-item-num">{(index + 1).toString().padStart(2, '0')}</span>
                      <span className="partner-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSuccess;
