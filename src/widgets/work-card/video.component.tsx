import React, { useRef, useEffect } from "react";
import { useDetectDeviceType } from "@shared/lib/hooks/useDetectDeviceType.hook";

interface VideoComponentProps {
  videoSrc: string;
}

const Video: React.FC<VideoComponentProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useDetectDeviceType(647);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    if (isMobile) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.error("Autoplay was prevented:", error);
              });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }
        });
      }, options);

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }

    return () => {};
  }, [isMobile]);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-105 t-xs:w-92 rounded-lg"
        onEnded={handleVideoEnd}
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default Video;
