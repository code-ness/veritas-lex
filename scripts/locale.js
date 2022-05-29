var localeBtn = document.querySelector(".locale-btn-js");
var localeSelect = document.querySelector(".locale-select-js");
var localeText = document.querySelector(".locale-text-js");

localeBtn.addEventListener("click", (e) => {
  localeSelect.classList.toggle("none");
})