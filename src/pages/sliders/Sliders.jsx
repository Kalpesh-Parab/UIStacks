import React from 'react';
import SliderOne from './components/sliderOne/SliderOne';
import SliderTwo from './components/sliderTwo/SliderTwo';
import SliderThree from './components/sliderThree/SliderThree';
import parallax2 from '../../assets/parallax2.mp4';
import parallax1 from '../../assets/parallax1converted.mp4';
import parallax3 from '../../assets/parallax3converted.mp4';
import parallax4 from '../../assets/parallax4converted.mp4';

const Sliders = () => {
  return (
    <div>
      <SliderOne />
      <SliderTwo />
      <SliderThree videoSrc={parallax4} scrollHeight={2350}/>
      <SliderThree videoSrc={parallax2} scrollHeight={350}/>
      <SliderThree videoSrc={parallax1} scrollHeight={550}/>
      <SliderThree videoSrc={parallax3} scrollHeight={350}/>
      <SliderOne />
    </div>
  );
};

export default Sliders;
