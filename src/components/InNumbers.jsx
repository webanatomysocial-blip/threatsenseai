import React from "react";
import "../css/InNumbers.css";
import AnimatedContent from "./AnimatedContent";
import { FaChartBar } from "react-icons/fa";

const topStats = [
  { value: "5", label: "Innovative security tools" },
  { value: "1K+", label: "Threats blocked every month" },
  { value: "~", label: "Data leaks prevented daily" },
  { value: "50+", label: "Experts working toward one mission" },
];

const bottomStats = [
  { value: "50+", label: "Experts working toward one mission" },
  { value: "~100", label: "Data leaks prevented daily" },
];

const InNumbers = () => {
  return (
    <section className="in-numbers-section">
      <div className="in-numbers-container">
        {/* Label */}
        <span className="numbers-label" style={{ display: "flex", alignItems: "center", gap: "6px" ,justifyContent:"center"}}>
          <FaChartBar size={18} color="black" />
          ThreatSenseAi In Numbers
        </span>

        {/* Heading */}
        <h2 className="head-text">Proven Protection at Scale</h2>

        {/* Animate the top stats grid */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          threshold={0.2}
          className="numbers-grid"
        >
          {topStats.map((item, index) => (
            <AnimatedContent
              key={index}
              distance={30}
              direction="vertical"
              reverse={false}
              duration={0.6}
              delay={index * 0.15} // stagger each number-item
              className="number-item"
            >
              <h3 className="sub-head-text numbers-value">{item.value}</h3>
              <p className="para-text">{item.label}</p>
            </AnimatedContent>
          ))}
        </AnimatedContent>

        {/* Bottom cards (optional, can animate the same way if needed) */}
        {/* <div className="numbers-bottom">
          {bottomStats.map((item, index) => (
            <AnimatedContent
              key={index}
              distance={30}
              direction="vertical"
              reverse={false}
              duration={0.6}
              delay={index * 0.15}
              className="numbers-card"
            >
              <span className="sub-head-text numbers-card-value">{item.value}</span>
              <span className="para-text">{item.label}</span>
            </AnimatedContent>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default InNumbers;
