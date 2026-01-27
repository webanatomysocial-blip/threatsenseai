import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Solutions-pages.css";
import img from "../assets/home/Custom-Options/2.png";
import img1 from "../assets/home/tab-section/1.jpg";
import img2 from "../assets/home/tab-section/2.jpg";
import img3 from "../assets/home/tab-section/3.jpg";
import { FaGlobe } from "react-icons/fa";

export default function SolutionCarousel({ label, title, data, paddingTop }) {
  const defaultLabel = "Why MCAAT?";
  const defaultTitle = (
    <>
      We Don’t Just Log  <br /> We Secure Beyond Basic Logging
    </>
  );

  const defaultSolutions = [
    {
      img: img1,
      title: "Comprehensive Visibility",
      description:
        "Gain complete oversight of your digital assets with our advanced tracking systems.",
    },
    {
      img: img2,
      title: "Proactive Defense",
      description:
        "Stay ahead of potential threats using our predictive analytics and threat intelligence.",
    },
    {
      img: img3,
      title: "Seamless Integration",
      description:
        "Effortlessly integrate with your existing infrastructure for unified security management.",
    },
    {
      img: img, // Using the variable 'img' imported from line 7
      title: "Customizable Policies",
      description:
        "Define and enforce security policies tailored to your organization's unique requirements.",
    },
  ];

  const displayData = data || defaultSolutions;

  return (
    <>
      <section
        className="solution-carousel-wrapper-mcaat"
        style={{ paddingTop: paddingTop }}
      >
        <div className="capabilities-header">
          <div className="sub-para-text security-label">
            <FaGlobe size={16} style={{ marginRight: "4px" }} />{" "}
            {label || defaultLabel}
          </div>
          <h2 className="head-text">{title || defaultTitle}</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {displayData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="solution-card-mcaat">
                <div className="card-gradient-top">
                  <div className="card-visual-inner">
                    <div className="visual-content-placeholder">
                      <span
                        style={{
                          color: "#ff5722",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <img
                          src={item.img}
                          className="img-carousel"
                          alt={item.title}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-content-mcaat">
                  <h3 className="card-title-mcaat">{item.title}</h3>
                  <p className="card-description-mcaat">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination"></div>
      </section>
    </>
  );
}
