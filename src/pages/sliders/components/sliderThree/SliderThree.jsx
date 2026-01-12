import { useEffect, useRef, useState } from 'react';
import './sliderThree.scss';

const SliderThree = ({ videoSrc, scrollHeight = 200 }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoaded = () => {
      const d = video.duration || 1;
      setDuration(d);

      // scrollHeight param defines scroll distance in vh
      containerRef.current.style.height = `${scrollHeight}vh`;
    };

    video.addEventListener('loadedmetadata', handleLoaded);

    return () => video.removeEventListener('loadedmetadata', handleLoaded);
  }, [scrollHeight]);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // before sticky → no playback
      if (rect.top > 0) return;

      // after sticky exits bottom → set to end
      if (rect.bottom <= viewportHeight) {
        video.currentTime = duration;
        return;
      }

      const totalScrollable = container.offsetHeight - viewportHeight;
      const scrolled = Math.abs(rect.top);

      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

      video.currentTime = progress * duration;
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [duration]);

  return (
    <div className='scroll-video-container' ref={containerRef}>
      <video ref={videoRef} src={videoSrc} muted preload='auto' playsInline />
    </div>
  );
};

export default SliderThree;

// Note the command to convert videos
// ffmpeg -i parallax3.mp4 -vf scale=960:-2 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p parallax3converted.mp4
