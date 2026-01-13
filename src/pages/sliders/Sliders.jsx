import SliderFour from './components/sliderFour/SliderFour';
import { useEffect, useState } from 'react';

import LoadingScreen from './LoadingScreen';
import { useVideoPreloader } from './useVideoPreloader';
import slide0audio_optimized from '../../assets/slide0audio_optimized.m4a';
import slide1audio_optimized from '../../assets/slide1audio_optimized.m4a';
import slide2audio_optimized from '../../assets/slide2audio_optimized.m4a';
import slide3audio_optimized from '../../assets/slide3audio_optimized.m4a';
import slide4audio_optimized from '../../assets/slide4audio_optimized.m4a';
import slide5audio_optimized from '../../assets/slide5audio_optimized.m4a';
import slide6audio_optimized from '../../assets/slide6audio_optimized.m4a';
import slide7audio_optimized from '../../assets/slide7audio_optimized.m4a';
import slide8audio_optimized from '../../assets/slide8audio_optimized.m4a';
import slide9audio_optimized from '../../assets/slide9audio_optimized.m4a';
import slide10audio_optimized from '../../assets/slide10audio_optimized.m4a';
import slide11audio_optimized from '../../assets/slide11audio_optimized.m4a';
import slide12audio_optimized from '../../assets/slide12audio_optimized.m4a';
import slide13audio_optimized from '../../assets/slide13audio_optimized.m4a';
import slide14audio_optimized from '../../assets/slide14audio_optimized.m4a';
import slide15audio_optimized from '../../assets/slide15audio_optimized.m4a';
import slide16audio_optimized from '../../assets/slide16audio_optimized.m4a';
import slide17audio_optimized from '../../assets/slide17audio_optimized.m4a';
import slide18audio_optimized from '../../assets/slide18audio_optimized.m4a';
import slide19audio_optimized from '../../assets/slide19audio_optimized.m4a';
import slide20audio_optimized from '../../assets/slide20audio_optimized.m4a';
import slide21audio_optimized from '../../assets/slide21audio_optimized.m4a';
import slide22audio_optimized from '../../assets/slide22audio_optimized.m4a';

// 🎯 DATA SOURCE (local + CDN mixed safely)
const sliderFourData = [
  {
    id: 0,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290984/slide0converted_m6bq5a.mp4",
    audio: slide0audio_optimized,
  },
  {
    id: 1,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290952/slide1converted_iizv4x.mp4",
    audio: slide1audio_optimized,
  },
  {
    id: 2,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290979/slide2converted_t5d79b.mp4",
    audio: slide2audio_optimized,
  },
  {
    id: 3,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290975/slide3converted_puuab1.mp4",
    audio: slide3audio_optimized,
  },
  {
    id: 4,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290962/slide4converted_qktidx.mp4",
    audio: slide4audio_optimized,
  },
  {
    id: 5,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290954/slide5converted_cq1gfs.mp4",
    audio: slide5audio_optimized,
  },
  {
    id: 6,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290987/slide6converted_hks2p6.mp4",
    audio: slide6audio_optimized,
  },
  {
    id: 7,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290900/slide7converted_f4jak0.mp4",
    audio: slide7audio_optimized,
  },
  {
    id: 8,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290959/slide8converted_kp2igw.mp4",
    audio: slide8audio_optimized,
  },
  {
    id: 9,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290972/slide9converted_x75v2i.mp4",
    audio: slide9audio_optimized,
  },
  {
    id: 10,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290961/slide10converted_dkcqus.mp4",
    audio: slide10audio_optimized,
  },
  {
    id: 11,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290896/slide11converted_nok4ke.mp4",
    audio: slide11audio_optimized,
  },
  {
    id: 12,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290980/slide12converted_y3ohvf.mp4",
    audio: slide12audio_optimized,
  },
  {
    id: 13,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290923/slide13converted_v0jtqu.mp4",
    audio: slide13audio_optimized,
  },
  {
    id: 14,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290922/slide14converted_igaplc.mp4",
    audio: slide14audio_optimized,
  },
  {
    id: 15,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290972/slide15converted_iik5ot.mp4",
    audio: slide15audio_optimized,
  },
  {
    id: 16,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290966/slide16converted_qzdcpk.mp4",
    audio: slide16audio_optimized,
  },
  {
    id: 17,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290932/slide17converted_ftloym.mp4",
    audio: slide17audio_optimized,
  },
  {
    id: 18,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290973/slide18converted_biwdcm.mp4",
    audio: slide18audio_optimized,
  },
  {
    id: 19,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290972/slide19converted_jcobqh.mp4",
    audio: slide19audio_optimized,
  },
  {
    id: 20,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290980/slide20converted_zpkjcb.mp4",
    audio: slide20audio_optimized,
  },
  {
    id: 21,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290939/slide21converted_lv9hpn.mp4",
    audio: slide21audio_optimized,
  },
  {
    id: 22,
    video: "https://res.cloudinary.com/djhfark2q/video/upload/v1768290944/slide22converted_yynitf.mp4",
    audio: slide22audio_optimized,
  },
];


const heroVideoUrls = sliderFourData.slice(0, 2).map((v) => v.video);

const Sliders = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const { progress, isReady } = useVideoPreloader(heroVideoUrls);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollHint(false);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isReady) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div>
      {showScrollHint && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            width: '100%',
            textAlign: 'center',
            zIndex: 10,
            color: '#fff',
            pointerEvents: 'none',
            transition: 'opacity 0.6s ease',
          }}
        >
          ↓ Scroll to begin the journey
        </div>
      )}

      {sliderFourData.map((item) => (
        <SliderFour
          key={item.id}
          videoSrc={item.video}
          audioSrc={item.audio}
          scrollHeight={2350}
        />
      ))}
    </div>
  );
};

export default Sliders;
