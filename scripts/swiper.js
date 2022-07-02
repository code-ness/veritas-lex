var sliders = document.querySelectorAll(".staff__box");

var swiperServices = new Swiper(".swiperStaff", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".staff-next-btn",
    prevEl: ".staff-prev-btn",
  },
  breakpoints: {
    768: {
      autoplay: true,
      slidesPerView: 2
    },
    1050: {
      autoplay: true,
      spaceBetween: 40,
      slidesPerView: 3
    },
  }
});

sliders.forEach(item => {
  item.addEventListener("mouseover", () => swiperServices.autoplay.stop());
  item.addEventListener("mouseout", () => swiperServices.autoplay.start());
})
