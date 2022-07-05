var showMoreBtn = document.querySelector(".btn-show-more-js");
var showLessBtn = document.querySelector(".btn-show-less-js");
var moreServices = document.querySelector(".services-more-js");
var services = document.getElementById("services");

var servicesMob = document.querySelector(".services__slider--mob");
var showMoreBtnMob = document.querySelector(".btn-more-mob-js");
var showLessBtnMob = document.querySelector(".btn-less-mob-js");

showMoreBtn.addEventListener("click", () => {
  moreServices.classList.remove("hidden");
  showMoreBtn.style.display = "none";
  showLessBtn.style.display = "block";
})

showLessBtn.addEventListener("click", () => {
  setTimeout(() => {
    moreServices.classList.add("hidden");
    showMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
  }, 300);
  services.scrollIntoView(3);
});

showMoreBtnMob.addEventListener("click", () => {
  servicesMob.classList.remove("hidden");
  showMoreBtnMob.style.display = "none";
  showLessBtnMob.style.display = "block";
})

showLessBtnMob.addEventListener("click", () => {
  setTimeout(() => {
    servicesMob.classList.add("hidden");
    showMoreBtnMob.style.display = "block";
    showLessBtnMob.style.display = "none";
  }, 300);
  services.scrollIntoView(3);
});

document.querySelector(".contact-us-js").addEventListener("click", () => document.getElementById("contact").scrollIntoView(3));

