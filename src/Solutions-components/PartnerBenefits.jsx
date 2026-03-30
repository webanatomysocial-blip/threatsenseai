import React from 'react'
import { FaInfoCircle, FaGraduationCap, FaHeadset, FaTools, FaLightbulb } from "react-icons/fa";
import "../css/Benefits.css";

const PartnerBenefits = () => {
  return (
    <>
      <div className="benefits-container">
        <div className="benefits-header">
          <p className="sub-para-text">
            <FaInfoCircle /> What Our Partners Receive
          </p>
          <h2 className="head-text">Partner Benefits</h2>
        </div>
        <div className="benefits-cards-con">
          <div className="benefits-card-1 ben-card">
            <div className="benefits-card-header">
              <FaGraduationCap fill='white'/>
            </div>
            <div className="benefits-card-body">
              <h3 className="sub-head-text" style={{ margin: "0" }}>
                Comprehensive Partner Enablement
              </h3>
              <p className="para-text" style={{ color: "#000000ff" }}>
                Access training, documentation, and product resources to help your team succeed.
              </p>
            </div>
          </div>
          <div className="benefits-card-2 ben-card">
            <div className="benefits-card-header">
              <FaHeadset />
            </div>
            <div className="benefits-card-body">
              <h3 className="sub-head-text" style={{ margin: "0", color: "#FFFF" }}>
                Dedicated Partner Support & Help
              </h3>
              <p className="para-text">
                Receive support from our technical and business teams to help you deliver successful deployments.
              </p>
            </div>
          </div>
          <div className="benefits-card-3 ben-card">
            <div className="benefits-card-header">
              <FaTools fill='black' />
            </div>
            <div className="benefits-card-body">
              <h3 className="sub-head-text" style={{ margin: "0", color: "#FFFF" }}>
                Sales & Technical Resources
              </h3>
              <p className="para-text">
                Gain access to product demos, technical guidance, and sales enablement tools.
              </p>
            </div>
          </div>
          <div className="benefits-card-4 ben-card">
            <div className="benefits-card-header">
              <FaLightbulb />
            </div>
            <div className="benefits-card-body">
              <h3 className="sub-head-text" style={{ margin: "0", color: "#FFFF" }}>
                Early Access to New Innovations
              </h3>
              <p className="para-text">
                Stay ahead of the market with early visibility into new features and product updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerBenefits;
