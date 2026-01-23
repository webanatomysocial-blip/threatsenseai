import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready if it's a fresh navigation
      setTimeout(() => {
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
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
