import React, { useState } from "react";
import "../css/AdvancedTabs.css";
import { FaCheck } from "react-icons/fa";

const AdvancedTabs = ({ label, icon: Icon, title, description, tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabsData || tabsData.length === 0) return null;

  return (
    <section className="advanced-tabs-section">
      <div className="capabilities-header">
        {label && (
          <div className="sub-para-text " style={{ justifyContent: "center", display: "flex", alignItems: "center", gap: "5px" }}>
            {Icon && <Icon />}
            {label}
          </div>
        )}
        <h2 className="head-text">{title}</h2>
        {description && <p className="sub-para-text">{description}</p>}
      </div>

      <div className="tabs-container">
        <div className="tabs-navigation">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content-panel">
          <div className="tab-content-left">
            <div className="sub-para-text" style={{ margin:0 }}>
              <span className="label-dot"></span>
              {tabsData[activeTab].label}
            </div>
            <h3 className="sub-head-text">{tabsData[activeTab].title}</h3>
            <ul className="content-points">
              {tabsData[activeTab].points.map((point, idx) => (
                <li key={idx} className="point-item">
                  <FaCheck className="check-icon" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content-right">
             <div className="tab-image-wrapper">
                <img 
                    src={tabsData[activeTab].image} 
                    alt={tabsData[activeTab].title} 
                    className="tab-panel-image"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTabs;
