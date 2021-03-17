// import Swiper from 'swiper';
import Swiper from './vendor/swiper-bundle.min.js';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

document.querySelectorAll('.project-slider').forEach(el => {
  const swiperSliderThums = new Swiper(el.querySelector('.project-slider__thumb'), {
    spaceBetween: 4,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  const swiperSliderTop = new Swiper(el.querySelector('.project-slider__top'), {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: swiperSliderThums
    },
    breapoints: {
      720: {
        spaceBetween: 0
      }
    }
  });
});
