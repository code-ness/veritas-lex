var showMoreBtn = document.querySelector(".btn-show-more-js");
var showLessBtn = document.querySelector(".btn-show-less-js");
var moreServices = document.querySelector(".services-more-js");
var services = document.getElementById("services");

showMoreBtn.addEventListener("click", () => {
  moreServices.classList.remove("hidden");
  showMoreBtn.style.display = "none";
  showLessBtn.style.display = "block";
})

showLessBtn.addEventListener("click", () => {
  moreServices.classList.add("hidden");
  showMoreBtn.style.display = "block";
  showLessBtn.style.display = "none";
  services.scrollIntoView(3);
});