import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsCheckLg } from "react-icons/bs";
import defaultImg from "../assets/home/tab-section/1.jpg";
import "../css/Solutions-pages.css";
import { FaGlobe } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const UseCases = ({ label, title, list, image }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const imgEl = imgRef.current;

    gsap.fromTo(
      imgEl,
      { scale: 1.2 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 25%",
          end: "top 25%",
          scrub: 1,
          // markers: true,
        },
      },
    );
  }, []);

  const defaultUseCasesList = [
    "Detect insider threats such as privilege abuse, suspicious logins, or policy violations in SAP",
    "Respond automatically to critical incidents like audit log tampering or unauthorized changes",
    "Correlate SAP and non-SAP events for full attack-chain visibility",
    "Support SOC and audit teams with real-time alerts, evidence, and incident timelines",
  ];

  const displayList = list || defaultUseCasesList;
  const displayLabel = label || "Use Cases";
  const displayTitle = title || (
    <>
      Where ThreatSense <br />
      SIEM & SOAR Delivers <br />
      Immediate Value
    </>
  );
  const displayImage = image || defaultImg;

  return (
    <div className="use-cases-container" ref={containerRef}>
      <div className="uc-text-side">
        <div className="sub-para-text security-label">
          <FaGlobe size={16} style={{ marginRight: "4px" }} /> {displayLabel}
        </div>

        <h2 className="head-text">{displayTitle}</h2>

        <ul className="uc-list">
          {displayList.map((item, index) => (
            <li key={index} className="uc-list-item">
              <div className="uc-check-icon">
                <BsCheckLg />
              </div>
              <p className="uc-item-text">{item}</p>
            </li>
          ))}
        </ul>

        <button className="black-button">Book A Free Demo</button>
      </div>

      <div className="uc-image-side">
        <div className="uc-img-wrapper">
          <img
            ref={imgRef}
            src={displayImage}
            alt="Use Cases Meeting"
            className="uc-image"
          />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
