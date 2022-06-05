var sliders = document.querySelectorAll(".staff__box");

var swiperServices = new Swiper(".swiperStaff", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 60,
  navigation: {
    nextEl: ".staff-next-btn",
    prevEl: ".staff-prev-btn",
  },
});

sliders.forEach(item => {
  item.addEventListener("mouseover", () => swiperServices.autoplay.stop());
  item.addEventListener("mouseout", () => swiperServices.autoplay.start());
})
