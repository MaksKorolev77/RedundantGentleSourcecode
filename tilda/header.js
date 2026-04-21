/* ============================================================
   УльтраКаркас — JS шапки (Tilda T123)
   Вставьте содержимое этого файла в поле «JS» блока T123 Zero Block шапки
   ============================================================ */
(function () {
  if (window._ukInitHeader) return;
  window._ukInitHeader = true;

  // ============ Sticky scroll ============
  function setupScroll() {
    var hdr = document.getElementById('uk-header');
    if (!hdr) return;
    function onScroll() {
      if (window.scrollY > 10) {
        hdr.classList.add('is-scrolled');
      } else {
        hdr.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============ Мобильное меню ============
  function setupMobileMenu() {
    var menu   = document.getElementById('uk-mobile-menu');
    var btnOpen  = document.getElementById('uk-menu-open');
    var btnClose = document.getElementById('uk-menu-close');
    if (!menu) return;

    function openMenu() {
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (btnOpen)  btnOpen.addEventListener('click', openMenu);
    if (btnClose) btnClose.addEventListener('click', closeMenu);

    // Закрываем при клике по ссылке внутри меню
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    // Закрываем кнопкой «Получить расчёт» внутри меню
    menu.querySelectorAll('[data-modal-open]').forEach(function (btn) {
      btn.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ============ Модальное окно (если на странице нет home.js / projects.js / project.js) ============
  // Если страница уже инициализировала модаль через home.js — этот блок не будет конфликтовать,
  // потому что кнопка [data-modal-open] уже слушается там.
  // На страницах без своего JS (например, /privacy/) этот обработчик откроет окно.
  function setupModalFallback() {
    document.addEventListener('click', function (e) {
      // Если другой скрипт (project.js / home.js / projects.js) уже обрабатывает модаль — не вмешиваемся
      if (window._ukModalReady) return;
      var btn = e.target.closest('[data-modal-open]');
      if (!btn) return;
      e.preventDefault();
      // Простейший fallback: переходим на главную с якорем #contact
      window.location.href = '/#contact';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupScroll();
    setupMobileMenu();
    setupModalFallback();
  });
  // Если DOMContentLoaded уже прошёл
  if (document.readyState !== 'loading') {
    setupScroll();
    setupMobileMenu();
    setupModalFallback();
  }
})();
