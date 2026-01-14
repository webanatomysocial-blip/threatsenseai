// src/components/LenisProvider.jsx

import { useEffect, useState, useRef } from "react";
import { LenisContext } from "./LenisContext";
import Lenis from "lenis";

function LenisProvider({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = newLenis;
    setLenisInstance(newLenis);

    const raf = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  if (!lenisInstance) {
    return null;
  }

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}

export default LenisProvider;
