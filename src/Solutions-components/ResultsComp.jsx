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
      title: "100% Continuous MCA Rule 11(g) Coverage",
      description:
        "Ensures audit logs, policies, and controls are always enabled and enforced—eliminating blind spots caused by manual configuration gaps or accidental disabling",
      img: img1,
    },
    {
      id: 2,
      title: "Faster Audits with Ready-to-Use Evidence",
      description:
        "Provides centralized, auditor-ready dashboards with timelines and tamper-proof evidence—cutting audit response time and minimizing back-and-forth with compliance teams",
      img: img2,
    },
    {
      id: 3,
      title: "Real-Time Audit Policy Enforcement",
      description:
        "Continuously monitors audit policies and log configurations, automatically reinstating them the moment they are altered, disabled, or deleted—without manual intervention",
      img: img3,
    },
    {
      id: 4,
      title: "Tamper-Proof Audit Evidence",
      description:
        "Protects audit logs and compliance evidence from unauthorized modification, ensuring data integrity and defensibility during statutory, internal, and forensic audits",
      img: img4,
    },
  ];

  return (
    <div className="mcaat-res-container">
      <div className="capabilities-header">
        <div className="sub-para-text security-label">
          <FaGlobe size={16} style={{ marginRight: "4px" }} /> Results
        </div>
        <h2 className="head-text">Results We Deliver</h2>
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
