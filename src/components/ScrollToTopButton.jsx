import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import gsap from "gsap";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        if (window.lenis) {
            window.lenis.scrollTo(0, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className={`scroll-to-top-btn  only-windows ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "40px",
                right: "40px",
                zIndex: 1000,
                cursor: "pointer",
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? "visible" : "hidden",
                pointerEvents: isVisible ? "auto" : "none", // Prevent clicks when hidden
                transition: "opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease",
            }}
        >
            <div
                style={{
                    backgroundColor: "#5900EA",
                    color: "var(--white-color)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >
                <FaArrowUp size={20} />
            </div>
        </div>
    );
};

export default ScrollToTopButton;
