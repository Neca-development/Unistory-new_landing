import Swiper, { Autoplay } from 'swiper';

let SwiperTop = new Swiper('.marquee_top', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 1,
    },
    slidesPerView: 'auto',
});

let SwiperBottom = new Swiper('.marquee_bottom', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        reverseDirection: true
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});

