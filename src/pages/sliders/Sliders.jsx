import React from 'react';
import SliderOne from './components/sliderOne/SliderOne';
import SliderTwo from './components/sliderTwo/SliderTwo';
import SliderThree from './components/sliderThree/SliderThree';
import parallax1 from '../../assets/parallax2.mp4';

const Sliders = () => {
  return (
    <div>
      <SliderOne />
      <SliderTwo />
      <SliderThree videoSrc={parallax1} />
      <SliderOne />
    </div>
  );
};

export default Sliders;
