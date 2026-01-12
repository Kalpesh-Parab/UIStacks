import SliderFour from './components/sliderFour/SliderFour';
import slide0video from '../../assets/slide0converted.mp4';
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
    video: slide0video, // LOCAL VIDEO
    audio: slide0audio_optimized,
  },
  {
    id: 1,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201310/slide1converted_c26i6h.mp4',
    audio: slide1audio_optimized,
  },
  {
    id: 2,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201342/slide2converted_k1tuqz.mp4',
    audio: slide2audio_optimized,
  },
  {
    id: 3,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201331/slide3converted_ggldqr.mp4',
    audio: slide3audio_optimized,
  },
  {
    id: 4,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201339/slide4converted_pehxv3.mp4',
    audio: slide4audio_optimized,
  },
  {
    id: 5,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201317/slide5converted_lqqzxl.mp4',
    audio: slide5audio_optimized,
  },
  {
    id: 6,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201340/slide6converted_xmmnqh.mp4',
    audio: slide6audio_optimized,
  },
  {
    id: 7,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201230/slide7converted_mbckvu.mp4',
    audio: slide7audio_optimized,
  },
  {
    id: 8,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201311/slide8converted_adqnfo.mp4',
    audio: slide8audio_optimized,
  },
  {
    id: 9,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201321/slide9converted_epdfpj.mp4',
    audio: slide9audio_optimized,
  },
  {
    id: 10,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201312/slide10converted_g2hfqu.mp4',
    audio: slide10audio_optimized,
  },
  {
    id: 11,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201249/slide11converted_oqmqbo.mp4',
    audio: slide11audio_optimized,
  },
  {
    id: 12,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201337/slide12converted_mtfhgc.mp4',
    audio: slide12audio_optimized,
  },
  {
    id: 13,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201282/slide13converted_r2eovn.mp4',
    audio: slide13audio_optimized,
  },
  {
    id: 14,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201265/slide14converted_kooppa.mp4',
    audio: slide14audio_optimized,
  },
  {
    id: 15,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201327/slide15converted_myg0cg.mp4',
    audio: slide15audio_optimized,
  },
  {
    id: 16,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201320/slide16converted_ssoeio.mp4',
    audio: slide16audio_optimized,
  },
  {
    id: 17,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201275/slide17converted_zelrek.mp4',
    audio: slide17audio_optimized,
  },
  {
    id: 18,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201329/slide18converted_aikhu4.mp4',
    audio: slide18audio_optimized,
  },
  {
    id: 19,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201317/slide19converted_ey4pxr.mp4',
    audio: slide19audio_optimized,
  },
  {
    id: 20,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201330/slide20converted_xhmijs.mp4',
    audio: slide20audio_optimized,
  },
  {
    id: 21,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201290/slide21converted_jfgmv4.mp4',
    audio: slide21audio_optimized,
  },
  {
    id: 22,
    video:
      'https://res.cloudinary.com/djhfark2q/video/upload/f_auto,q_auto/v1768201305/slide22converted_gnnhtn.mp4',
    audio: slide22audio_optimized,
  },
];

const Sliders = () => {
  return (
    <div>
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
