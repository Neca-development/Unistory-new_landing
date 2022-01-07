import Swiper, { Autoplay, FreeMode, Mousewheel } from 'swiper';

let SwiperTop = new Swiper('#marquee_top', {
    modules: [Autoplay, FreeMode, Mousewheel],
    spaceBetween: 0,
    centeredSlides: true,
    mousewheel: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
        delay: 1,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 'auto',
});


let SwiperBottom = new Swiper('#marquee_bottom', {
    modules: [Autoplay, FreeMode, Mousewheel],
    mousewheel: true,
    spaceBetween: 0,
    centeredSlides: true,
    mousewheel: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
        delay: 1,
        reverseDirection: true,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 'auto',
});

