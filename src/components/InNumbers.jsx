import React from "react";
import "../css/InNumbers.css";
import AnimatedContent from "./AnimatedContent";
import { FaChartBar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const topStats = [
  { value: "5", label: "Innovative security tools" },
  { value: "1K+", label: "Threats blocked every month" },
  { value: "~", label: "Data leaks prevented daily" },
  { value: "50+", label: "Experts working toward one mission" },
];

const bottomStats = [
  { value: "50+", label: "Experts working toward one mission" },
  { value: "~100", label: "Data leaks prevented daily" },
];

const InNumbers = () => {
  return (
    <section className="in-numbers-section">
      <div className="in-numbers-container">
        {/* Label */}
        <span className="numbers-label" style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>
          <FaChartBar size={18} color="black" />
          ThreatSenseAi In Numbers
        </span>

        {/* Heading */}
        <h2 className="head-text">Proven Protection at Scale</h2>

        {/* Animate the top stats grid */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          threshold={0.2}
          className="numbers-carousel-wrapper"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true,hid }}
            observer={true}
            observeParents={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            className="numbers-grid"
          >
            {/* Duplicate stats to ensure loop works smoothly even if slidesPerView matches item count */}
            {[...topStats, ...topStats].map((item, index) => (
              <SwiperSlide key={index}>
                <AnimatedContent
                  distance={30}
                  direction="vertical"
                  reverse={false}
                  duration={0.6}
                  delay={index * 0.15}
                  className="number-item"
                >
                  <h3 className="sub-head-text numbers-value">{item.value}</h3>
                  <p className="para-text">{item.label}</p>
                </AnimatedContent>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedContent>

        {/* Bottom cards (optional, can animate the same way if needed) */}
        {/* <div className="numbers-bottom">
          {bottomStats.map((item, index) => (
            <AnimatedContent
              key={index}
              distance={30}
              direction="vertical"
              reverse={false}
              duration={0.6}
              delay={index * 0.15}
              className="numbers-card"
            >
              <span className="sub-head-text numbers-card-value">{item.value}</span>
              <span className="para-text">{item.label}</span>
            </AnimatedContent>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default InNumbers;
