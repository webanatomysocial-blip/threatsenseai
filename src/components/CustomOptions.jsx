import React, { useState, useEffect, useRef } from "react";
import "../css/CustomOptions.css";
import { AiFillAppstore } from "react-icons/ai";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import img1 from "../assets/home/Custom-Options/DMSS-Visualization.jpeg";
import img2 from "../assets/home/Custom-Options/Design Automated.jpeg";
import img3 from "../assets/home/Custom-Options/Correction-Engine.jpeg";
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
      desc: "Build customizable SOAR playbooks automating investigation, containment, and remediation.",
      image: img2,
    },
    {
      id: 2,
      title: "Share Reviews Safely with Guardrails",
      desc: "Continuously monitor environments, correlate risks, and act early proactively.",
      image: img3,
    },
  ];

  const startTimer = () => {
    stopTimer();
    // Only start timer if screen is larger than mobile (768px)
    if (window.innerWidth > 768) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % options.length);
      }, 4000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();

    // Re-check on resize to handle orientation/window changes
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        stopTimer();
      } else if (!intervalRef.current) {
        startTimer();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      stopTimer();
      window.removeEventListener("resize", handleResize);
    };
  }, [options.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <div className="custom-options-container">
      <div className="custom-wrapper">
        <div className="custom-left">
          <div className="custom-options-header">
            <div className="sub-para-text">
              <AiFillAppstore /> Custom Options
            </div>
            <h2 className="head-text">
              Customize Threat <br /> Intelligence Your Way
            </h2>
          </div>
          <div className="co-accordion-list">
            {options.map((option, index) => (
              <div
                key={option.id}
                className={`co-accordion-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="co-accordion-header">
                  <span className="co-accordion-title">{option.title}</span>
                  <span className="co-accordion-icon">
                    {activeIndex === index ? (
                      <IoChevronDown />
                    ) : (
                      <IoChevronForward />
                    )}
                  </span>
                </div>
                <div className="co-accordion-content">
                  <p className="co-accordion-desc">{option.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-right">
          <div className="image-display-container">
            {options.map((option, index) => (
              <img
                key={option.id}
                src={option.image}
                alt={option.title}
                className={`display-image ${activeIndex === index ? "visible" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOptions;
