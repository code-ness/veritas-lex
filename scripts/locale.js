var localeBtn = document.querySelector(".locale-btn-js");
var localeSelect = document.querySelector(".locale-select-js");
var localeText = document.querySelector(".locale-text-js");

var userLang = navigator.language == "ru" ? "ru" : "uz";

i18next.init({
  lng: userLang,
  debug: true,
  resources: {
    ru: {
      translation: {
        "nav-link-1": "Главная",
        "nav-link-2": "Услуги",
        "nav-link-3": "Адвокаты",
        "nav-link-4": "Контакты",
        "hero-title": "Хочешь справедливости? Мы знаем дорогу",
        "hero-text": "Наши опытные юристы готовы бороться за вас.",
        "hero-cta": "Свяжитесь с нами",
        "hero-exp": "лет опыта в этой сфере",
        "services-title": "Адвокатская фирма “Veritas Lex” осуществляет",
        "service-1-title": " Подготовка документов",
        "service-1-text": "Проекты договоров, запросы на информацию, ходатайства, жалобы, возражения на исковое заявление, претензии, рекламации, исковое заявление, апелляционные и кассационные жалобы любой сложности",
        "service-2-title": "Сопровождение сделок с недвижимостью",
        "service-2-text": "Оформление недвижимости, приватизация жилья, перевод недвижимости в нежилой фонд.",
        "service-3-title": "Взаимодействие с государственными органами",
        "service-3-text": "Получение разрешения на строительство, кадастровые работы, получение лицензий и разрешений.",
        "service-4-title": "Ведение наследственного дела",
        "service-4-text": "",
        "service-5-title": "Получение необходимых справок с центра государственных услуг",
        "service-5-text": "",
        "service-6-title": "Регистрация",
        "service-6-text": "Регистрация (перерегистрация) юридических и физических лиц (субъектов предпринимательства)",
        "service-7-title": "Представительство в бюро принудительного исполнения",
        "service-7-text": "",
        "service-8-title": "Представительство в суде ",
        "service-8-text": "в гражданском, экономическом, третейском судах",
        "service-9-title": "Урегулирование споров",
        "service-9-text": "Досудебное урегулирование споров, в частности с помощью проведения медиативных процедур",
        "service-10-title": "Устные юридические консультации",
        "service-10-text": "",
        "service-11-title": "Публично-правовые споры",
        "service-11-text": "Ведение уголовных, экономических, гражданских, административных дел любой сложности.",
        "service-12-title": "Ведение наследственного дела",
        "service-12-text": "",
        "mob-service-3-title": "Взаимодействие с государственными органами",
        "mob-service-3-text": "Получение разрешения на строительство, кадастровые работы, получение лицензий и разрешений.",
        "mob-service-4-title": "Ведение наследственного дела",
        "mob-service-4-text": "",
        "mob-service-5-title": "Получение необходимых справок с центра государственных услуг",
        "mob-service-5-text": "",
        "mob-service-6-title": "Регистрация",
        "mob-service-6-text": "Регистрация (перерегистрация) юридических и физических лиц (субъектов предпринимательства)",
        "mob-service-7-title": "Представительство в бюро принудительного исполнения",
        "mob-service-7-text": "",
        "mob-service-8-title": "Представительство в суде ",
        "mob-service-8-text": "в гражданском, экономическом, третейском судах",
        "mob-service-9-title": "Урегулирование споров",
        "mob-service-9-text": "Досудебное урегулирование споров, в частности с помощью проведения медиативных процедур",
        "mob-service-10-title": "Устные юридические консультации",
        "mob-service-10-text": "",
        "mob-service-11-title": "Публично-правовые споры",
        "mob-service-11-text": "Ведение уголовных, экономических, гражданских, административных дел любой сложности.",
        "show-more": "Показать больше",
        "show-less": "Показывай меньше",
        "mob-show-more": "Показать больше",
        "mob-show-less": "Показывай меньше",
        "staff-title": "Наша команда",
        "staff-1": "Абдугафоров Юсуф Абдугафорович",
        "staff-2": "Талибов Феруз Актамович",
        "staff-3": "Ходжаев Жамшед Кодиркулович",
        "staff-4": "Хасанов Лазиз Азизович",
        "staff-5": "Гуломова Азиза Сабиржановна",
        "staff-6": "Шермамедов Сухроб Сахибович",
        "staff-7": "Толлиев Азизжон Фарходович",
        "staff-director" : "Адвокат Управляющий",
        "staff-partner": "Адвокат Партнёр",
        "form": "ФОРМА ОБРАТНОЙ СВЯЗИ",
        "form-name": "Имя",
        "form-phone": "Номер телефона",
        "form-text": "Отзыв",
        "form-submit": "Разместить",
        "contact": "наши контакты",
        "address": "наш адресс",
        "address-1": "Улица Амира Тимура,",
        "address-2": "дом 149, ориентир",
        "address-3": "Хамкорбанк (Фрунзе)",
        "follow": "&#8210 подписывайтесь на нас"
      }
    },
    uz: {
      translation: {
        "nav-link-1": "Aсосий",
        "nav-link-2": "Хизматлар",
        "nav-link-3": "Ходимлар",
        "nav-link-4": "Биз билан боғланинг",
        "hero-title": "Адолат истайсизми? Биз йулини биламиз",
        "hero-text": "Бизнинг тажрибали адвокатларимиз сиз учун курашишга тайёр.",
        "hero-cta": "Биз билан боғланинг",
        "hero-exp": "йиллик тажриба бу соҳада",
        "services-title": "“Veritas Lex” юридик фирмаси қуйидагиларни таъминлайди",
        "service-1-title": "Ҳужжатларни тайёрлаш",
        "service-1-text": "Шартномалар лойиҳалари, маълумот сўровлари, аризалар, шикоятлар, даъво аризасига эътирозлар, даъволар, талаблар, даъво аризалари, ҳар қандай мураккабликдаги апелляция ва кассация шикоятлари.",
        "service-2-title": "Кўчмас мулк операцияларини қўллаб-қувватлаш",
        "service-2-text": "Кўчмас мулкни рўйхатга олиш, уй-жойни хусусийлаштириш, кўчмас мулкни нотурар фондга ўтказиш.",
        "service-3-title": "Давлат органлари билан ўзаро ҳамкорлик",
        "service-3-text": "Қурилиш рухсатномасини олиш, кадастр ишлари, лицензиялар ва рухсатномалар олиш",
        "service-4-title": "Мерос ишларини олиб бориш",
        "service-4-text": "",
        "service-5-title": "Давлат хизматлари марказидан керакли маълумотномаларни олиш",
        "service-5-text": "",
        "service-6-title": "Рўйхатдан ўтказиш",
        "service-6-text": "Юридик ва жисмоний шахсларни (тадбиркорлик субъектларини) рўйхатдан ўтказиш (қайта рўйхатдан ўтказиш)",
        "service-7-title": "Мажбурий ижро бюросида (MIB) вакиллик",
        "service-7-text": "",
        "service-8-title": "Судда вакиллик",
        "service-8-text": "Фуқаролик, иқтисодий, ҳакамлик судларида",
        "service-9-title": "Низоларни ҳал қилиш",
        "service-9-text": "Низоларни судгача, хусусан, медиатсия тартиб-таомиллари орқали ҳал қилиш",
        "service-10-title": "Оғзаки юридик маслаҳат",
        "service-10-text": "",
        "service-11-title": "Оммавий ҳуқуқ низолари",
        "service-11-text": "Хар қандай мураккабликдаги жиноий, иқтисодий, фуқаролик, маъмурий ишларни юритиш.",
        "service-12-title": "Мерос ишларини олиб бориш",
        "service-12-text": "",
        "mob-service-4-title": "Мерос ишларини олиб бориш",
        "mob-service-4-text": "",
        "mob-service-5-title": "Давлат хизматлари марказидан керакли маълумотномаларни олиш",
        "mob-service-5-text": "",
        "mob-service-6-title": "Рўйхатдан ўтказиш",
        "mob-service-6-text": "Юридик ва жисмоний шахсларни (тадбиркорлик субъектларини) рўйхатдан ўтказиш (қайта рўйхатдан ўтказиш)",
        "mob-service-7-title": "Мажбурий ижро бюросида (MIB) вакиллик",
        "mob-service-7-text": "",
        "mob-service-8-title": "Судда вакиллик",
        "mob-service-8-text": "Фуқаролик, иқтисодий, ҳакамлик судларида",
        "mob-service-9-title": "Низоларни ҳал қилиш",
        "mob-service-9-text": "Низоларни судгача, хусусан, медиатсия тартиб-таомиллари орқали ҳал қилиш",
        "mob-service-10-title": "Оғзаки юридик маслаҳат",
        "mob-service-10-text": "",
        "mob-service-11-title": "Оммавий ҳуқуқ низолари",
        "mob-service-11-text": "Хар қандай мураккабликдаги жиноий, иқтисодий, фуқаролик, маъмурий ишларни юритиш.",
        "show-more": "Кўпроқ кўрсатиш",
        "show-less": "Камроқ кўрсатиш",
        "mob-show-more": "Кўпроқ кўрсатиш",
        "mob-show-less": "Камроқ кўрсатиш",
        "staff-title": "Бизнинг жамоа",
        "staff-1": "Абдуғафоров Юсуф Абдуғафорович",
        "staff-2": "Талибов Феруз Актамович",
        "staff-3": "Ходжаев Жамшед Кодиркулович",
        "staff-4": "Хасанов Лазиз Азизович",
        "staff-5": "Гуломова Азиза Сабиржановна",
        "staff-6": "Шермамедов Сухроб Сахибович",
        "staff-7": "Толлиев Азизжон Фарходович",
        "staff-director" : "Адвокат Бошқарувчи",
        "staff-partner": "Адвокат Шерик",
        "form": "МУРОЖААТ",
        "form-name": "Исм",
        "form-phone": "Телефон рақами",
        "form-text": "Фикр-мулоҳаза",
        "form-submit": "Топшириш",
        "contact": "Бизнинг Контактлар",
        "address": "бизнинг манзилимиз",
        "address-1": "Амир Тимур кучаси,",
        "address-2": "149 уй, мулжал",
        "address-3": "Хамкорбанк (Фрунзе)",
        "follow": "&#8210 бизни кузатиб боринг"
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
  document.getElementById('nav-modal-link-1').innerHTML = i18next.t('nav-link-1');
  document.getElementById('nav-modal-link-2').innerHTML = i18next.t('nav-link-2');
  document.getElementById('nav-modal-link-3').innerHTML = i18next.t('nav-link-3');
  document.getElementById('nav-modal-link-4').innerHTML = i18next.t('nav-link-4');
  document.getElementById('hero-title').innerHTML = i18next.t('hero-title');
  document.getElementById('hero-text').innerHTML = i18next.t('hero-text');
  document.getElementById('hero-cta').innerHTML = i18next.t('hero-cta');
  document.getElementById('hero-exp').innerHTML = i18next.t('hero-exp');
  document.getElementById('services-title').innerHTML = i18next.t('services-title');
  document.getElementById('service-1-title').innerHTML = i18next.t('service-1-title');
  document.getElementById('service-1-text').innerHTML = i18next.t('service-1-text');
  document.getElementById('service-2-title').innerHTML = i18next.t('service-2-title');
  document.getElementById('service-2-text').innerHTML = i18next.t('service-2-text');
  document.getElementById('service-3-title').innerHTML = i18next.t('service-3-title');
  document.getElementById('service-3-text').innerHTML = i18next.t('service-3-text');
  document.getElementById('service-4-title').innerHTML = i18next.t('service-4-title');
  document.getElementById('service-4-text').innerHTML = i18next.t('service-4-text');
  document.getElementById('service-5-title').innerHTML = i18next.t('service-5-title');
  document.getElementById('service-5-text').innerHTML = i18next.t('service-5-text');
  document.getElementById('service-6-title').innerHTML = i18next.t('service-6-title');
  document.getElementById('service-6-text').innerHTML = i18next.t('service-6-text');
  document.getElementById('service-7-title').innerHTML = i18next.t('service-7-title');
  document.getElementById('service-7-text').innerHTML = i18next.t('service-7-text');
  document.getElementById('service-8-title').innerHTML = i18next.t('service-8-title');
  document.getElementById('service-8-text').innerHTML = i18next.t('service-8-text');
  document.getElementById('service-9-title').innerHTML = i18next.t('service-9-title');
  document.getElementById('service-9-text').innerHTML = i18next.t('service-9-text');
  document.getElementById('service-10-title').innerHTML = i18next.t('service-10-title');
  document.getElementById('service-10-text').innerHTML = i18next.t('service-10-text');
  document.getElementById('service-11-title').innerHTML = i18next.t('service-11-title');
  document.getElementById('service-11-text').innerHTML = i18next.t('service-11-text');
  document.getElementById('service-12-title').innerHTML = i18next.t('service-12-title');
  document.getElementById('service-12-text').innerHTML = i18next.t('service-12-text');
  document.getElementById('mob-service-4-title').innerHTML = i18next.t('mob-service-4-title');
  document.getElementById('mob-service-4-text').innerHTML = i18next.t('mob-service-4-text');
  document.getElementById('mob-service-5-title').innerHTML = i18next.t('mob-service-5-title');
  document.getElementById('mob-service-5-text').innerHTML = i18next.t('mob-service-5-text');
  document.getElementById('mob-service-6-title').innerHTML = i18next.t('mob-service-6-title');
  document.getElementById('mob-service-6-text').innerHTML = i18next.t('mob-service-6-text');
  document.getElementById('mob-service-7-title').innerHTML = i18next.t('mob-service-7-title');
  document.getElementById('mob-service-7-text').innerHTML = i18next.t('mob-service-7-text');
  document.getElementById('mob-service-8-title').innerHTML = i18next.t('mob-service-8-title');
  document.getElementById('mob-service-8-text').innerHTML = i18next.t('mob-service-8-text');
  document.getElementById('mob-service-9-title').innerHTML = i18next.t('mob-service-9-title');
  document.getElementById('mob-service-9-text').innerHTML = i18next.t('mob-service-9-text');
  document.getElementById('mob-service-10-title').innerHTML = i18next.t('mob-service-10-title');
  document.getElementById('mob-service-10-text').innerHTML = i18next.t('mob-service-10-text');
  document.getElementById('mob-service-11-title').innerHTML = i18next.t('mob-service-11-title');
  document.getElementById('mob-service-11-text').innerHTML = i18next.t('mob-service-11-text');
  document.getElementById('show-more').innerHTML = i18next.t('show-more');
  document.getElementById('show-less').innerHTML = i18next.t('show-less');
  document.getElementById('mob-show-more').innerHTML = i18next.t('mob-show-more');
  document.getElementById('mob-show-less').innerHTML = i18next.t('mob-show-less');
  document.getElementById('staff-title').innerHTML = i18next.t('staff-title');
  document.getElementById('staff-1').innerHTML = i18next.t('staff-1');
  document.getElementById('staff-2').innerHTML = i18next.t('staff-2');
  document.getElementById('staff-3').innerHTML = i18next.t('staff-3');
  document.getElementById('staff-4').innerHTML = i18next.t('staff-4');
  document.getElementById('staff-5').innerHTML = i18next.t('staff-5');
  document.getElementById('staff-6').innerHTML = i18next.t('staff-6');
  document.getElementById('staff-7').innerHTML = i18next.t('staff-7');
  document.querySelectorAll("#staff-director").forEach(staff => staff.innerHTML = i18next.t('staff-director'));
  document.querySelectorAll("#staff-partner").forEach(staff => staff.innerHTML = i18next.t('staff-partner'));
  document.getElementById('form').innerHTML = i18next.t('form');
  document.getElementById('form-name').innerHTML = i18next.t('form-name');
  document.getElementById('form-phone').innerHTML = i18next.t('form-phone');
  document.getElementById('form-text').innerHTML = i18next.t('form-text');
  document.getElementById('form-submit').innerHTML = i18next.t('form-submit');
  document.getElementById('our-contacts').innerHTML = i18next.t('contact');
  document.getElementById('address').innerHTML = i18next.t('address');
  document.getElementById('address-1').innerHTML = i18next.t('address-1');
  document.getElementById('address-2').innerHTML = i18next.t('address-2');
  document.getElementById('address-3').innerHTML = i18next.t('address-3');
  document.getElementById('follow').innerHTML = i18next.t('follow');
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});

if (userLang == 'ru') {
  localeBtn.dataset.locale_active = "RU";
  localeSelect.dataset.locale = "UZ";
  localeBtn.querySelector("img").src = `./assets/locale/RU.png`;
  localeBtn.querySelector("span").textContent = "RU";
  localeSelect.querySelector("img").src = `./assets/locale/UZ.png`;
  localeSelect.querySelector("span").textContent = "UZ";
} else {
  localeBtn.dataset.locale_active = "UZ";
  localeSelect.dataset.locale = "RU";
  localeBtn.querySelector("img").src = `./assets/locale/UZ.png`;
  localeBtn.querySelector("span").textContent = "UZ";
  localeSelect.querySelector("img").src = `./assets/locale/RU.png`;
  localeSelect.querySelector("span").textContent = "RU";

}

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
  console.log(locale, localeActive);
  changeLng(locale.toLowerCase());

  localeSelect.dataset.locale = localeActive;
  localeSelect.querySelector("span").textContent = localeActive;
  localeSelect.querySelector("img").src = `./assets/locale/${localeActive}.png`
  
  localeBtn.dataset.locale_active = locale;
  localeBtn.querySelector("span").textContent = locale;
  localeBtn.querySelector("img").src = `./assets/locale/${locale}.png`
})