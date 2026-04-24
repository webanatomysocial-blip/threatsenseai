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

const InNumbers = () => {
  return (
    <section className="in-numbers-section">
      <div className="in-numbers-container">
        {/* Label */}
        <span
          className="numbers-label"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            justifyContent: "center",
          }}
        >
          <FaChartBar size={18} color="black" />
          ThreatSenseAi In Numbers
        </span>

        {/* Heading */}
        <h2 className="head-text">Proven Protection at Scale</h2>

        {/* Static stats grid */}
        <div className="numbers-grid">
          {topStats.map((item, index) => (
            <AnimatedContent
              key={index}
              distance={30}
              direction="vertical"
              reverse={false}
              duration={0.6}
              delay={index * 0.15}
              className="number-item"
            >
              <h3 className="sub-head-text numbers-value">{item.value}</h3>
              <p className="para-text">{item.label}</p>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InNumbers;
