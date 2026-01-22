import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
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
          const isAnalyzer =
            word.toLowerCase().includes("cybersecurity") ||
            word.toLowerCase().includes("solutions");
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

  const statsData = [
    { title: "Insider-driven Data Leaks", value: "5x" },
    { title: "Breaches caused by trusted users", value: "~90%" },
    { title: "Sensitive data exposed via AI tools", value: "~40%" },
    {
      title: "Time to detect insider data threats than external attacks",
      value: "3x",
    },
    { title: "Growth in browser-based data leaks", value: "3x" },
    { title: "Enterprises with overexposed sensitive data", value: "~60%" },
    { title: "Average cost of a data breach", value: "$4.45M" },
    { title: "Enterprises lack proof of data privacy controls", value: "~70%" },
  ];

  return (
    <div ref={containerRef} className="home-banner-container">
      {/* 4) Background video placeholder */}
      <div className="video-placeholder">
        {/* Actual video element would go here */}
      </div>

      <div className="banner-content">
        {/* Badge */}
        <div className="banner-badge">
          Protect Enterprise Data Before It Becomes a Breach.
        </div>

        {/* Heading */}
        <h1 className="big-text-head banner-heading" ref={headingRef}>
          {renderSplitText(
            "Meet your new AI driven \n  Cybersecurity solutions.",
          )}
        </h1>

        <div ref={subContentRef}>
          {/* Sub-text */}
          <p className="para-text banner-subtext">
            AI-powered cybersecurity platform designed to prevent data leaks,
            insider threats, and compliance failures across enterprise systems,
            browsers, and AI tools.
          </p>

          {/* Buttons */}
          <div className="banner-buttons">
            <a href="#" className="red-button">
              Get Started
            </a>
            <a href="#" className="white-button">
              Book a Demo
            </a>
          </div>

          {/* Footer Stats / Dashed Border Section */}
          <div className="banner-stats">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="stats-swiper"
            >
              {statsData.map((stat, index) => (
                <SwiperSlide key={index}>
                  <div className="stat-item-slide">
                    <div className="sub-para-text stat-title">{stat.title}</div>
                    <div className="stat-value">{stat.value}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
