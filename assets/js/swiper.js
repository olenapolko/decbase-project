new Swiper(".swiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    slidesPerGroupSkip: 0,

    slideToClickedSlide: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1, 
        },
        1120: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
});
