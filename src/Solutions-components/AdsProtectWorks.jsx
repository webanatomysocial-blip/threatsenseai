import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShieldAlt } from "react-icons/fa";
import "../css/AdsProtectWorks.css";
import icon from "../assets/solutions/tadsprotect/icon.png";
gsap.registerPlugin(ScrollTrigger);

const AdsProtectWorks = ({
  label,
  icon: Icon,
  subPara,
  title,
  desc,
  features = [],
}) => {
  const containerRef = useRef(null);

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      const container = containerRef.current;
      if (!container) return;

      const cards = gsap.utils.toArray(
        container.querySelectorAll(".ads-stacked-card"),
      );

      mm.add("(min-width: 769px)", () => {
        // Desktop: Stacked Animation
        gsap.set(cards, {
          position: "absolute",
          left: "50%",
          top: "60%",
          xPercent: -50,
          yPercent: -50,
          x: (i) => (i - 1.5) * 120,
          y: 0,
          transformOrigin: "center center",
          zIndex: (i) => i,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=1500", // Smooth scroll over a good distance
            scrub: 1,
            pin: true,
          },
        });

        // Spread cards horizontally
        cards.forEach((card, i) => {
          // Adjust spacing based on width, approximately 310px step size
          const xOffset = (i - 1.5) * 310;
          tl.to(
            card,
            {
              x: xOffset,
              y: 0,
              ease: "power2.inOut",
            },
            0,
          );
        });
      });

      mm.add("(max-width: 768px)", () => {
        // Mobile: Clear inline styles to let CSS manage normal block layout
        gsap.set(cards, { clearProps: "all" });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ads-works-pin" ref={containerRef}>
      <div className="ads-works-header">
        <div className="ads-label">
          {Icon ? <Icon /> : <FaShieldAlt />}
          <span>{label}</span>
        </div>
        <p className="sub-para-text" style={{ margin: "0" }}>
          {subPara}
        </p>
        <h2 className="head-text">{title}</h2>
        <p className="sub-para-text">{desc}</p>
      </div>
      <div className="ads-cards-wrapper">
        {features.map((feature, index) => (
          <div key={index} className="ads-stacked-card">
            <img src={icon} alt="" />
            <h3 className="sub-head-text ">{feature.title}</h3>
            <p className="sub-para-text ">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdsProtectWorks;
