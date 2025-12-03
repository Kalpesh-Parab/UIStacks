
import { useState, useEffect, useRef } from 'react';
import './sliderTwo.scss';
import circle from '../../../../assets/slider/7.svg';

const TOTAL_LAYERS = 7;

const SliderTwo = () => {
  const [layers, setLayers] = useState([]);
  const wrapperRef = useRef(null);

  // Load image & calculate radii automatically
  useEffect(() => {
    const img = new Image();
    img.src = circle;
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      const base = Math.min(width, height) / 2;

      const radii = Array.from({ length: TOTAL_LAYERS }, (_, i) => {
        return ((i + 1) / TOTAL_LAYERS) * base;
      });

      setLayers(radii);
    };
  }, []);

  // Scroll animation that completes at 50% of screen
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const layers = wrapper.querySelectorAll('.circle-layer');

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Point where animation must end
      const endPoint = viewportHeight * 0.5;

      // Progress calculation (0 → 1)
      let progress = 1.7 - rect.top / endPoint;
      progress = Math.max(0, Math.min(1, progress));

      layers.forEach((layer) => {
        const index = Number(layer.style.getPropertyValue('--index'));
        const initialRotation = 50 * index;

        const currentRotation = initialRotation * (1 - progress);

        layer.style.transform = `rotate(${currentRotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [layers]);

  return (
    <div className='SliderTwo'>
      <h1>
        ALRIGHT, NEED SOMEONE <br /> WHO CAN HANDLE IT
      </h1>

      <div className='circle-wrapper' ref={wrapperRef}>
        {layers.map((radius, i) => (
          <div
            key={i}
            className='circle-layer'
            style={{
              '--radius': `${radius}px`,
              '--index': i + 1,
              '--total': TOTAL_LAYERS,
              backgroundImage: `url(${circle})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderTwo;
