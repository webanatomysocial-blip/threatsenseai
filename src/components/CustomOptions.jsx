import React, { useState, useEffect, useRef } from "react";
import "../css/CustomOptions.css";
import { AiFillAppstore } from "react-icons/ai";
import img1 from "../assets/home/Custom-Options/1.png";
import img2 from "../assets/home/Custom-Options/2.png";
import bgImage from "../assets/home/Custom-Options/bg.png";

const CustomOptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const options = [
    {
      id: 0,
      title: "Tag and Track AI Assets with Clarity",
      desc: "Define routes, fallbacks, and checks that match your flow.",
      image: img1,
    },
    {
      id: 1,
      title: "Compose Orchestration Runbooks Fast",
      desc: "Drag & Drop Reusable Components to build complex workflows instantly.",
      image: img2,
    },
    {
      id: 2,
      title: "Share Reviews Safely with Guardrails",
      desc: "Ensure every AI interaction is monitored and validated before release.",
      image: img1,
    },
  ];

  const startTimer = () => {
    stopTimer();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % options.length);
    }, 4000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [options.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <div className="custom-options-container">
      <div className="custom-options-header">
        <div
          className="sub-para-text"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <AiFillAppstore /> Custom Options
        </div>
        <h2 className="head-text">
          Customize Threat <br /> Intelligence Your Way
        </h2>
      </div>

      <div className="custom-options-wrapper">
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`option-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {/* Background Image for Active Card */}
            {activeIndex === index && (
              <img src={bgImage} alt="bg" className="active-bg-image" />
            )}

            <div className="option-content">
              <h3 className="option-title">{option.title}</h3>
              <p className="option-desc">{option.desc}</p>

              <div className="option-image-container">
                <img
                  src={option.image}
                  alt={option.title}
                  className="option-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Progress Indicators at Bottom */}
      <div className="options-pagination">
        {options.map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            {activeIndex === index && (
              <div className="pagination-progress"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomOptions;
