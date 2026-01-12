import { useEffect, useRef, useState } from 'react';
import './sliderFour.scss';

const SliderFour = ({
  videoSrc,
  audioSrc,
  scrollHeight = 200, // vh
  parallaxStrength = 40, // px
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(1);
  const userInteractedRef = useRef(false);

  // Load video metadata
  useEffect(() => {
    const video = videoRef.current;

    const onLoaded = () => {
      setDuration(video.duration || 1);
      containerRef.current.style.height = `${scrollHeight}vh`;
    };

    video.addEventListener('loadedmetadata', onLoaded);
    return () => video.removeEventListener('loadedmetadata', onLoaded);
  }, [scrollHeight]);

  // Scroll scrub logic
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!container || !video || !audio) return;

    const onScroll = () => {
      userInteractedRef.current = true;

      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.top > 0) return;

      if (rect.bottom <= vh) {
        video.currentTime = duration;
        audio.currentTime = duration;
        return;
      }

      const totalScrollable = container.offsetHeight - vh;
      const scrolled = Math.abs(rect.top);
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      const currentTime = progress * duration;

      // Sync video + audio
      video.currentTime = currentTime;

      // Audio sync (guarded)
      if (userInteractedRef.current) {
        if (Math.abs(audio.currentTime - currentTime) > 0.15) {
          audio.currentTime = currentTime;
        }
        audio.volume = 0.6;
        audio.play().catch(() => {});
      }

      // Parallax effect
      const translateY = (1 - progress) * parallaxStrength;
      video.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [duration, parallaxStrength]);

  return (
    <div className='scroll-video-audio-container' ref={containerRef}>
      <video ref={videoRef} src={videoSrc} muted preload='auto' playsInline />

      <audio ref={audioRef} src={audioSrc} preload='auto' playsInline />
    </div>
  );
};

export default SliderFour;

// Note the command to convert audio
//ffmpeg -i parallax4converted.mp4 -vn -ar 48000 -ab 192k -acodec aac -movflags faststart parallax4audio_optimized.m4a
