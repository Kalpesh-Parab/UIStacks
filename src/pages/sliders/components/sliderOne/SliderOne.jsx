import React, { useEffect, useRef } from 'react';
import './sliderOne.scss';
import { sliderOneData } from '../../data/sliderData';

const SliderOne = () => {
  const carouselRef = useRef();
  const nextRef = useRef();
  const prevRef = useRef();

  const autoSlideTime = 5000;
  const animationDuration = 3000;

  const items = sliderOneData;

  // Rotate thumbnails initially
  const rotatedThumbnails = [...items.slice(1), items[0]];

  useEffect(() => {
    const carousel = carouselRef.current;
    const slider = carousel.querySelector('.list');
    const thumbnails = carousel.querySelector('.thumbnail');

    let autoTimer = null;

    const startAutoSlide = () => {
      autoTimer = setInterval(() => {
        showSlider('next');
      }, autoSlideTime);
    };

    const resetAutoSlide = () => {
      clearInterval(autoTimer);
      startAutoSlide();
    };

    const getItems = () => ({
      sliderItems: slider.querySelectorAll('.item'),
      thumbItems: thumbnails.querySelectorAll('.item'),
    });

    const showSlider = (type) => {
      const { sliderItems, thumbItems } = getItems();

      if (type === 'next') {
        const activeMain = sliderItems[0];
        const activeImgSrc = activeMain.querySelector('img').src;

        slider.appendChild(activeMain);

        for (let i = 0; i < thumbItems.length; i++) {
          const thumbImg = thumbItems[i].querySelector('img').src;
          if (thumbImg === activeImgSrc) {
            thumbnails.appendChild(thumbItems[i]);
            break;
          }
        }

        const updatedThumbs = thumbnails.querySelectorAll('.item');
        thumbnails.appendChild(updatedThumbs[0]);

        carousel.classList.add('next');
      } else {
        const lastMain = sliderItems[sliderItems.length - 1];
        const lastImgSrc = lastMain.querySelector('img').src;

        slider.prepend(lastMain);

        for (let i = thumbItems.length - 1; i >= 0; i--) {
          const thumbImg = thumbItems[i].querySelector('img').src;
          if (thumbImg === lastImgSrc) {
            thumbnails.prepend(thumbItems[i]);
            break;
          }
        }

        const updatedThumbs = thumbnails.querySelectorAll('.item');
        thumbnails.prepend(updatedThumbs[updatedThumbs.length - 1]);

        carousel.classList.add('prev');
      }

      setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, animationDuration);
    };

    // Start auto-slide
    startAutoSlide();

    // Manual next/prev clicks
    nextRef.current.onclick = () => {
      showSlider('next');
      resetAutoSlide();
    };

    prevRef.current.onclick = () => {
      showSlider('prev');
      resetAutoSlide();
    };

    return () => clearInterval(autoTimer);
  }, []);

  return (
    <div className='carousel' ref={carouselRef}>
      <div className='list'>
        {items.map((item, i) => (
          <div className='item' key={i}>
            <img src={item.img} alt='' />
            <div className='content'>
              <div className='author'>{item.author}</div>
              <div className='title'>{item.title}</div>
              <div className='topic'>{item.topic}</div>
              <div className='des'>{item.desc}</div>
              <div className='buttons'>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='thumbnail'>
        {rotatedThumbnails.map((item, i) => (
          <div className='item' key={i}>
            <img src={item.img} alt='' />
          </div>
        ))}
      </div>

      <div className='arrows'>
        <button id='prev' ref={prevRef}>
          &lt;
        </button>
        <button id='next' ref={nextRef}>
          &gt;
        </button>
      </div>

      <div className='time'></div>
    </div>
  );
};

export default SliderOne;
