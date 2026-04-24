import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "../css/ThreatRadiation.css";

const ThreatRadiation = ({ id }) => {
  const rowOne = [
    "Excessive SAP Data Exports",
    "Privileged User Misuse",
    "Unauthorized Table Access",
    "Sensitive Data Overexposure",
  ];

  const rowTwo = [
    "Data Pasted into GenAI Tools",
    "Uploads to Personal Email",
    "Unapproved Cloud Drive Sharing",
    "Copy–Paste Data Leakage",
  ];

  const rowThree = [
    "Non-Production Data Exposure",
    "Unmasked PII & Financial Data",
    "Mass Data Downloads",
    "Debug Mode Changes",
  ];

  const rowFour = [
    "Direct DB Access",
    "Unmonitored Data Extracts",
    "GenAI & Browser Risks",
    "Prompt Data Leakage",
  ];
  // ✅ FIXED SWIPER SETTINGS
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: "auto",
    spaceBetween: 14,
    loop: true,
    speed: 6000, // 🔥 reduced for smoothness
    allowTouchMove: false, // 🔥 prevents lag
    freeMode: true, // 🔥 smoother continuous motion
  };

  const renderRow = (items, reverse = false) => (
    <Swiper
      {...swiperOptions}
      autoplay={{
        delay: 1, // 🔥 IMPORTANT: never 0
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      className="threat-swiper"
    >
      {/* ✅ reduced duplication for performance */}
      {[...items, ...items].map((text, index) => (
        <SwiperSlide key={index} className="threat-swiper-slide">
          <div className="threat-pill-carousel">
            <FaCheckCircle className="pill-check-carousel" />
            <span>{text}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="threat-radiation-section" id={id}>
      <div className="radiation-header">
        <div
          className="security-label"
          style={{ justifyContent: "center", marginBottom: "15px" }}
        >
          <FaCheckCircle size={16} style={{ marginRight: "4px" }} />
          Risks &amp; Challenges
        </div>

        <h2 className="head-text">Modern Data Leaks Happen Everywhere</h2>
      </div>

      <div className="threat-carousel-wrapper">
        {renderRow(rowOne, false)}
        {renderRow(rowTwo, true)}
        {renderRow(rowThree, false)}
        {renderRow(rowFour, true)}
      </div>
    </section>
  );
};

export default ThreatRadiation;
