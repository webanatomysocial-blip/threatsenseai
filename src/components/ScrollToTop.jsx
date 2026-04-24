import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleSameHashClick = (e) => {
      const link = e.target.closest("a");
      if (
        link &&
        link.hash &&
        link.hash === window.location.hash &&
        link.pathname === window.location.pathname
      ) {
        const elem = document.querySelector(link.hash);
        if (elem) {
          if (window.lenis) {
            window.lenis.scrollTo(elem, {
              offset: -100,
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            elem.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleSameHashClick);

    let timer;
    if (hash) {
      timer = setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) {
          if (window.lenis) {
            window.lenis.scrollTo(elem, {
              offset: -100, // Optional offset for header
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            elem.scrollIntoView({ behavior: "smooth" });
          }
          if (ScrollTrigger) {
            ScrollTrigger.refresh();
          }
        }
      }, 100);
    } else {
      // Scroll to top normally
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    return () => {
      document.removeEventListener("click", handleSameHashClick);
      if (timer) clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
