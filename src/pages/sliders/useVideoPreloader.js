import { useEffect, useState } from 'react';

export function useVideoPreloader(videoUrls) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = videoUrls.length;

    if (total === 0) {
      setIsReady(true);
      return;
    }

    const videos = videoUrls.map((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.muted = true;
      video.preload = 'metadata';

      const onReady = () => {
        loaded += 1;
        setProgress(Math.round((loaded / total) * 100));

        if (loaded === total) {
          setTimeout(() => setIsReady(true), 300);
        }
      };

      video.addEventListener('loadedmetadata', onReady, { once: true });
      return video;
    });

    return () => {
      videos.forEach((v) => (v.src = ''));
    };
  }, [videoUrls]);

  return { progress, isReady };
}
