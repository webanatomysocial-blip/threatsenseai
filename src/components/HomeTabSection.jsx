import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/HomeTabSection.css";

import bgImage from "../assets/home/tab-section/bg-image.png";
import img1 from "../assets/home/tab-section/d5.png";
import img2 from "../assets/home/tab-section/d8.png";
import img3 from "../assets/home/tab-section/d9.png";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  { id: "detect", label: "Detect", image: img1 },
  { id: "deter", label: "Deter", image: img2 },
  { id: "defend", label: "Defend", image: img3 },
];

const HomeTabSection = () => {
  const [activeTab, setActiveTab] = useState("detect");
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab(prev => {
        const index = tabs.findIndex(tab => tab.id === prev);
        return tabs[(index + 1) % tabs.length].id;
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const activeButton = navRef.current.querySelector(
      `[data-tab="${activeTab}"]`
    );
    if (!activeButton) return;

    gsap.to(indicatorRef.current, {
      x: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [activeTab]);

  return (
    <div className="home-tab-section" ref={containerRef}>
      <img
        ref={bgRef}
        src={bgImage}
        alt="Background Pattern"
        className="tab-bg-image"
      />

      <div className="tab-navigation" ref={navRef}>
        <span ref={indicatorRef} className="tab-indicator" />

        {tabs.map(tab => (
          <button
            key={tab.id}
            data-tab={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-panel ${activeTab === tab.id ? "active" : ""}`}
          >
            <img
              src={tab.image}
              alt={`${tab.label} Dashboard`}
              className="tab-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTabSection;
