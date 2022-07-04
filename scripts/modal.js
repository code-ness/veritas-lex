var backdrop = document.querySelector(".backdrop");
var nav = document.querySelector(".navbar-modal");
var menu = document.querySelector(".header__menu");
var close = document.querySelector(".close-icon");

menu.addEventListener("click", () => {
  nav.classList.remove("left");
  backdrop.classList.remove("left");
});

close.addEventListener("click", (e) => {
  if (e.target.closest(".close-icon")) {
    nav.classList.add("left");
    backdrop.classList.add("left");
  }
})

backdrop.addEventListener("click", () => {
  nav.classList.add("left");
  backdrop.classList.add("left");
})