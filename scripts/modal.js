var backdrop = document.querySelector(".backdrop");
var nav = document.querySelector(".navbar-modal");
var menu = document.querySelector(".header__menu");
var close = document.querySelector(".close-icon");
var links = document.querySelectorAll(".nav-modal-links-js");
var feedbackOpen = document.querySelector(".contact__toggler");
var feedbackClose = document.querySelector(".contact__close");
var feedback = document.querySelector(".feedback-modal-js");

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

links.forEach((link) => link.addEventListener("click", () => {
  nav.classList.add("left");
  backdrop.classList.add("left");
}));

feedbackOpen.addEventListener("click", () => {
  feedback.classList.remove("hidden");
  feedbackOpen.style.display = "none";
});
feedbackClose.addEventListener("click", () => {
  feedback.classList.add("hidden");
  feedbackOpen.style.display = "block";
});