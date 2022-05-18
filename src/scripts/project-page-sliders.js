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
});
