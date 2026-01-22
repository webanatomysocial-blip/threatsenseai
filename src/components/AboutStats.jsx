import React from "react";
import "../css/AboutSections.css";
import { AiFillQuestionCircle } from "react-icons/ai";

const AboutStats = () => {
  const stats = [
    {
      percentage: "67%",
      title: "Insider Privilege Abuse",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      percentage: "80%",
      title: "Security Incidents Are the Norm",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      percentage: "78%",
      title: "Misconfiguration Is the Biggest Threat",
      description:
        "It is a long established fact that a reader will be distracted.",
    },
    {
      percentage: "$5million+",
      title: "The Real Cost of a Breach",
      description:
        "There are many variations of passages of Lorem Ipsum available.",
    },
  ];

  return (
    <div className="about-stats-section">
      <div className="about-stats-header">
        <div className="sub-para-text security-label">
          <AiFillQuestionCircle size={18} style={{ marginRight: "4px" }} /> Why
          Now?
        </div>
        <h2 className="head-text">
          Why do you need SAP® <br /> Cybersecurity?
        </h2>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-content">
              <h3 className="big-text-head-white">{stat.percentage}</h3>
              <h4 className="sub-head-text-white">{stat.title}</h4>
              <p className="sub-para-text-white">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
