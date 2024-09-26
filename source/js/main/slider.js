"use strict";
(function () {
  new Swiper(".js-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 13,
      },

      738: {
        slidesPerView: "auto",
        loop: true,
        slidesPerView: 3,
        spaceBetween: 13,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
})();
