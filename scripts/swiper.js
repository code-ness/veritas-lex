var swiperServices = new Swiper(".swiperServices", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".services__slider-next-btn",
    prevEl: ".services__slider-prev-btn",
  },
});