import { useEffect, useRef, useState } from 'react';
import './sliderFour.scss';

const SliderFour = ({
  videoSrc,
  audioSrc,
  scrollHeight = 200,
  parallaxStrength = 40,
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(1);

  // Set container height + duration
  useEffect(() => {
    const video = videoRef.current;
    const onLoaded = () => {
      setDuration(video.duration || 1);
      containerRef.current.style.height = `${scrollHeight}vh`;
    };
    video.addEventListener('loadedmetadata', onLoaded);
    return () => video.removeEventListener('loadedmetadata', onLoaded);
  }, [scrollHeight]);

  // 🔥 LAZY BUFFER VIDEO BEFORE IT APPEARS
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.load(); // start buffering
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Scroll sync
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      const video = videoRef.current;
      const audio = audioRef.current;
      if (!container || !video || !audio) return;

      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.top > 0 || rect.bottom <= vh) return;

      const total = container.offsetHeight - vh;
      const progress = Math.min(1, Math.abs(rect.top) / total);
      const time = progress * duration;

      video.currentTime = time;

      if (Math.abs(audio.currentTime - time) > 0.2) {
        audio.currentTime = time;
      }

      audio.volume = 0.6;
      audio.play().catch(() => {});
      video.style.transform = `translateY(${
        (1 - progress) * parallaxStrength
      }px)`;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [duration, parallaxStrength]);

  return (
    <div className='scroll-video-audio-container' ref={containerRef}>
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        preload='metadata'
        playsInline
        crossOrigin='anonymous'
      />

      <audio ref={audioRef} src={audioSrc} preload='metadata' />
    </div>
  );
};

export default SliderFour;
