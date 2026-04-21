/* ============================================================
   УльтраКаркас — JS для страницы «Проекты» (Tilda T123)
   Вставьте содержимое этого файла в поле «JS» блока T123 Zero Block
   ============================================================ */
(function () {
  if (window._ukInitProjects) return;
  window._ukInitProjects = true;

  // ============ Inline SVG icons ============
  var ICONS = {
    x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    pen: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    maximize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 6 9 17 4 12"/></svg>',
    checkc: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>',
    chevright: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="9 18 15 12 9 6"/></svg>',
    arrowright: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    bed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
    bath: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1.06-.44H4a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5H2"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></svg>',
  };
  function icon(n) { return ICONS[n] || ''; }

  // ============ Helpers ============
  var qs = function (s, r) { return (r || document).querySelector(s); };
  var qsa = function (s, r) { return Array.from((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]); }); };

  // ============ Projects data ============
  var PROJECTS = [
    { slug:'uyut', name:'Уют', priceFrom:'от 4 808 000 ₽', area:'120.2', bedrooms:3, bathrooms:1, floors:'1 этаж', style:'Скандинавский', cover:'https://static.tildacdn.com/tild3935-6232-4064-a130-313330313561/dg120.png' },
    { slug:'komfort', name:'Комфорт', priceFrom:'от 4 520 000 ₽', area:'113', bedrooms:4, bathrooms:2, floors:'2 этажа', style:'Скандинавский', cover:'https://static.tildacdn.com/tild6466-6562-4433-a238-633761383566/dky113.png' },
    { slug:'semeynyy', name:'Семейный', priceFrom:'от 4 328 000 ₽', area:'108.2', bedrooms:3, bathrooms:1, floors:'1 этаж', style:'Скандинавский', cover:'https://static.tildacdn.com/tild3762-6131-4638-b735-643932663339/dg70.png' },
    { slug:'prostornyy', name:'Просторный', priceFrom:'от 7 756 000 ₽', area:'193.9', bedrooms:5, bathrooms:2, floors:'2 этажа', style:'Скандинавский', cover:'https://static.tildacdn.com/tild6536-3665-4939-a462-623365336535/dg130.png' },
    { slug:'zagorodnyy', name:'Загородный', priceFrom:'от 8 800 000 ₽', area:'220', bedrooms:3, bathrooms:2, floors:'1 этаж', style:'Скандинавский', cover:'https://static.tildacdn.com/tild3538-6463-4463-a163-633161303832/dg50.png' },
    { slug:'lesnoy', name:'Лесной', priceFrom:'от 3 168 000 ₽', area:'79.2', bedrooms:2, bathrooms:1, floors:'1 этаж', style:'Барнхаус', cover:'https://static.tildacdn.com/tild6261-3430-4164-a366-386361623130/80.png' },
  ];

  // ============ Modal ============
  function openModal(opts) {
    opts = opts || {};
    var overlay = qs('#modal');
    qs('#modal-title').textContent = opts.title || 'Оставить заявку';
    qs('#modal-desc').textContent = opts.desc || '';
    var form = qs('#lead-form');
    form.reset();
    form.querySelector('[name="consent"]').checked = true;
    if (opts.defaultPackage) form.querySelector('[name="package"]').value = opts.defaultPackage;
    if (opts.defaultComment) form.querySelector('[name="comment"]').value = opts.defaultComment;
    qsa('.field', form).forEach(function (f) { f.classList.remove('has-err'); });
    qs('#lead-form-wrap').style.display = '';
    qs('#lead-success').style.display = 'none';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    qs('#modal').classList.remove('is-open');
    document.body.style.overflow = '';
  }
  function buildModal() {
    var html = '<div class="modal" id="modal" role="dialog" aria-modal="true">' +
      '<div class="modal-overlay" data-modal-close></div>' +
      '<div class="modal-card">' +
      '<button class="modal-close" data-modal-close aria-label="Закрыть">' + icon('x') + '</button>' +
      '<h3 id="modal-title"></h3>' +
      '<p class="desc" id="modal-desc"></p>' +
      '<div id="lead-form-wrap">' +
      '<form id="lead-form" class="lead-form" novalidate>' +
      '<div class="lead-row">' +
      '<div class="field"><label>Имя*</label><input name="name" placeholder="Иван Иванов" required minlength="2"><div class="err">Введите ваше имя</div></div>' +
      '<div class="field"><label>Телефон*</label><input name="phone" type="tel" placeholder="+7 (999) 000-00-00" required minlength="10"><div class="err">Введите корректный телефон</div></div>' +
      '</div>' +
      '<div class="lead-row">' +
      '<div class="field"><label>Желаемая площадь*</label><select name="area" required><option value="">Выберите площадь</option><option value="до 100">до 100 м²</option><option value="100-150">100–150 м²</option><option value="150-200">150–200 м²</option><option value="200-250">200–250 м²</option><option value="250+">250+ м²</option></select><div class="err">Выберите желаемую площадь</div></div>' +
      '<div class="field"><label>Комплектация</label><select name="package"><option value="">Выберите комплектацию</option><option value="эконом">Эконом</option><option value="оптимум">Оптимум</option><option value="максимум">Максимум</option><option value="подскажите">Подскажите вы</option></select></div>' +
      '</div>' +
      '<div class="field"><label>Комментарий</label><textarea name="comment" placeholder="Опишите ваши пожелания, наличие участка и т.д."></textarea></div>' +
      '<div class="consent"><input type="checkbox" name="consent" id="modal-consent-cb" checked>' +
      '<label for="modal-consent-cb">Отправляя форму, даю согласие на обработку моих персональных данных. <a href="/privacy/" target="_blank">Политика конфиденциальности</a></label></div>' +
      '<button type="submit" class="btn btn-primary btn-lg btn-block">Получить расчёт</button>' +
      '</form></div>' +
      '<div class="lead-success" id="lead-success" style="display:none">' +
      '<div class="circle">' + icon('checkc') + '</div>' +
      '<h3>Заявка отправлена!</h3><p>Менеджер свяжется с вами в течение рабочего дня.</p>' +
      '</div></div></div>';
    qs('#modal-mount').innerHTML = html;

    qs('#modal').addEventListener('click', function (e) {
      if (e.target.closest('[data-modal-close]')) closeModal();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    qs('#lead-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.currentTarget, ok = true;
      qsa('.field', f).forEach(function (fld) {
        var inp = fld.querySelector('input,select,textarea');
        if (!inp) return;
        fld.classList.remove('has-err');
        if (inp.hasAttribute('required')) {
          var v = inp.value.trim();
          if (!v || (inp.minLength && v.length < inp.minLength)) { fld.classList.add('has-err'); ok = false; }
        }
      });
      if (!f.querySelector('[name="consent"]').checked) { ok = false; alert('Необходимо согласие на обработку данных'); }
      if (!ok) return;
      console.log('Form submitted:', Object.fromEntries(new FormData(f).entries()));
      qs('#lead-form-wrap').style.display = 'none';
      qs('#lead-success').style.display = '';
    });
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-modal-open]');
      if (!t) return;
      e.preventDefault();
      openModal({ title: t.dataset.modalTitle, desc: t.dataset.modalDesc, defaultPackage: t.dataset.defaultPackage, defaultComment: t.dataset.defaultComment });
    });
  }

  // ============ Reveal on scroll ============
  function setupReveal() {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -50px 0px' });
    qsa('.reveal').forEach(function (el) { obs.observe(el); });
  }

  // ============ Project card HTML ============
  function projectCardHtml(p) {
    return '<article class="project-card reveal">' +
      '<a href="/project/?slug=' + esc(p.slug) + '" class="project-cover">' +
      '<img src="' + esc(p.cover) + '" alt="Проект дома ' + esc(p.name) + '" loading="lazy">' +
      '<span class="project-tag">' + esc(p.style) + ' · ' + esc(p.floors) + '</span>' +
      '<span class="project-price-tag">' + esc(p.priceFrom) + '</span>' +
      '</a>' +
      '<div class="project-body">' +
      '<a href="/project/?slug=' + esc(p.slug) + '"><h3 class="project-name">Проект «' + esc(p.name) + '»</h3></a>' +
      '<div class="project-meta">' +
      '<div>' + icon('maximize') + '<span class="label">Площадь</span><span class="value">' + esc(p.area) + ' м²</span></div>' +
      '<div>' + icon('bed') + '<span class="label">Спален</span><span class="value">' + p.bedrooms + '</span></div>' +
      '<div>' + icon('bath') + '<span class="label">Санузлов</span><span class="value">' + p.bathrooms + '</span></div>' +
      '</div>' +
      '<div class="project-actions">' +
      '<a href="/project/?slug=' + esc(p.slug) + '" class="btn btn-outline">Подробнее о проекте ' + icon('arrowright') + '</a>' +
      '<button class="btn btn-primary" data-modal-open data-modal-title="Расчёт проекта «' + esc(p.name) + '»" data-modal-desc="Оставьте свои контакты, и мы свяжемся с вами для детального расчёта проекта «' + esc(p.name) + '» (' + esc(p.area) + ' м²)." data-default-comment="Интересует проект «' + esc(p.name) + '» (' + esc(p.area) + ' м²).">Рассчитать этот проект</button>' +
      '</div></div></article>';
  }

  // ============ Init ============
  function init() {
    buildModal();
    var grid = qs('#projects-list');
    if (grid) grid.innerHTML = PROJECTS.map(projectCardHtml).join('');
    setupReveal();
    qsa('[data-icon]').forEach(function (n) { n.innerHTML = icon(n.dataset.icon); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
