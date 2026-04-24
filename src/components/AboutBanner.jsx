import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/AboutBanner.css";
import bannerImg from "../assets/about-images/banner.jpg";
import bannerImg2 from "../assets/about-images/banner68.mp4";
import bannerImg3 from "../assets/about-images/banner3.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutBanner() {
  const headerRef = useRef(null);
  const layoutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the header letters
      const chars = headerRef.current.querySelectorAll(".split-text-char");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.2,
        },
      );

      // Animate the banner images and video in layout
      const mediaItems = layoutRef.current.querySelectorAll("img, video");
      gsap.fromTo(
        mediaItems,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: layoutRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const splitLetters = (text) => {
    return text.split("").map((char, index) => {
      if (char === "\n") {
        return <br key={index} />;
      }
      return (
        <span
          key={index}
          className="split-text-char"
          style={{ font: "italic 400 1em 'Instrument Serif'" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  return (
    <section className="about-banner-container">
      <div className="about-banner-header">
        <h1 className="big-text-head" ref={headerRef}>
          Why {splitLetters("ThreatSenseAi?")}
        </h1>
        <p className="sub-para-text" style={{ textAlign: "center" }}>
          ThreatSenseAI was founded to secure the most business-critical systems
          enterprises rely on - starting with SAP. We help organizations prevent
          data leaks, insider misuse, and cyber risks through purpose-built
          security solutions designed for real-world enterprise complexity.
        </p>
      </div>

      {/* Animate banner layout images */}
      <div className="about-banner-layout" ref={layoutRef}>
        {/* <img src={bannerImg} alt="" /> */}
        {/* <img src={bannerImg2} alt="" /> */}
        <video src={bannerImg2} autoPlay loop muted playsInline />
        {/* <img src={bannerImg3} alt="" /> */}
      </div>
    </section>
  );
}
