// ============ Inline SVG icons (lucide-style) ============
const ICONS = {
  phone:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  menu:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  x:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  award:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  home:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  shield:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  snow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/></svg>',
  pen:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  hammer:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>',
  paint:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect x="2" y="2" width="20" height="6" rx="2"/><rect x="4" y="14" width="16" height="8" rx="2"/><path d="M22 8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8"/><path d="M12 12v2"/></svg>',
  check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 6 9 17 4 12"/></svg>',
  minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  zap:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  maximize:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
  key:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>',
  clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  checkc:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>',
  chevdown:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon chev"><polyline points="6 9 12 15 18 9"/></svg>',
  chevright:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="9 18 15 12 9 6"/></svg>',
  arrowright:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  bed:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  bath:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1.06-.44H4a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5H2"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></svg>',
  mail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
  pin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  thermo:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M12 9a4 4 0 0 0-2 7.5"/><path d="M12 3v2"/><path d="m6.6 18.4-1.4 1.4"/><path d="M20 4h-5a2 2 0 0 0-2 2v9.5a4 4 0 1 0 4 0V6a2 2 0 0 0-2-2"/></svg>',
  gift:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
};
function icon(n){return ICONS[n]||""}

// ============ Helpers ============
const qs=(s,r=document)=>r.querySelector(s);
const qsa=(s,r=document)=>Array.from(r.querySelectorAll(s));
const el=(html)=>{const t=document.createElement('template');t.innerHTML=html.trim();return t.content.firstChild};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

// ============ Header build ============
function renderHeader(inner=false){
  const html = `
  <header class="header${inner?' is-inner':''}" id="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <span class="logo-mark">УК</span>
        <span class="logo-text">УльтраКаркас</span>
      </a>
      <nav class="nav-desktop">
        <a href="projects.html">Проекты</a>
        <a href="index.html#packages">Комплектации</a>
        <a href="index.html#about">О нас</a>
        <a href="index.html#contact">Контакты</a>
      </nav>
      <div class="header-actions">
        <a href="tel:+74993909789" class="phone-link">${icon('phone')}+7 (499) 390-97-89</a>
        <button class="btn btn-primary" data-modal-open data-modal-title="Оставить заявку на расчёт" data-modal-desc="Заполните форму ниже, и мы подготовим для вас предварительный расчёт стоимости.">Получить расчёт</button>
      </div>
      <div class="header-mobile">
        <a href="tel:+74993909789" class="phone-pill" aria-label="Позвонить">${icon('phone')}</a>
        <button class="menu-btn" id="menu-toggle" aria-label="Меню">${icon('menu')}</button>
      </div>
    </div>
  </header>
  <div class="mobile-menu" id="mobile-menu">
    <nav>
      <a href="projects.html">Проекты</a>
      <a href="index.html#packages">Комплектации</a>
      <a href="index.html#about">О нас</a>
      <a href="index.html#contact">Контакты</a>
    </nav>
    <div class="footer-area">
      <a href="tel:+74993909789" class="phone-link" style="justify-content:center;font-size:1.25rem">${icon('phone')}+7 (499) 390-97-89</a>
      <button class="btn btn-primary btn-lg btn-block" data-modal-open data-modal-title="Оставить заявку" data-modal-desc="Заполните форму, и мы свяжемся с вами.">Получить расчёт</button>
    </div>
  </div>`;
  document.getElementById('header-mount').innerHTML = html;

  const header = qs('#site-header');
  const onScroll = () => {
    if (inner) return;
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  const menuBtn = qs('#menu-toggle');
  const menu = qs('#mobile-menu');
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuBtn.innerHTML = open ? icon('x') : icon('menu');
  });
  qsa('a', menu).forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open'); menuBtn.innerHTML = icon('menu');
  }));
}

// ============ Footer build ============
function renderFooter(){
  const html = `
  <footer class="footer" id="contact">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <span class="logo-mark">УК</span>
            <span class="logo-text" style="font-size:1.5rem">УльтраКаркас</span>
          </a>
          <p>Строительство надежных и энергоэффективных каркасных домов в Москве и Московской области.</p>
        </div>
        <div>
          <h4>Навигация</h4>
          <ul class="footer-nav">
            <li><a href="projects.html">Проекты домов</a></li>
            <li><a href="index.html#packages">Комплектации и цены</a></li>
            <li><a href="index.html#calculator">Калькулятор стоимости</a></li>
            <li><a href="privacy.html">Политика конфиденциальности</a></li>
          </ul>
        </div>
        <div>
          <h4>Контакты</h4>
          <div class="contact-grid">
            <a href="tel:+74993909789" class="contact-item">
              <div class="icon-wrap">${icon('phone')}</div>
              <div><div class="big">+7 (499) 390-97-89</div><div class="small">Звонок бесплатный</div></div>
            </a>
            <a href="mailto:info@ultrakarkas.ru" class="contact-item">
              <div class="icon-wrap">${icon('mail')}</div>
              <div style="padding-top:.4rem"><div class="title">info@ultrakarkas.ru</div></div>
            </a>
            <div class="contact-item">
              <div class="icon-wrap">${icon('pin')}</div>
              <div><div class="title">Офис продаж:</div><div class="small">Московская обл., г. Одинцово,<br>р.п. Заречье, ул. Торговая, 2С</div></div>
            </div>
            <div class="contact-item">
              <div class="icon-wrap">${icon('clock')}</div>
              <div><div class="title">Режим работы:</div><div class="small">Ежедневно: 10:00 – 18:00</div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© ${new Date().getFullYear()} ООО «УльтраКаркас». Все права защищены. Не является публичной офертой.</div>
        <a href="privacy.html">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>`;
  document.getElementById('footer-mount').innerHTML = html;
}

// ============ Modal / LeadForm ============
function openModal({title, desc, defaultPackage, defaultComment}={}){
  const overlay = qs('#modal');
  qs('#modal-title').textContent = title || 'Оставить заявку';
  qs('#modal-desc').textContent = desc || '';
  // Reset form
  const form = qs('#lead-form');
  form.reset();
  form.querySelector('[name="consent"]').checked = true;
  if (defaultPackage) form.querySelector('[name="package"]').value = defaultPackage;
  if (defaultComment) form.querySelector('[name="comment"]').value = defaultComment;
  qsa('.field', form).forEach(f => f.classList.remove('has-err'));
  qs('#lead-form-wrap').style.display='';
  qs('#lead-success').style.display='none';
  overlay.classList.add('is-open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  qs('#modal').classList.remove('is-open');
  document.body.style.overflow='';
}
function buildModal(){
  const html = `
  <div class="modal" id="modal" role="dialog" aria-modal="true">
    <div class="modal-overlay" data-modal-close></div>
    <div class="modal-card">
      <button class="modal-close" data-modal-close aria-label="Закрыть">${icon('x')}</button>
      <h3 id="modal-title"></h3>
      <p class="desc" id="modal-desc"></p>
      <div id="lead-form-wrap">
        <form id="lead-form" class="lead-form" novalidate>
          <div class="lead-row">
            <div class="field"><label>Имя*</label><input name="name" placeholder="Иван Иванов" required minlength="2"><div class="err">Введите ваше имя</div></div>
            <div class="field"><label>Телефон*</label><input name="phone" type="tel" placeholder="+7 (999) 000-00-00" required minlength="10"><div class="err">Введите корректный телефон</div></div>
          </div>
          <div class="lead-row">
            <div class="field"><label>Желаемая площадь*</label>
              <select name="area" required>
                <option value="">Выберите площадь</option>
                <option value="до 100">до 100 м²</option>
                <option value="100-150">100–150 м²</option>
                <option value="150-200">150–200 м²</option>
                <option value="200-250">200–250 м²</option>
                <option value="250+">250+ м²</option>
              </select><div class="err">Выберите желаемую площадь</div></div>
            <div class="field"><label>Комплектация</label>
              <select name="package">
                <option value="">Выберите комплектацию</option>
                <option value="эконом">Эконом</option>
                <option value="оптимум">Оптимум</option>
                <option value="максимум">Максимум</option>
                <option value="подскажите">Подскажите вы</option>
              </select></div>
          </div>
          <div class="field"><label>Комментарий</label><textarea name="comment" placeholder="Опишите ваши пожелания, наличие участка и т.д."></textarea></div>
          <div class="consent">
            <input type="checkbox" name="consent" id="consent-cb" checked>
            <label for="consent-cb">Отправляя форму, даю согласие на обработку моих персональных данных. <a href="privacy.html" target="_blank">Политика конфиденциальности</a></label>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Получить расчёт</button>
        </form>
      </div>
      <div class="lead-success" id="lead-success" style="display:none">
        <div class="circle">${icon('checkc')}</div>
        <h3>Заявка отправлена!</h3>
        <p>Менеджер свяжется с вами в течение рабочего дня.</p>
      </div>
    </div>
  </div>`;
  document.getElementById('modal-mount').innerHTML = html;

  qs('#modal').addEventListener('click', e => {
    if (e.target.matches('[data-modal-close]')) closeModal();
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

  qs('#lead-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.currentTarget;
    let ok = true;
    qsa('.field', f).forEach(fld => {
      const inp = fld.querySelector('input,select,textarea');
      if (!inp) return;
      fld.classList.remove('has-err');
      if (inp.hasAttribute('required')) {
        const v = inp.value.trim();
        if (!v || (inp.minLength && v.length < inp.minLength)) { fld.classList.add('has-err'); ok=false; }
      }
    });
    if (!f.querySelector('[name="consent"]').checked) { ok=false; alert('Необходимо согласие на обработку данных'); }
    if (!ok) return;
    console.log('Form submitted:', Object.fromEntries(new FormData(f).entries()));
    qs('#lead-form-wrap').style.display='none';
    qs('#lead-success').style.display='';
  });

  // Trigger delegation
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-modal-open]');
    if (!t) return;
    e.preventDefault();
    openModal({
      title: t.dataset.modalTitle,
      desc: t.dataset.modalDesc,
      defaultPackage: t.dataset.defaultPackage,
      defaultComment: t.dataset.defaultComment,
    });
  });
}

// ============ Reveal on scroll ============
function setupReveal(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -50px 0px' });
  qsa('.reveal').forEach(el => obs.observe(el));
}

// ============ Page-specific renderers ============
// --- Project card (used on home + projects page) ---
function projectCardHtml(p) {
  return `
  <article class="project-card reveal">
    <a href="project.html?slug=${esc(p.slug)}" class="project-cover">
      <img src="${esc(p.cover)}" alt="Проект дома ${esc(p.name)}" loading="lazy">
      <span class="project-tag">${esc(p.style)} · ${esc(p.floors)}</span>
      <span class="project-price-tag">${esc(p.priceFrom)}</span>
    </a>
    <div class="project-body">
      <a href="project.html?slug=${esc(p.slug)}"><h3 class="project-name">Проект «${esc(p.name)}»</h3></a>
      <div class="project-meta">
        <div>${icon('maximize')}<span class="label">Площадь</span><span class="value">${esc(p.area)} м²</span></div>
        <div>${icon('bed')}<span class="label">Спален</span><span class="value">${p.bedrooms}</span></div>
        <div>${icon('bath')}<span class="label">Санузлов</span><span class="value">${p.bathrooms}</span></div>
      </div>
      <div class="project-actions">
        <a href="project.html?slug=${esc(p.slug)}" class="btn btn-outline">Подробнее о проекте ${icon('arrowright')}</a>
        <button class="btn btn-primary" data-modal-open data-modal-title="Расчёт проекта «${esc(p.name)}»" data-modal-desc="Оставьте свои контакты, и мы свяжемся с вами для детального расчёта проекта «${esc(p.name)}» (${esc(p.area)} м²)." data-default-comment="Интересует проект «${esc(p.name)}» (${esc(p.area)} м²).">Рассчитать этот проект</button>
      </div>
    </div>
  </article>`;
}

// --- HOME page ---
function renderHome(){
  const projects = window.PROJECTS.slice(0,6);
  const grid = qs('#home-projects-grid');
  if (grid) grid.innerHTML = projects.map(projectCardHtml).join('');

  // Packages tabs
  qsa('#packages-tabs .tab').forEach(t => t.addEventListener('click', () => {
    qsa('#packages-tabs .tab').forEach(x => x.classList.remove('is-active'));
    qsa('#packages-panels .tabpanel').forEach(x => x.classList.remove('is-active'));
    t.classList.add('is-active');
    qs('#panel-'+t.dataset.tab).classList.add('is-active');
  }));

  // FAQ
  qsa('.faq-item .faq-q').forEach(q => q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const open = item.classList.contains('open');
    qsa('.faq-item.open').forEach(x => x.classList.remove('open'));
    if (!open) item.classList.add('open');
  }));

  // Calculator
  const PRICES = {econom:40000, optimum:50000, max:60000};
  const NAMES = {econom:'Эконом', optimum:'Оптимум', max:'Максимум'};
  const KEY = {econom:'эконом', optimum:'оптимум', max:'максимум'};
  let area = 100, pkg = 'optimum';
  function update(){
    qs('#calc-area-v').textContent = area + ' м²';
    const p = area * PRICES[pkg];
    qs('#calc-price').textContent = '~ ' + new Intl.NumberFormat('ru-RU').format(p) + ' ₽';
    qs('#calc-perm').textContent = PRICES[pkg].toLocaleString('ru-RU') + ' ₽ за квадратный метр';
    qs('#calc-cta').dataset.modalDesc = `Вы выбрали комплектацию «${NAMES[pkg]}» на ${area} м². Оставьте контакты для уточнения деталей.`;
    qs('#calc-cta').dataset.defaultPackage = KEY[pkg];
    qs('#calc-cta').dataset.defaultComment = `Интересует дом площадью ${area} м².`;
  }
  qs('#calc-area')?.addEventListener('input', e => { area = +e.target.value; update(); });
  qsa('#calc-pkg button').forEach(b => b.addEventListener('click', () => {
    qsa('#calc-pkg button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); pkg = b.dataset.pkg; update();
  }));
  if (qs('#calc-area')) update();
}

// --- PROJECTS LIST page ---
function renderProjectsList(){
  const grid = qs('#projects-list');
  if (!grid) return;
  grid.innerHTML = window.PROJECTS.map(projectCardHtml).join('');
}

// --- PROJECT DETAIL page ---
function renderProjectDetail(){
  const root = qs('#project-detail');
  if (!root) return;
  const slug = new URLSearchParams(location.search).get('slug');
  const p = slug ? window.getProject(slug) : null;
  if (!p) {
    root.innerHTML = `<div class="container" style="padding:6rem 1rem;text-align:center"><h1 class="page-title">Проект не найден</h1><p class="page-lead" style="margin:0 auto">Похоже, такого проекта нет. <a href="projects.html" style="color:var(--primary);text-decoration:underline">Все проекты</a></p></div>`;
    return;
  }
  document.title = `Проект «${p.name}» — ${p.area} м² — УльтраКаркас`;

  const otherProjects = window.PROJECTS.filter(x => x.slug !== p.slug).slice(0, 3);
  // Group rooms by floor
  const floorGroups = {};
  p.rooms.forEach(r => { const f=r.floor||''; (floorGroups[f]=floorGroups[f]||[]).push(r); });

  const thumbs = p.gallery.slice(0,5).map((src,i) => `
    <button data-idx="${i}"><img src="${esc(src)}" alt="фото ${i+1}" loading="lazy">
    ${i===4 && p.gallery.length>5 ? `<div class="more-overlay">+${p.gallery.length-5}</div>`:''}
    </button>`).join('');

  const trustItems = [
    {icon:'hammer', label:'Прочный несущий каркас'},
    {icon:'shield', label:'10 лет гарантии'},
    {icon:'thermo', label:'Энергосберегающий дом'},
    {icon:'checkc', label:'Контроль качества на каждом этапе'},
  ].map(it => `<div><div class="ico">${icon(it.icon)}</div><span>${it.label}</span></div>`).join('');

  const pkgList = p.packages.map(pk => `
    <button data-pkg="${pk.key}" class="${pk.key==='optimum'?'is-active':''}">
      <span class="nm">${esc(pk.name)}</span><span class="pr">${esc(pk.price)}</span>
    </button>`).join('');

  const specsHtml = pk => window.PACKAGE_SPECS.map(row => {
    if (row.section) return `<div class="specs-section">${esc(row.section)}</div>`;
    const v = row[pk.key];
    return `<div class="specs-row"><div class="lbl">${esc(row.label)}</div><div class="val">${esc(v)}</div></div>`;
  }).join('');

  const pkgPanel = pk => `
    <div class="detail-pkg-head">
      <div><div class="nm">${esc(pk.name)}</div><div class="tg">${esc(pk.tagline)}</div></div>
      <div class="pr">${esc(pk.price)}</div>
    </div>
    <div class="specs-wrap">${specsHtml(pk)}</div>
    <div style="margin-top:1.5rem;font-size:.75rem;color:var(--muted-fg);font-style:italic">Разводка электрики, водоснабжения, отопления и канализации рассчитывается индивидуально.</div>
    <div style="margin-top:1.5rem">
      <button class="btn btn-primary btn-lg btn-block" data-modal-open
        data-modal-title="Заявка на проект «${esc(p.name)}»"
        data-modal-desc="Комплектация ${esc(pk.name)}, ${esc(pk.price)}."
        data-default-package="${pk.key==='econom'?'эконом':pk.key==='optimum'?'оптимум':'максимум'}"
        data-default-comment="Проект «${esc(p.name)}» (${esc(p.area)} м²), комплектация ${esc(pk.name)}.">
        Заказать «${esc(p.name)}» в комплектации ${esc(pk.name)}
      </button>
    </div>`;

  root.innerHTML = `
    <div class="container">
      <nav class="crumbs">
        <a href="index.html">Главная</a>${icon('chevright')}
        <a href="projects.html">Проекты</a>${icon('chevright')}
        <span class="current">Проект «${esc(p.name)}»</span>
      </nav>
    </div>
    <section class="container" style="padding-bottom:4rem">
      <div class="detail-grid">
        <div>
          <button class="detail-cover" data-idx="0">
            <img src="${esc(p.gallery[0])}" alt="Проект «${esc(p.name)}» — фото 1">
            <span class="tag">${esc(p.style)} · ${esc(p.floors)}</span>
            <span class="open-tag">Открыть фото</span>
          </button>
          <div class="detail-thumbs">${thumbs}</div>
        </div>
        <div>
          <div class="detail-price">${esc(p.priceFrom)}</div>
          <h1 class="detail-title">Проект «${esc(p.name)}»</h1>
          <div class="detail-meta">
            <div>${icon('maximize')}<span class="num">${esc(p.area)}</span><span class="lbl">м²</span></div>
            <div>${icon('bed')}<span class="num">${p.bedrooms}</span><span class="lbl">спальни</span></div>
            <div>${icon('bath')}<span class="num">${p.bathrooms}</span><span class="lbl">санузел</span></div>
          </div>
          <p class="detail-desc">${esc(p.description)}</p>
          <ul class="detail-features">${p.features.map(f=>`<li>${icon('checkc')}<span>${esc(f)}</span></li>`).join('')}</ul>
          <div class="detail-actions">
            <button class="btn btn-primary btn-lg" data-modal-open
              data-modal-title="Расчёт проекта «${esc(p.name)}»"
              data-modal-desc="Оставьте контакты — менеджер свяжется в течение рабочего дня."
              data-default-comment="Интересует проект «${esc(p.name)}» (${esc(p.area)} м²).">Получить расчёт проекта</button>
            <a href="tel:+74993909789" class="btn btn-outline btn-lg">${icon('phone')}Позвонить</a>
          </div>
          <div class="gift-banner">${icon('gift')}<div><div class="ttl">При заключении договора — проект в подарок!</div><div class="sub">Заключите договор на основные работы и получите проект бесплатно.</div></div></div>
        </div>
      </div>
      <div class="trust-strip">${trustItems}</div>
    </section>

    <section class="bg-muted-solid section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Комплектации</span>
          <h2 class="section-title">Выберите комплектацию</h2>
          <p class="section-lead">Нажмите на нужную комплектацию — ниже откроется подробный состав.</p>
        </div>
        <div class="detail-pkg-tabs">
          <div class="detail-pkg-list" id="pkg-list">${pkgList}</div>
          <div class="detail-pkg-panel" id="pkg-panel">${pkgPanel(p.packages.find(x=>x.key==='optimum')||p.packages[0])}</div>
        </div>
      </div>
    </section>

    <section class="container section">
      <div class="detail-grid">
        <div>
          <h2 class="serif" style="font-size:clamp(1.5rem,3vw,1.875rem);font-weight:700;margin-bottom:2rem">Характеристики</h2>
          <dl class="spec-list">
            ${p.characteristics.map(c=>`<div class="row"><dt>${esc(c.label)}</dt><dd>${esc(c.value)}</dd></div>`).join('')}
          </dl>
        </div>
        <div>
          <h2 class="serif" style="font-size:clamp(1.5rem,3vw,1.875rem);font-weight:700;margin-bottom:2rem">Состав помещений</h2>
          <div class="rooms-block">
            ${Object.entries(floorGroups).map(([floor,rooms]) => `
              <div>
                ${floor?`<div class="floor-label">${esc(floor)}</div>`:''}
                <div class="rooms-grid">
                  ${rooms.map(r=>`<div><div class="nm">${esc(r.name)}</div><div class="ar">${esc(r.area)}</div></div>`).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="bg-muted-solid section">
      <div class="container">
        <h2 class="section-title text-center" style="margin-bottom:2.5rem">Другие дома</h2>
        <div class="cards-grid">
          ${otherProjects.map(o=>`
            <a href="project.html?slug=${esc(o.slug)}" class="project-card" style="cursor:pointer">
              <div class="project-cover"><img src="${esc(o.cover)}" alt="${esc(o.name)}" loading="lazy"></div>
              <div class="project-body">
                <div style="color:var(--primary);font-weight:700;margin-bottom:.5rem">${esc(o.priceFrom)}</div>
                <h3 class="serif" style="font-size:1.25rem;font-weight:700;margin-bottom:.75rem">Проект «${esc(o.name)}»</h3>
                <div style="display:flex;gap:1rem;color:var(--muted-fg);font-size:.875rem"><span>${esc(o.area)} м²</span><span>${o.bedrooms} спал.</span><span>${o.bathrooms} санузл.</span></div>
              </div>
            </a>`).join('')}
        </div>
        <div style="text-align:center;margin-top:2.5rem">
          <a href="projects.html" class="btn btn-outline btn-lg">Все проекты ${icon('arrowright')}</a>
        </div>
      </div>
    </section>
  `;

  // Pkg tab switching
  qsa('#pkg-list button').forEach(b => b.addEventListener('click', () => {
    qsa('#pkg-list button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    const pk = p.packages.find(x => x.key === b.dataset.pkg);
    qs('#pkg-panel').innerHTML = pkgPanel(pk);
  }));

  // Lightbox
  setupLightbox(p);
}

function setupLightbox(p){
  let idx = null;
  const lb = qs('#lightbox');
  const img = qs('#lightbox-img');
  const counter = qs('#lightbox-counter');
  function show(i){
    idx = (i+p.gallery.length) % p.gallery.length;
    img.src = p.gallery[idx];
    img.alt = `Проект «${p.name}» — фото ${idx+1}`;
    counter.textContent = `${idx+1} / ${p.gallery.length}`;
    lb.classList.add('is-open');
    document.body.style.overflow='hidden';
  }
  function close(){ lb.classList.remove('is-open'); idx=null; document.body.style.overflow=''; }
  qsa('[data-idx]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); show(+b.dataset.idx); }));
  qs('#lightbox-close').addEventListener('click', close);
  qs('#lightbox-prev').addEventListener('click', e => { e.stopPropagation(); show(idx-1); });
  qs('#lightbox-next').addEventListener('click', e => { e.stopPropagation(); show(idx+1); });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (idx === null) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(idx+1);
    if (e.key === 'ArrowLeft') show(idx-1);
  });
}

// ============ Comparison table ============
const COMPARE_FEATURES = [
  { name:"Фундамент", econom:"Ж/б забивные сваи 150×150×3000", optimum:"Ж/б забивные сваи 150×150×3000", max:"Ж/б забивные сваи 150×150×3000" },
  { name:"Нижняя обвязка", econom:"Сухая строганная доска 150×150 мм", optimum:"Сухая строганная доска 150×150 мм", max:"Сухая строганная доска 150×150 мм" },
  { name:"Лаги пола", econom:"Сухая доска 45×190 мм", optimum:"Сухая доска 45×190 мм", max:"Сухая доска 45×190 мм" },
  { name:"Утепление пола", econom:"Каменная вата 200 мм", optimum:"Каменная вата 200 мм", max:"Каменная вата 250 мм", h:"max" },
  { name:"Черный пол", econom:"Обрезная доска 20×100 мм", optimum:"Обрезная доска 20×100 мм", max:"Обрезная доска 20×100 мм" },
  { name:"Покрытие пола", econom:false, optimum:"Фанера 18 мм", max:"Фанера 18 мм", h:"optimum" },
  { name:"Каркас стен", econom:"Доска 45×145 мм", optimum:"Доска 45×145 мм + брусок 40×50 мм", max:"Доска 45×190 мм + брусок 40×50 мм", h:"all" },
  { name:"Утепление стен", econom:"Каменная вата 150 мм", optimum:"Каменная вата 150+50=200 мм", max:"Каменная вата 200+50=250 мм", h:"all" },
  { name:"Утепление перегородок", econom:"Каменная вата 100 мм", optimum:"Каменная вата 100 мм", max:"Каменная вата 100 мм" },
  { name:"Внутренняя отделка", econom:false, optimum:"Имитация бруса", max:"OSB + Гипсокартон", h:"optimum" },
  { name:"Наружная отделка", econom:"OSB 12 мм", optimum:"Имитация бруса", max:"Фиброцементный сайдинг", h:"all" },
  { name:"Отделка потолка", econom:false, optimum:"OSB 9 мм", max:"OSB 9 мм", h:"optimum" },
  { name:"Утепление потолка", econom:"Каменная вата 200 мм", optimum:"Каменная вата 200 мм", max:"Каменная вата 250 мм", h:"max" },
  { name:"Окна", econom:"Пластиковые ПВХ 70 Рехау", optimum:"Пластиковые ПВХ 70 Рехау", max:"Пластиковые ПВХ 70 Рехау" },
  { name:"Дверь", econom:"Металлическая с терморазрывом 100 мм", optimum:"Металлическая с терморазрывом 100 мм", max:"Металлическая с терморазрывом 100 мм" },
  { name:"Стропило", econom:"Сухая доска 45×190 мм", optimum:"Сухая доска 45×190 мм", max:"Сухая доска 45×190 мм" },
  { name:"Кровля", econom:"Металлочерепица 0.5 мм", optimum:"Металлочерепица 0.5 мм", max:"Металлочерепица 0.5 мм" },
  { name:"Утепление кровли", econom:"Каменная вата 200 мм", optimum:"Каменная вата 200 мм", max:"Каменная вата 250 мм", h:"max" },
  { name:"Водостоки", econom:false, optimum:true, max:true, h:"optimum" },
  { name:"Снегозадержатели", econom:false, optimum:true, max:true, h:"optimum" },
  { name:"Подшив свесов", econom:false, optimum:"Пластиковые софиты", max:"Пластиковые софиты", h:"optimum" },
];
function cellHtml(val, isPrimary){
  if (val === false) return `<span style="color:var(--muted-fg);opacity:.5">${icon('minus')}</span>`;
  if (val === true) return `<span style="color:var(--primary)">${icon('check')}</span>`;
  return `<span${isPrimary?' style="font-weight:600;color:var(--primary)"':''}>${esc(val)}</span>`;
}
function buildCompareTable(){
  const tbody = qs('#compare-tbody');
  if (!tbody) return;
  tbody.innerHTML = COMPARE_FEATURES.map(f => {
    const eP = f.h === 'all';
    const oP = f.h === 'optimum' || f.h === 'all';
    const mP = f.h === 'max' || f.h === 'all';
    return `<tr>
      <td style="font-weight:500">${esc(f.name)}</td>
      <td>${cellHtml(f.econom, eP)}</td>
      <td class="optimum-col">${cellHtml(f.optimum, oP)}</td>
      <td>${cellHtml(f.max, mP)}</td>
    </tr>`;
  }).join('');

  const btn = qs('#compare-toggle');
  const wrap = qs('#compare-wrap');
  if (!btn || !wrap) return;
  btn.addEventListener('click', () => {
    const open = wrap.classList.toggle('is-open');
    btn.classList.toggle('is-open', open);
    btn.childNodes[0].textContent = open ? 'Скрыть подробное сравнение' : 'Показать подробную таблицу сравнения';
  });
}

// ============ Inline contact form ============
function setupContactForm(){
  const form = qs('#contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    qsa('.field', form).forEach(fld => {
      const inp = fld.querySelector('input,select,textarea');
      if (!inp) return;
      fld.classList.remove('has-err');
      if (inp.hasAttribute('required')) {
        const v = inp.value.trim();
        if (!v || (inp.minLength && v.length < inp.minLength)) { fld.classList.add('has-err'); ok=false; }
      }
    });
    if (!form.querySelector('[name="consent"]').checked) { ok=false; alert('Необходимо согласие на обработку данных'); }
    if (!ok) return;
    console.log('Contact form submitted:', Object.fromEntries(new FormData(form).entries()));
    qs('#contact-form-wrap').style.display='none';
    qs('#contact-success').style.display='';
  });
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
  const inner = document.body.dataset.inner === '1';
  renderHeader(inner);
  renderFooter();
  buildModal();

  // Page-specific
  renderHome();
  renderProjectsList();
  renderProjectDetail();
  buildCompareTable();
  setupContactForm();

  setupReveal();

  // Inject icons in static markup
  qsa('[data-icon]').forEach(n => { n.innerHTML = icon(n.dataset.icon); });
});
