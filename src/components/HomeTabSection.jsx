import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/HomeTabSection.css";

// Import images
import bgImage from "../assets/home/tab-section/bg-image.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";

gsap.registerPlugin(ScrollTrigger);

const HomeTabSection = () => {
  const [activeTab, setActiveTab] = useState("detect");
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%", // Animation starts when section hits 80% viewport height
          toggleActions: "play none none none", // Play once
          once: true,
          // markers: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const tabs = [
    { id: "detect", label: "1. Detect", image: img1 },
    { id: "deter", label: "Deter", image: img2 },
    { id: "defend", label: "Defend", image: img3 },
  ];

  return (
    <div className="home-tab-section" ref={containerRef}>
      {/* Background Image Absolute */}
      <img
        ref={bgRef}
        src={bgImage}
        alt="Background Pattern"
        className="tab-bg-image"
      />

      <div className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Navigation Tabs */}

      {/* Content Area */}
      <div className="tab-content-container">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="tab-panel">
                <img
                  src={tab.image}
                  alt={`${tab.label} Dashboard`}
                  className="tab-image"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default HomeTabSection;
