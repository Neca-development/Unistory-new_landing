import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

Swiper.use([Navigation]);

const overviewSwiper = new Swiper(".projectOverview__slider", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".projectOverview__btnNext",
    prevEl: ".projectOverview__btnPrev",
  },
});

const otherProjectsSwiper = new Swiper(".projectOther__slider", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    647: {
      slidesPerView: 3,
    },
  },
});

const howStepsMobileSwiper = new Swiper(".projectHow__mobileSlider", {
  loop: false,
  slidesPerView: 1.2,
  spaceBetween: 5,
  freeMode: true,
});
