import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/index.css";
import "../css/HomeBanner.css";

const HomeBanner = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1) Heading animation: Opacity 0->1, Blur 10px->0px, staggered by word
      const words = headingRef.current.querySelectorAll(".word-span");
      gsap.fromTo(
        words,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
      );

      // 2) Below head elements: y -50px -> 0, Opacity 0->1
      gsap.fromTo(
        subContentRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5, // Start after heading starts appearing
          ease: "power2.out",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to split text into words wrapped in spans
  const renderSplitText = (text) => {
    return text.split("\n").map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {line.split(" ").map((word, wordIndex) => {
          // Check if word contains "Analyzer" (ignoring punctuation if needed, or exact match)
          const isAnalyzer = word.toLowerCase().includes("analyzer");
          return (
            <span
              key={`${lineIndex}-${wordIndex}`}
              className="word-span"
              style={{
                fontStyle: isAnalyzer ? "italic" : "normal",
                fontWeight: isAnalyzer ? "300" : "bold",
                fontFamily: isAnalyzer ? "Instrument Serif" : "inherit",
              }}
            >
              {word}
            </span>
          );
        })}
        {lineIndex < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div ref={containerRef} className="home-banner-container">
      {/* 4) Background video placeholder */}
      <div className="video-placeholder">
        {/* Actual video element would go here */}
      </div>

      <div className="banner-content">
        {/* Badge */}
        <div className="banner-badge">Best Security for SAP Ecosystems</div>

        {/* Heading */}
        <h1 className="big-text-head banner-heading" ref={headingRef}>
          {renderSplitText("Meet your new AI \n driven threat Analyzer.")}
        </h1>

        <div ref={subContentRef}>
          {/* Sub-text */}
          <p className="para-text banner-subtext">
            Leverage our AI-powered Threat Intelligence assistant with SIEM,
            SOAR, and MDR capabilities for SAP®
          </p>

          {/* Buttons */}
          <div className="banner-buttons">
            <a href="#" className="blue-button">
              Get Started
            </a>
            <a href="#" className="white-button">
              Book A Free Demo
            </a>
          </div>

          {/* Footer Stats / Dashed Border Section */}
          <div className="banner-stats">
            <div className="stat-item">
              <div className="sub-para-text stat-title">
                Faster than other solutions
              </div>
              <div className="stat-value">5X</div>
            </div>
            <div className="stat-item2">
              <div className="sub-para-text stat-title">Support Assistant</div>
              <div className="stat-value">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
