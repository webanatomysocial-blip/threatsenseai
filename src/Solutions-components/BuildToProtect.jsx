import React from 'react'
import "../css/EndpointVulnerability.css";
import "../css/BuildToProtect.css";
import { FaInfoCircle } from "react-icons/fa";


import img1 from "../assets/solutions/tads/tads-in/1.png";

const BuildToProtect = ({ label, title, desc, features = [] }) => {
    return (
        <>
            <div className="build-to-pro-con">
                <div className="build-to-pro-left">
                    <img src={img1} alt="" />
                </div>
                <div className="build-to-pro-right">
                    <div className="ev-label">
                        <FaInfoCircle />
                        <span>{label}</span>
                    </div>
                    <h2 className="head-text">
                        {title}
                    </h2>
                    <p className="ev-description">
                        {desc}
                    </p>
                    <div className="build-features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="ev-feature-item">
                                <div className="ev-icon-box">
                                    {feature.icon}
                                </div>
                                <span className="ev-feature-title">{feature.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>



    )
}

export default BuildToProtect