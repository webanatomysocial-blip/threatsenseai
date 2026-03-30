import React from 'react'
import "../css/EndpointVulnerability.css";
import "../css/BuildToProtect.css";
import "../css/RealWorld.css";
import { FaInfoCircle } from "react-icons/fa";


import img1 from "../assets/solutions/tads/tads-in/1.png";

const RealWorld = ({ subtitle = "", icon: Icon, title, desc = "", ctaText = "", ctaLink = "", features = [], direction = "row", enddesc = "" }) => {


    return (
        <>
            <div className="real-build-to-pro-con" style={{ flexDirection: direction }}>
                <div className="real-build-to-pro-left">
                    <img src={img1} alt="" />
                </div>
                <div className="real-build-to-pro-right">
                    {subtitle && (
                        <div className="sub-para-text" style={{ margin:"0",justifyContent: "start", alignItems: "center", gap: "5px" }}>
                            {Icon && <Icon />}
                            {subtitle}
                        </div>
                    )}
                    <h2 className="head-text">
                        {title}
                    </h2>
                    {desc && <p className="para-text">{desc}</p>}
                    <ul className="features-list">
                        {features.map((feature, index) => (
                           <li key={index} className="feature-item">
                               <span className="check-icons">✓</span>{feature.title}
                           </li>
                        ))}
                    </ul>
                    {ctaText && ctaLink && (
                        <a href={ctaLink} style={{ width: "fit-content" }} className="ev-cta">
                            {ctaText}
                        </a>
                    )}
                    {enddesc && <p className="para-text">{enddesc}</p>}
                </div>
            </div>

        </>



    )
}

export default RealWorld