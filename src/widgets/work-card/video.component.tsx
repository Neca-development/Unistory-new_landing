import React, { useRef } from 'react';

interface VideoComponentProps {
  videoSrc: string;
}

const Video: React.FC<VideoComponentProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0
    }
  }

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play()
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-105 t-xs:w-92 rounded-lg"
        onEnded={handleVideoEnd}
        muted
        loop
      />
    </div>
  )
}

export default Video
