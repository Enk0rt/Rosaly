document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".portfolio__cards", {
        slidesPerView: 3,
        grid: {
            rows: 2,
            fill: "row",

        },
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".portfolio__arrow--next",
            prevEl: ".portfolio__arrow--prev",
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiperReview = new Swiper(".review__container", {
        slidesPerView: 4,
        freeMode: {
            enabled:true,
            minimumVelocity:0.02
        },
        spaceBetween:100,
        navigation: {
            nextEl: ".review__arrow--next",
            prevEl: ".review__arrow--prev",
        },
    });
});