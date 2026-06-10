import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { caseStudyMetadata } from "../caseStudiesPosts/metadata.js";
import "../css/Case-Studies.css";
import bg from "../assets/home/tab-section/bg-image.png";
import Cta from "../components/Cta";

export default function CaseStudies() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    const chars = headerRef.current.querySelectorAll(".split-text-char");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, [isMobile]);

  const splitLetters = (text) => {
    return text.split("").map((char, index) => {
      if (char === "\n") {
        return <br key={index} />;
      }
      return (
        <span
          key={index}
          className="split-text-char"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  return (
    <>
      <section className="case-study-banner">
        <div className="case-study-banner-content">
          <span className="case-study-eyebrow">
            <FaBookOpen size={16} />
            Case Studies
          </span>

          <h1 ref={headerRef} className="big-text-head">
            Real-World Security <br className="only-mobile"></br>
            {isMobile
              ? splitLetters("Outcomes ")
              : splitLetters("Outcomes")}
          </h1>

          <p className="sub-para-text">
            Discover how organizations use ThreatSenseAI solutions to protect SAP data,<br></br> reduce risk, and strengthen compliance.
          </p>
        </div>
      </section>

      <section className="case-studies-grid-section">
        <div className="case-studies-grid-container">
          {caseStudyMetadata.map((post) => (
            <Link
              to={`/case-studies/${post.slug}`}
              key={post.id}
              className="case-study-card"
            >
              <div className="case-study-card-image">

                <div className="overflow-image-post">
                  <img src={post.image} alt={post.title} />
                </div>

              </div>
              <div className="case-study-card-content">
                <h3 className="sub-head-text case-study-card-title">{post.title}</h3>
                <p className="para-text case-study-card-excerpt">{post.excerpt}</p>
                <div className="case-study-card-footer">
                  <span className="sub-para-text case-study-read-time">{post.readTime}</span>
                  <div className="case-study-arrow-btn">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Cta
        title="Protect Your SAP Data Before 
It Leaves Your Enterprise"
        description="ThreatSenseAI ADS Protect delivers real-time protection against insider risks, 
accidental leaks, and unauthorized data exports."
        backgroundImage={bg}
        buttonText="Request a Demo"
      />
    </>
  );
}
