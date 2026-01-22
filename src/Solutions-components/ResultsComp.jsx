import React from "react";
import "../css/ResultsComp.css";
import img1 from "../assets/home/Our-Solutions/bg1.png";
import img2 from "../assets/home/Our-Solutions/bg1.png";
import img3 from "../assets/home/Our-Solutions/bg1.png";
import img4 from "../assets/home/Our-Solutions/bg1.png";
import { FaGlobe } from "react-icons/fa";

const ResultsComp = () => {
  const results = [
    {
      id: 1,
      title: "96% Reduction in DB Log Growth",
      description:
        "Captures only high-value change events, drastically cutting database log volume versus full DDL/DML logging.",
      img: img1,
    },
    {
      id: 2,
      title: "Zero Performance Degradation",
      description:
        "Operates at database level without impacting SAP transaction speed or system performance.",
      img: img2,
    },
    {
      id: 3,
      title: "Real-Time Audit Policy Enforcement",
      description:
        "Automatically enforces audit policies and restores them instantly if disabled or altered.",
      img: img3,
    },
    {
      id: 4,
      title: "Always-On Compliance",
      description:
        "Maintains continuous regulatory compliance with minimal manual intervention from IT teams.",
      img: img4,
    },
  ];

  return (
    <div className="mcaat-res-container">
      <div className="capabilities-header">
        <div className="sub-para-text security-label">
          <FaGlobe size={16} style={{ marginRight: "4px" }} /> Results
        </div>
        <h2 className="head-text">Lorem, ipsum dolor sit</h2>
      </div>
      {results.map((res) => (
        <div key={res.id} className={`res-container res-container-${res.id}`}>
          <div className="left-res-container">
            <span className="bg-number">{res.id}</span>
            <div className="res-card-content">
              <h3 className="sub-head-text">{res.title}</h3>
              <p className="para-text">{res.description}</p>
            </div>
          </div>
          <div className="right-res-container">
            <img src={res.img} alt={`Result ${res.id}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsComp;
