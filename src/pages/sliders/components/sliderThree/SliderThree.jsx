import { useEffect, useRef, useState } from "react";
import "./sliderThree.scss";

const SCROLL_MULTIPLIER = 1200; 
// Higher number = more scroll distance = slower video progression

const SliderThree = ({ videoSrc }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(1);

  // Load metadata and adjust container height based on video length
  useEffect(() => {
    const video = videoRef.current;

    const handleMeta = () => {
      const vidDuration = video.duration || 1;
      setDuration(vidDuration);

      // Dynamic height so section stays until video finishes
      const dynamicHeight = vidDuration * SCROLL_MULTIPLIER;
      containerRef.current.style.height = `${dynamicHeight}px`;
    };

    video.addEventListener("loadedmetadata", handleMeta);
    return () => video.removeEventListener("loadedmetadata", handleMeta);
  }, []);

  // Main scroll → video scrub logic
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // BEFORE sticky — do nothing
      if (rect.top > 0) return;

      // AFTER sticky bottom — force video to end
      if (rect.bottom <= viewportHeight) {
        video.currentTime = duration;
        return;
      }

      // Sticky mode — calculate scroll progress
      const scrollDistance = container.offsetHeight - viewportHeight;
      const scrolled = Math.abs(rect.top);

      const progress = Math.min(1, Math.max(0, scrolled / scrollDistance));

      video.currentTime = duration * progress;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [duration]);

  return (
    <div className="scroll-video-container" ref={containerRef}>
      <video ref={videoRef} src={videoSrc} muted preload="auto" playsInline />
    </div>
  );
};

export default SliderThree;
