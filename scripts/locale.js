var localeBtn = document.querySelector(".locale-btn-js");
var localeSelect = document.querySelector(".locale-select-js");
var localeText = document.querySelector(".locale-text-js");

localeBtn.addEventListener("click", (e) => {
  localeSelect.classList.toggle("none");
})

document.body.addEventListener("click", (e) => {
  if (!e.target.closest(".locale-btn-js")) localeSelect.classList.add("none");
})

localeSelect.addEventListener("click", (e) => {
  if (!e.target.closest(".locale-select-js")) return;

  var locale = localeSelect.dataset.locale;
  var localeActive = localeBtn.dataset.locale_active;
  changeLng(locale.toLowerCase());

  localeSelect.dataset.locale = localeActive;
  localeSelect.querySelector("span").textContent = localeActive;
  localeSelect.querySelector("img").src = `./assets/locale/${localeActive}.png`
  
  localeBtn.dataset.locale_active = locale;
  localeBtn.querySelector("span").textContent = locale;
  localeBtn.querySelector("img").src = `./assets/locale/${locale}.png`
})


i18next.init({
  lng: 'ru',
  debug: true,
  resources: {
    ru: {
      translation: {
        "nav-link-1": "Main Ru",
        "nav-link-2": "Services Ru",
        "nav-link-3": "Staff Ru",
        "nav-link-4": "Contact Us Ru",
      }
    },
    uz: {
      translation: {
        "nav-link-1": "Main Uz",
        "nav-link-2": "Services Uz",
        "nav-link-3": "Staff Uz",
        "nav-link-4": "Contact Us Uz",
      }
    }
  }
}, function(err, t) {
  updateContent();
});

function updateContent() {
  document.getElementById('nav-link-1').innerHTML = i18next.t('nav-link-1');
  document.getElementById('nav-link-2').innerHTML = i18next.t('nav-link-2');
  document.getElementById('nav-link-3').innerHTML = i18next.t('nav-link-3');
  document.getElementById('nav-link-4').innerHTML = i18next.t('nav-link-4');
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});