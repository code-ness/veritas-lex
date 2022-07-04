var sliders = document.querySelectorAll(".staff__box");

var swiperServices = new Swiper(".swiperStaff", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".staff-next-btn",
    prevEl: ".staff-prev-btn",
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1050: {
      spaceBetween: 40,
      slidesPerView: 3
    },
  }
});
