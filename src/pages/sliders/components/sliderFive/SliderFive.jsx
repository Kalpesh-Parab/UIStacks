import { useEffect, useRef, useState } from 'react';
import './sliderFive.scss';

const SliderFive = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hasPlayedOnceRef = useRef(false);

  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isBuffering, setIsBuffering] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);

  // 🔓 Unlock audio after ANY user gesture
  useEffect(() => {
    const unlock = () => setUserInteracted(true);
    window.addEventListener('wheel', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
    window.addEventListener('click', unlock, { once: true });
    return () => {
      window.removeEventListener('wheel', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
    };
  }, []);

  // ▶️ Manual play / pause
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setManuallyPaused(false);
      video.play();
    } else {
      setManuallyPaused(true);
      video.pause();
    }
  };

  // 🔊 Mute toggle
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // 🎯 Snap-aware autoplay logic
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.85) {
          // SLIDE LOCKED
          setTimeout(() => {
            if (manuallyPaused) return;

            if (!hasPlayedOnceRef.current) {
              video.currentTime = 0; // first time only
              hasPlayedOnceRef.current = true;
            }

            video.play();

            if (userInteracted) {
              video.muted = false;
              setIsMuted(false);
            }
          }, 120);
        } else {
          // SLIDE LEFT
          video.pause();
          video.muted = true;
          setIsMuted(true);
          setManuallyPaused(false);
          hasPlayedOnceRef.current = false; // reset for next visit
        }
      },
      { threshold: [0, 0.5, 0.85, 1] },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [userInteracted, manuallyPaused]);

  return (
    <section className='SliderFive' ref={containerRef}>
      {isBuffering && <div className='video-loader'>Loading video…</div>}

      <video
        ref={videoRef}
        className='slider-video'
        src={videoSrc}
        preload='metadata'
        playsInline
        muted={isMuted}
        onClick={handleVideoClick}
        onCanPlay={() => {
          setIsReady(true);
          setIsBuffering(false);
        }}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
      />

      {isReady && (
        <button className='mute-btn' onClick={toggleMute}>
          {isMuted ? '🔇' : '🔊'}
        </button>
      )}
    </section>
  );
};

export default SliderFive;
