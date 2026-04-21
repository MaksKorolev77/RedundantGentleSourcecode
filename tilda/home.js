/* ============================================================
   УльтраКаркас — JS для главной страницы (Tilda T123)
   Вставьте содержимое этого файла в поле «JS» блока T123 Zero Block
   ============================================================ */
(function () {
  if (window._ukInitHome) return;
  window._ukInitHome = true;
  window._ukModalReady = true;

  // ============ Inline SVG icons ============
  var ICONS = {
    phone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    snow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/></svg>',
    pen: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
    hammer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>',
    paint: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect x="2" y="2" width="20" height="6" rx="2"/><rect x="4" y="14" width="16" height="8" rx="2"/><path d="M22 8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8"/><path d="M12 12v2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 6 9 17 4 12"/></svg>',
    minus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    maximize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
    key: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    checkc: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>',
    chevdown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon chev"><polyline points="6 9 12 15 18 9"/></svg>',
    chevright: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="9 18 15 12 9 6"/></svg>',
    arrowright: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    bed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
    bath: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1.06-.44H4a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5H2"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></svg>',
    gift: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
  };
  function icon(n) { return ICONS[n] || ''; }

  // ============ Helpers ============
  var qs = function (s, r) { return (r || document).querySelector(s); };
  var qsa = function (s, r) { return Array.from((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]); }); };

  // ============ Отправка в скрытую форму Tilda (#rec2114006861) ============
  function setNativeValue(el, val) {
    if (!el) return;
    var proto = Object.getPrototypeOf(el);
    var desc  = Object.getOwnPropertyDescriptor(proto, 'value');
    if (desc && desc.set) { desc.set.call(el, val); } else { el.value = val; }
    el.dispatchEvent(new Event('input',  { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.dispatchEvent(new Event('blur',   { bubbles: true }));
  }
  function submitToTilda(data, onSuccess, onError) {
    var tildaRoot = document.querySelector('#rec2114006861');
    var tildaForm = tildaRoot ? tildaRoot.querySelector('form') : null;
    if (!tildaForm) { if (onError) onError('Форма Tilda #rec2114006861 не найдена'); return; }
    function getTildaField(selectors) {
      for (var i = 0; i < selectors.length; i++) {
        var el = tildaForm.querySelector(selectors[i]);
        if (el) return el;
      }
      return null;
    }
    var fName     = getTildaField(['input[name="name"]',     'input[name="Name"]',     'input[type="text"]']);
    var fPhone    = getTildaField(['input[name="phone"]',    'input[name="Phone"]',    'input[type="tel"]']);
    var fArea     = getTildaField(['input[name="area"]',     'input[name="Area"]',     'select[name="area"]',     'select[name="Area"]']);
    var fComplect = getTildaField(['input[name="complect"]', 'input[name="Complect"]', 'select[name="complect"]', 'select[name="Complect"]']);
    var fComment  = getTildaField(['textarea[name="comment"]', 'textarea[name="Comment"]', 'input[name="comment"]', 'input[name="Comment"]']);
    if (!fName || !fPhone) { if (onError) onError('Не найдены поля name / phone в форме Tilda'); return; }
    setNativeValue(fName,  data.name  || '');
    setNativeValue(fPhone, data.phone || '');
    if (fArea)     setNativeValue(fArea,     data.area              || '');
    if (fComplect) setNativeValue(fComplect, data['package'] || data.complect || '');
    if (fComment)  setNativeValue(fComment,  data.comment           || '');
    var realSubmit = tildaForm.querySelector('button[type="submit"]') ||
                     tildaForm.querySelector('input[type="submit"]')  ||
                     tildaForm.querySelector('.t-submit');
    if (!realSubmit) { if (onError) onError('Не найдена кнопка отправки в форме Tilda'); return; }
    setTimeout(function () { realSubmit.click(); }, 100);
    if (onSuccess) setTimeout(onSuccess, 2000);
  }

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
      '<div class="field"><label>Желаемая площадь</label><select name="area"><option value="">Выберите площадь</option><option value="до 100">до 100 м²</option><option value="100-150">100–150 м²</option><option value="150-200">150–200 м²</option><option value="200-250">200–250 м²</option><option value="250+">250+ м²</option></select></div>' +
      '<div class="field"><label>Комплектация</label><select name="package"><option value="">Выберите комплектацию</option><option value="эконом">Эконом</option><option value="оптимум">Оптимум</option><option value="максимум">Максимум</option><option value="подскажите">Подскажите вы</option></select></div>' +
      '</div>' +
      '<div class="field"><label>Комментарий</label><textarea name="comment" placeholder="Опишите ваши пожелания, наличие участка и т.д."></textarea></div>' +
      '<div class="consent"><input type="checkbox" name="consent" id="modal-consent-cb" checked>' +
      '<label for="modal-consent-cb">Отправляя форму, даю согласие на обработку моих персональных данных. <a href="/privacy/" target="_blank">Политика конфиденциальности</a></label>' +
      '<div id="modal-consent-err" style="display:none;color:var(--danger,#dc2626);font-size:.85rem;margin-top:.25rem">Необходимо согласие на обработку персональных данных</div></div>' +
      '<button type="submit" class="btn btn-primary btn-lg btn-block">Получить расчёт</button>' +
      '</form></div></div></div>';
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
      var consentErr = qs('#modal-consent-err', f);
      if (consentErr) consentErr.style.display = 'none';
      if (!f.querySelector('[name="consent"]').checked) { ok = false; if (consentErr) consentErr.style.display = ''; }
      if (!ok) return;
      var fd   = new FormData(f);
      var sbtn = f.querySelector('[type="submit"]');
      if (sbtn) sbtn.disabled = true;
      submitToTilda(
        { name: fd.get('name'), phone: fd.get('phone'), area: fd.get('area'), 'package': fd.get('package'), comment: fd.get('comment') },
        function () {
          if (sbtn) sbtn.disabled = false;
          closeModal();
        },
        function (err) {
          if (sbtn) sbtn.disabled = false;
          alert('Ошибка отправки: ' + err);
        }
      );
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

  // ============ URL-адреса отдельных страниц проектов в Tilda ============
  // TODO: если вы используете другие URL-адреса страниц в Tilda — замените их здесь
  var PROJECT_URLS = {
    uyut:       '/project-uyut/',
    komfort:    '/project-komfort/',
    semeynyy:   '/project-semeynyy/',
    prostornyy: '/project-prostornyy/',
    zagorodnyy: '/project-zagorodnyy/',
    lesnoy:     '/project-lesnoy/',
  };
  function projectUrl(slug) { return PROJECT_URLS[slug] || '/project/?slug=' + esc(slug); }

  // ============ Project card HTML ============
  function projectCardHtml(p) {
    var url = projectUrl(p.slug);
    return '<article class="project-card reveal">' +
      '<a href="' + url + '" class="project-cover">' +
      '<img src="' + esc(p.cover) + '" alt="Проект дома ' + esc(p.name) + '" loading="lazy">' +
      '<span class="project-tag">' + esc(p.style) + ' · ' + esc(p.floors) + '</span>' +
      '<span class="project-price-tag">' + esc(p.priceFrom) + '</span>' +
      '</a>' +
      '<div class="project-body">' +
      '<a href="' + url + '"><h3 class="project-name">Проект «' + esc(p.name) + '»</h3></a>' +
      '<div class="project-meta">' +
      '<div>' + icon('maximize') + '<span class="label">Площадь</span><span class="value">' + esc(p.area) + ' м²</span></div>' +
      '<div>' + icon('bed') + '<span class="label">Спален</span><span class="value">' + p.bedrooms + '</span></div>' +
      '<div>' + icon('bath') + '<span class="label">Санузлов</span><span class="value">' + p.bathrooms + '</span></div>' +
      '</div>' +
      '<div class="project-actions">' +
      '<a href="' + url + '" class="btn btn-outline">Подробнее о проекте ' + icon('arrowright') + '</a>' +
      '<button class="btn btn-primary" data-modal-open data-modal-title="Расчёт проекта «' + esc(p.name) + '»" data-modal-desc="Оставьте свои контакты, и мы свяжемся с вами для детального расчёта проекта «' + esc(p.name) + '» (' + esc(p.area) + ' м²)." data-default-comment="Интересует проект «' + esc(p.name) + '» (' + esc(p.area) + ' м²).">Рассчитать этот проект</button>' +
      '</div></div></article>';
  }

  // ============ Home page init ============
  function renderHome() {
    var grid = qs('#home-projects-grid');
    if (grid) grid.innerHTML = PROJECTS.slice(0, 6).map(projectCardHtml).join('');

    qsa('#packages-tabs .tab').forEach(function (t) {
      t.addEventListener('click', function () {
        qsa('#packages-tabs .tab').forEach(function (x) { x.classList.remove('is-active'); });
        qsa('#packages-panels .tabpanel').forEach(function (x) { x.classList.remove('is-active'); });
        t.classList.add('is-active');
        qs('#panel-' + t.dataset.tab).classList.add('is-active');
      });
    });

    qsa('.faq-item .faq-q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.faq-item');
        var open = item.classList.contains('open');
        qsa('.faq-item.open').forEach(function (x) { x.classList.remove('open'); });
        if (!open) item.classList.add('open');
      });
    });

    var PRICES = { econom: 40000, optimum: 50000, max: 60000 };
    var NAMES = { econom: 'Эконом', optimum: 'Оптимум', max: 'Максимум' };
    var KEY = { econom: 'эконом', optimum: 'оптимум', max: 'максимум' };
    var area = 100, pkg = 'optimum';
    function update() {
      qs('#calc-area-v').textContent = area + ' м²';
      var p = area * PRICES[pkg];
      qs('#calc-price').textContent = '~ ' + new Intl.NumberFormat('ru-RU').format(p) + ' ₽';
      qs('#calc-perm').textContent = PRICES[pkg].toLocaleString('ru-RU') + ' ₽ за квадратный метр';
      qs('#calc-cta').dataset.modalDesc = 'Вы выбрали комплектацию «' + NAMES[pkg] + '» на ' + area + ' м². Оставьте контакты для уточнения деталей.';
      qs('#calc-cta').dataset.defaultPackage = KEY[pkg];
      qs('#calc-cta').dataset.defaultComment = 'Интересует дом площадью ' + area + ' м².';
    }
    var calcArea = qs('#calc-area');
    if (calcArea) {
      calcArea.addEventListener('input', function (e) { area = +e.target.value; update(); });
      qsa('#calc-pkg button').forEach(function (b) {
        b.addEventListener('click', function () {
          qsa('#calc-pkg button').forEach(function (x) { x.classList.remove('is-active'); });
          b.classList.add('is-active'); pkg = b.dataset.pkg; update();
        });
      });
      update();
    }
  }

  // ============ Compare table ============
  var COMPARE_FEATURES = [
    { section: 'Основание и пол' },
    { name: 'Фундамент', econom: 'Ж/б забивные сваи 150×150×3000', optimum: 'Ж/б забивные сваи 150×150×3000', max: 'Ж/б забивные сваи 150×150×3000' },
    { name: 'Нижняя обвязка', econom: 'Сухая строганная доска 150×150 мм', optimum: 'Сухая строганная доска 150×150 мм', max: 'Сухая строганная доска 150×150 мм' },
    { name: 'Лаги пола', econom: 'Сухая доска 45×190 мм', optimum: 'Сухая доска 45×190 мм', max: 'Сухая доска 45×190 мм' },
    { name: 'Утепление пола', econom: 'Каменная вата 200 мм', optimum: 'Каменная вата 200 мм', max: 'Каменная вата 250 мм', h: 'max' },
    { name: 'Черный пол', econom: 'Обрезная доска 20×100 мм', optimum: 'Обрезная доска 20×100 мм', max: 'Обрезная доска 20×100 мм' },
    { name: 'Покрытие пола', econom: false, optimum: 'Фанера 18 мм', max: 'Фанера 18 мм', h: 'optimum' },
    { section: 'Каркас и отделка' },
    { name: 'Каркас стен', econom: 'Доска 45×145 мм', optimum: 'Доска 45×145 мм + брусок 40×50 мм', max: 'Доска 45×190 мм + брусок 40×50 мм', h: 'all' },
    { name: 'Утепление стен', econom: 'Каменная вата 150 мм', optimum: 'Каменная вата 150+50=200 мм', max: 'Каменная вата 200+50=250 мм', h: 'all' },
    { name: 'Утепление перегородок', econom: 'Каменная вата 100 мм', optimum: 'Каменная вата 100 мм', max: 'Каменная вата 100 мм' },
    { name: 'Внутренняя отделка', econom: false, optimum: 'Имитация бруса', max: 'OSB + Гипсокартон', h: 'optimum' },
    { name: 'Наружная отделка', econom: 'OSB 12 мм', optimum: 'Имитация бруса', max: 'Фиброцементный сайдинг', h: 'all' },
    { name: 'Отделка потолка', econom: false, optimum: 'OSB 9 мм', max: 'OSB 9 мм', h: 'optimum' },
    { name: 'Утепление потолка', econom: 'Каменная вата 200 мм', optimum: 'Каменная вата 200 мм', max: 'Каменная вата 250 мм', h: 'max' },
    { name: 'Окна', econom: 'Пластиковые ПВХ 70 Рехау', optimum: 'Пластиковые ПВХ 70 Рехау', max: 'Пластиковые ПВХ 70 Рехау' },
    { name: 'Дверь', econom: 'Металлическая с терморазрывом 100 мм', optimum: 'Металлическая с терморазрывом 100 мм', max: 'Металлическая с терморазрывом 100 мм' },
    { section: 'Кровля' },
    { name: 'Стропило', econom: 'Сухая доска 45×190 мм', optimum: 'Сухая доска 45×190 мм', max: 'Сухая доска 45×190 мм' },
    { name: 'Кровля', econom: 'Металлочерепица 0.5 мм', optimum: 'Металлочерепица 0.5 мм', max: 'Металлочерепица 0.5 мм' },
    { name: 'Утепление кровли', econom: 'Каменная вата 200 мм', optimum: 'Каменная вата 200 мм', max: 'Каменная вата 250 мм', h: 'max' },
    { name: 'Водостоки', econom: false, optimum: true, max: true, h: 'optimum' },
    { name: 'Снегозадержатели', econom: false, optimum: true, max: true, h: 'optimum' },
    { name: 'Подшив свесов', econom: false, optimum: 'Пластиковые софиты', max: 'Пластиковые софиты', h: 'optimum' },
    { section: 'Инженерные системы' },
    { name: 'Вентиляция', econom: true, optimum: true, max: true, h: 'all' },
    { name: 'Электрика', econom: 'Труба ПНД 32 мм (закладная)', optimum: 'Труба ПНД 32 мм (закладная)', max: 'Труба ПНД 32 мм (закладная)' },
    { name: 'Водоснабжение', econom: 'Труба ПНД 50 мм (закладная)', optimum: 'Труба ПНД 50 мм (закладная)', max: 'Труба ПНД 50 мм (закладная)' },
    { name: 'Канализация', econom: 'Труба ПВХ 110 мм', optimum: 'Труба ПВХ 110 мм', max: 'Труба ПВХ 110 мм' },
  ];
  function cellHtml(val, isPrimary) {
    if (val === false) return '<span style="color:var(--muted-fg);opacity:.5">' + icon('minus') + '</span>';
    if (val === true) return '<span style="color:var(--primary)">' + icon('check') + '</span>';
    return '<span' + (isPrimary ? ' style="font-weight:600;color:var(--primary)"' : '') + '>' + esc(val) + '</span>';
  }
  function buildCompareTable() {
    var tbody = qs('#compare-tbody');
    if (!tbody) return;
    tbody.innerHTML = COMPARE_FEATURES.map(function (f) {
      if (f.section) return '<tr class="compare-section-row"><td colspan="4">' + esc(f.section) + '</td></tr>';
      var eP = f.h === 'all', oP = f.h === 'optimum' || f.h === 'all', mP = f.h === 'max' || f.h === 'all';
      return '<tr><td style="font-weight:500">' + esc(f.name) + '</td><td>' + cellHtml(f.econom, eP) + '</td><td class="optimum-col">' + cellHtml(f.optimum, oP) + '</td><td>' + cellHtml(f.max, mP) + '</td></tr>';
    }).join('');

    var btn = qs('#compare-toggle'), wrap = qs('#compare-wrap');
    if (!btn || !wrap) return;
    btn.addEventListener('click', function () {
      var open = wrap.classList.toggle('is-open');
      btn.classList.toggle('is-open', open);
      btn.childNodes[0].textContent = open ? 'Скрыть подробное сравнение' : 'Показать подробную таблицу сравнения';
    });
  }

  // ============ Contact form ============
  function setupContactForm() {
    var form = qs('#contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      qsa('.field', form).forEach(function (fld) {
        var inp = fld.querySelector('input,select,textarea');
        if (!inp) return;
        fld.classList.remove('has-err');
        if (inp.hasAttribute('required')) {
          var v = inp.value.trim();
          if (!v || (inp.minLength && v.length < inp.minLength)) { fld.classList.add('has-err'); ok = false; }
        }
      });
      var consentErr = qs('#contact-consent-err');
      if (consentErr) consentErr.style.display = 'none';
      if (!form.querySelector('[name="consent"]').checked) { ok = false; if (consentErr) consentErr.style.display = ''; }
      if (!ok) return;
      var fd   = new FormData(form);
      var sbtn = form.querySelector('[type="submit"]');
      if (sbtn) sbtn.disabled = true;
      submitToTilda(
        { name: fd.get('name'), phone: fd.get('phone'), area: fd.get('area'), 'package': fd.get('package'), comment: fd.get('comment') },
        function () {
          if (sbtn) sbtn.disabled = false;
          form.reset();
        },
        function (err) {
          if (sbtn) sbtn.disabled = false;
          alert('Ошибка отправки: ' + err);
        }
      );
    });
  }

  // ============ Init ============
  function init() {
    buildModal();
    renderHome();
    buildCompareTable();
    setupContactForm();
    setupReveal();
    qsa('[data-icon]').forEach(function (n) { n.innerHTML = icon(n.dataset.icon); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
