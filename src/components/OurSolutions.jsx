import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/OurSolutions.css";
import cardImage from "../assets/home/Our-Solutions/bg1.png";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const OurSolutions = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px)",
      () => {
        const cards = cardsRef.current;

        // Card 1 Animation:
        // When Card 2 comes up, Card 1 scales to 0.7
        gsap.to(cards[0], {
          scale: 0.7,
          ease: "none",
          immediateRender: false, // Prevent conflict on load
          scrollTrigger: {
            trigger: cards[1],
            start: "top bottom", // Starts when Card 2 enters viewport
            end: "top top+=150px", // Ends when Card 2 hits the sticky top (approx)
            scrub: 1, // Smooth dragging to prevent jitter
          },
        });

        // When Card 3 comes up, Card 1 scales further from 0.7 down to 0.6
        gsap.to(cards[0], {
          scale: 0.6,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: cards[2],
            start: "top bottom",
            end: "top top+=150px",
            scrub: 1,
          },
        });

        // Card 2 Animation:
        // When Card 3 comes up, Card 2 scales to 0.6
        gsap.to(cards[1], {
          scale: 0.6,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: cards[2],
            start: "top bottom",
            end: "top top+=150px",
            scrub: 1,
          },
        });

        // Card 3 stays at scale 1 (default)
      },
      containerRef,
    );

    return () => mm.revert();
  }, []);

  const solutions = [
    {
      title: "MCAAT",
      desc: "Ensure continuous compliance with MCA Rule 11(g) by tracking and securing critical database activities within your SAP systems.",
      features: [
        "Rule 11(g) Compliance Made Simple",
        "Secure and Enforce Audit Policies",
        "Complete Change Visibility",
      ],
      image: cardImage, // Using placeholder
      reverse: false,
      link: "/mcaat",
    },
    {
      title: "Data Guard",
      desc: "Prevent unauthorized data access and leakage with intelligent monitoring and real-time policy enforcement.",
      features: [
        "USB Control",
        "Screenshot Protection",
        "Watermarking & Control",
        "Anti-Debugging & Tamper Protection",
      ],
      image: cardImage,
      reverse: true,
      link: "/tads",
    },
    {
      title: "ThreatSense SIEM & SOAR",
      desc: "Automate threat detection and response across SAP and non-SAP systems with an AI-driven security platform.",
      features: [
        "Continuously tracks and analyzes SAP® security",
        "Instant alerts on potential threats and vulnerabilities",
        "Automates incident handling with AI-driven remediation",
      ],
      image: cardImage,
      reverse: false,
      link: "/siem-soar",
    },
  ];

  return (
    <div className="our-solutions-container" ref={containerRef} id="solutions">
      <div className="solutions-header">
        <div
          className="sub-para-text"
          style={{
            marginBottom: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillInfoCircle color="black" size={18} /> Our Solutions
        </div>
        <h2 className="head-text">
          Explore our future ready <br /> Cybersecurity solutions
        </h2>
      </div>

      <div className="cards-wrapper">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="solution-card-container"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className={`solution-card ${solution.reverse ? "reverse" : ""}`}
            >
              <div className="card-content">
                <h3 className="head-text">{solution.title}</h3>
                <p className="solution-desc para-text">{solution.desc}</p>
                <ul className="features-list">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.link}
                  className="white-button"
                  style={{ marginTop: "20px" }}
                >
                  Explore More
                </Link>
              </div>
              <div className="card-image-section">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="card-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolutions;
