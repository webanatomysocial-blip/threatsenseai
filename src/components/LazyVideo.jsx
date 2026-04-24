import React, { useEffect, useRef, useState } from "react";

const LazyVideo = ({
  src,
  className = "",
  poster = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  threshold = 0.5,
}) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play().catch((error) => {
              // Silently handle play errors (e.g., if user hasn't interacted with the page yet)
              console.log("Autoplay prevented or video not ready:", error);
            });
          }
        } else {
          setIsVisible(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      poster={poster}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="metadata"
    />
  );
};

export default LazyVideo;
