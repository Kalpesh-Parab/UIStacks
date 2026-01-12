import React from 'react';
import SliderOne from './components/sliderOne/SliderOne';
import SliderTwo from './components/sliderTwo/SliderTwo';
import SliderThree from './components/sliderThree/SliderThree';
import parallax2 from '../../assets/parallax2.mp4';
import parallax1 from '../../assets/parallax1converted.mp4';
import parallax4 from '../../assets/parallax4converted.mp4';
import parallax5 from '../../assets/parallax5converted.mp4';
import SliderFour from './components/sliderFour/SliderFour';
import audio4 from '../../assets/audio4.mp3';
import parallax4audio_optimized from '../../assets/parallax4audio_optimized.m4a';
import slide0 from '../../assets/slide0converted.mp4';
import slide0audio_optimized from '../../assets/slide0audio_optimized.m4a';
import slide1 from '../../assets/slide1converted.mp4';
import slide1audio_optimized from '../../assets/slide1audio_optimized.m4a';
import slide2 from '../../assets/slide2converted.mp4';
import slide2audio_optimized from '../../assets/slide2audio_optimized.m4a';
import slide3 from '../../assets/slide3converted.mp4';
import slide3audio_optimized from '../../assets/slide3audio_optimized.m4a';
import slide4 from '../../assets/slide4converted.mp4';
import slide4audio_optimized from '../../assets/slide4audio_optimized.m4a';
import slide5 from '../../assets/slide5converted.mp4';
import slide5audio_optimized from '../../assets/slide5audio_optimized.m4a';
import slide6 from '../../assets/slide6converted.mp4';
import slide6audio_optimized from '../../assets/slide6audio_optimized.m4a';

const Sliders = () => {
  return (
    <div>
      {/* <SliderOne /> */}
      {/* <SliderTwo /> */}
      {/* <SliderFour
        videoSrc={parallax4}
        audioSrc={parallax4audio_optimized}
        scrollHeight={2350}
      /> */}
      <SliderFour
        videoSrc={slide0}
        audioSrc={slide0audio_optimized}
        scrollHeight={2350}
      />
      <SliderFour
        videoSrc={slide1}
        audioSrc={slide1audio_optimized}
        scrollHeight={2350}
      />
      <SliderFour
        videoSrc={slide2}
        audioSrc={slide2audio_optimized}
        scrollHeight={2350}
      />
      <SliderFour
        videoSrc={slide3}
        audioSrc={slide3audio_optimized}
        scrollHeight={2350}
      />
      <SliderFour
        videoSrc={slide4}
        audioSrc={slide4audio_optimized}
        scrollHeight={2350}
      />
      <SliderFour
        videoSrc={slide5}
        audioSrc={slide5audio_optimized}
        scrollHeight={2350}
      />
      <SliderFour
        videoSrc={slide6}
        audioSrc={slide6audio_optimized}
        scrollHeight={2350}
      />

      {/* <SliderThree videoSrc={parallax4} scrollHeight={2350} /> */}
      {/* <SliderThree videoSrc={parallax5} scrollHeight={2350} /> */}
      {/* <SliderThree videoSrc={parallax2} scrollHeight={350} /> */}
      {/* <SliderThree videoSrc={parallax1} scrollHeight={550} /> */}
      {/* <SliderOne /> */}
    </div>
  );
};

export default Sliders;
