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

    const markLoaded = () => {
      loaded += 1;
      setProgress(Math.round((loaded / total) * 100));

      if (loaded >= total) {
        setTimeout(() => setIsReady(true), 300);
      }
    };

    const videos = videoUrls.map((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'metadata';
      video.muted = true;
      video.crossOrigin = 'anonymous';

      // ✅ SUCCESS
      video.addEventListener('loadedmetadata', markLoaded, { once: true });

      // ✅ FAILURE SAFETY (VERY IMPORTANT)
      video.addEventListener('error', markLoaded, { once: true });

      // ✅ TIMEOUT SAFETY (CDN stalls)
      setTimeout(markLoaded, 4000);

      return video;
    });

    return () => {
      videos.forEach((v) => (v.src = ''));
    };
  }, [videoUrls]);

  return { progress, isReady };
}
