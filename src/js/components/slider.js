const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1440: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
