/* ============================================================
   УльтраКаркас — JS для страницы детали проекта (Tilda T123)
   Вставьте содержимое этого файла в поле «JS» блока T123 Zero Block
   Страница читает ?slug=... из URL и рендерит нужный проект.
   ============================================================ */
(function () {
  if (window._ukInitProject) return;
  window._ukInitProject = true;

  // ============ Inline SVG icons ============
  var ICONS = {
    x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 6 9 17 4 12"/></svg>',
    checkc: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>',
    chevright: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="9 18 15 12 9 6"/></svg>',
    arrowright: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    maximize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
    bed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
    bath: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1.06-.44H4a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5H2"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    gift: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    hammer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    thermo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M12 9a4 4 0 0 0-2 7.5"/><path d="M12 3v2"/><path d="m6.6 18.4-1.4 1.4"/><path d="M20 4h-5a2 2 0 0 0-2 2v9.5a4 4 0 1 0 4 0V6a2 2 0 0 0-2-2"/></svg>',
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

  // ============ Full projects data ============
  var PROJECTS = [
    {
      slug: 'uyut', name: 'Уют', priceFrom: 'от 4 808 000 ₽', area: '120.2', bedrooms: 3, bathrooms: 1, floors: '1 этаж', style: 'Скандинавский',
      description: 'Уютный и функциональный дом для комфортной жизни за городом. Три полноценные спальни обеспечивают удобное личное пространство для всей семьи, а большая кухня-гостиная 25,9 м² становится центром дома для отдыха, общения и тёплых семейных вечеров. Парная добавит уюта и удовольствия в повседневную жизнь, а котельная сделает дом ещё более практичным и удобным для постоянного проживания.',
      features: ['Три полноценные спальни', 'Большая кухня-гостиная 25.9 м²', 'Терраса с навесом', 'Парная', 'Котельная'],
      characteristics: [{ label: 'Фундамент', value: 'Ж/б забивные сваи 150x150x3000' }, { label: 'Стены', value: 'Сухая строганная доска (камерной сушки) 150×50 мм, шаг 600 мм' }, { label: 'Этажность', value: '1' }, { label: 'Кровля', value: 'Двухскатная, металлочерепица 0.5 мм Grand Line' }, { label: 'Утепление', value: 'Базальтовая вата' }, { label: 'Высота потолков', value: '2.75 м' }],
      rooms: [{ name: 'Кухня-гостиная', area: '25.9 м²' }, { name: 'Спальня 1', area: '16.8 м²' }, { name: 'Спальня 2', area: '13.3 м²' }, { name: 'Спальня 3', area: '13.3 м²' }, { name: 'Санузел', area: '7.5 м²' }, { name: 'Парная', area: '4.7 м²' }, { name: 'Котельная', area: '5.6 м²' }, { name: 'Тамбур', area: '6.7 м²' }, { name: 'Терраса 1', area: '11.4 м²' }, { name: 'Терраса 2', area: '15 м²' }],
      packages: [{ key: 'econom', name: 'Эконом', price: 'от 4 808 000 ₽', tagline: 'Базовый тёплый контур' }, { key: 'optimum', name: 'Оптимум', price: 'от 6 010 000 ₽', tagline: 'Золотая середина цены и набора опций' }, { key: 'maximum', name: 'Максимум', price: 'от 7 212 000 ₽', tagline: 'Премиальные материалы и усиленный каркас' }],
      cover: 'https://static.tildacdn.com/tild3935-6232-4064-a130-313330313561/dg120.png',
      gallery: ['https://static.tildacdn.com/tild3935-6232-4064-a130-313330313561/dg120.png', 'https://static.tildacdn.com/tild3235-3665-4261-b963-653231613962/dk203_11.jpg', 'https://static.tildacdn.com/tild3439-3662-4235-a534-346535336364/dk203_31_05.jpg', 'https://static.tildacdn.com/tild6232-3038-4130-b631-663566383232/dk203_32_05.jpg', 'https://static.tildacdn.com/tild3733-6632-4566-b439-623861613539/dk203_33_05.jpg', 'https://static.tildacdn.com/tild3162-3430-4632-b936-356664656435/dk203_34_05.jpg'],
    },
    {
      slug: 'komfort', name: 'Комфорт', priceFrom: 'от 4 520 000 ₽', area: '113', bedrooms: 4, bathrooms: 2, floors: '2 этажа', style: 'Скандинавский',
      description: 'Уютный и функциональный дом для семьи, где каждому найдётся своё пространство. Четыре полноценные спальни и два санузла делают планировку особенно удобной для постоянного проживания, а большая гостиная 22,6 м² станет центром семейной жизни, отдыха и встреч с близкими.',
      features: ['4 полноценные спальни', 'Большая гостиная 22.6 м²', 'Крыльцо с навесом'],
      characteristics: [{ label: 'Фундамент', value: 'Ж/б забивные сваи 150x150x3000' }, { label: 'Стены', value: 'Сухая строганная доска (камерной сушки) 150×50 мм, шаг 600 мм' }, { label: 'Этажность', value: '2' }, { label: 'Кровля', value: 'Двускатная, металлочерепица 0.5 мм Grand Line' }, { label: 'Утепление', value: 'Базальтовая вата' }, { label: 'Высота потолков', value: '2.75 м' }],
      rooms: [{ name: 'Гостиная', area: '22.6 м²', floor: '1 этаж' }, { name: 'Кухня', area: '12.4 м²', floor: '1 этаж' }, { name: 'Прихожая', area: '8.9 м²', floor: '1 этаж' }, { name: 'Санузел', area: '5.2 м²', floor: '1 этаж' }, { name: 'Спальня 1', area: '13.5 м²', floor: '2 этаж' }, { name: 'Спальня 2', area: '12 м²', floor: '2 этаж' }, { name: 'Спальня 3', area: '10.5 м²', floor: '2 этаж' }, { name: 'Спальня 4', area: '10.2 м²', floor: '2 этаж' }, { name: 'Санузел', area: '5.4 м²', floor: '2 этаж' }, { name: 'Холл', area: '8 м²', floor: '2 этаж' }],
      packages: [{ key: 'econom', name: 'Эконом', price: 'от 4 520 000 ₽', tagline: 'Базовый тёплый контур' }, { key: 'optimum', name: 'Оптимум', price: 'от 5 650 000 ₽', tagline: 'Золотая середина цены и набора опций' }, { key: 'maximum', name: 'Максимум', price: 'от 6 780 000 ₽', tagline: 'Премиальные материалы и усиленный каркас' }],
      cover: 'https://static.tildacdn.com/tild6466-6562-4433-a238-633761383566/dky113.png',
      gallery: ['https://static.tildacdn.com/tild6466-6562-4433-a238-633761383566/dky113.png', 'https://static.tildacdn.com/tild3732-3032-4230-b064-396662643335/dky113_11.jpg', 'https://static.tildacdn.com/tild3438-6637-4161-b530-663231323061/dky133_12.jpg', 'https://static.tildacdn.com/tild3134-3337-4264-b332-383138356535/dky113_32_08.jpg', 'https://static.tildacdn.com/tild3338-6538-4031-a261-386338636638/dky113_34_08.jpg', 'https://static.tildacdn.com/tild3638-6338-4634-b134-653537363732/dky133_31_08.jpg', 'https://static.tildacdn.com/tild3963-6432-4164-a665-363036663137/dky113_33_08.jpg'],
    },
    {
      slug: 'semeynyy', name: 'Семейный', priceFrom: 'от 4 328 000 ₽', area: '108.2', bedrooms: 3, bathrooms: 1, floors: '1 этаж', style: 'Скандинавский',
      description: 'Просторный и уютный дом для комфортной жизни всей семьи. Три полноценные спальни создают удобное личное пространство для каждого, а большая кухня-гостиная 29,4 м² становится центром дома для отдыха, общения и семейных вечеров. Техническое помещение дополняет продуманную планировку и делает повседневную жизнь более удобной.',
      features: ['Три полноценные спальни', 'Большая кухня-гостиная 29.4 м²', 'Терраса с навесом', 'Тех. помещение'],
      characteristics: [{ label: 'Фундамент', value: 'Ж/б забивные сваи 150x150x3000' }, { label: 'Стены', value: 'Сухая строганная доска (камерной сушки) 150×50 мм, шаг 600 мм' }, { label: 'Этажность', value: '1' }, { label: 'Кровля', value: 'Вальмовая, металлочерепица 0.5 мм Grand Line' }, { label: 'Утепление', value: 'Базальтовая вата' }, { label: 'Высота потолков', value: '2.75 м' }],
      rooms: [{ name: 'Кухня-гостиная', area: '29.4 м²' }, { name: 'Спальня 1', area: '15.9 м²' }, { name: 'Спальня 2', area: '13 м²' }, { name: 'Спальня 3', area: '11.3 м²' }, { name: 'Коридор', area: '9.3 м²' }, { name: 'Санузел', area: '6.1 м²' }, { name: 'Тех. помещение', area: '6.6 м²' }, { name: 'Тамбур', area: '4.9 м²' }, { name: 'Терраса', area: '11.7 м²' }],
      packages: [{ key: 'econom', name: 'Эконом', price: 'от 4 328 000 ₽', tagline: 'Базовый тёплый контур' }, { key: 'optimum', name: 'Оптимум', price: 'от 5 410 000 ₽', tagline: 'Золотая середина цены и набора опций' }, { key: 'maximum', name: 'Максимум', price: 'от 6 492 000 ₽', tagline: 'Премиальные материалы и усиленный каркас' }],
      cover: 'https://static.tildacdn.com/tild3762-6131-4638-b735-643932663339/dg70.png',
      gallery: ['https://static.tildacdn.com/tild3762-6131-4638-b735-643932663339/dg70.png', 'https://static.tildacdn.com/tild3137-3462-4138-a633-363463336535/dg054_11.jpg', 'https://static.tildacdn.com/tild6231-3534-4662-b831-656338646232/dg054_31.jpg', 'https://static.tildacdn.com/tild3234-3831-4337-b964-656239363663/dg054_32.jpg', 'https://static.tildacdn.com/tild3363-3531-4632-a434-353037666334/dg054_34.jpg', 'https://static.tildacdn.com/tild3063-6563-4561-a639-313439646532/dg054_33.jpg'],
    },
    {
      slug: 'prostornyy', name: 'Просторный', priceFrom: 'от 7 756 000 ₽', area: '193.9', bedrooms: 5, bathrooms: 2, floors: '2 этажа', style: 'Скандинавский',
      description: 'Просторный семейный дом с продуманной планировкой и всем необходимым для комфортного проживания. Пять спален дают каждому своё личное пространство, уютная гостиная объединяет семью, а котельная и гараж 25,4 м² делают дом особенно удобным в быту.',
      features: ['5 полноценных спален', 'Гостиная 20 м²', 'Котельная', 'Балкон', 'Гараж 25.4 м²'],
      characteristics: [{ label: 'Фундамент', value: 'Ж/б забивные сваи 150x150x3000' }, { label: 'Стены', value: 'Сухая строганная доска (камерной сушки) 150×50 мм, шаг 600 мм' }, { label: 'Этажность', value: '1.5' }, { label: 'Кровля', value: 'Вальмовая, металлочерепица 0.5 мм Grand Line' }, { label: 'Утепление', value: 'Базальтовая вата' }, { label: 'Высота потолков', value: '1 этаж: 2.75 м, 2 этаж: 2.5 м' }],
      rooms: [{ name: 'Гостиная', area: '20 м²', floor: '1 этаж' }, { name: 'Кухня', area: '13.5 м²', floor: '1 этаж' }, { name: 'Терраса', area: '8.6 м²', floor: '1 этаж' }, { name: 'Спальня 1', area: '12.2 м²', floor: '1 этаж' }, { name: 'Санузел', area: '5.4 м²', floor: '1 этаж' }, { name: 'Тамбур', area: '9.8 м²', floor: '1 этаж' }, { name: 'Холл', area: '13.3 м²', floor: '1 этаж' }, { name: 'Крыльцо', area: '3 м²', floor: '1 этаж' }, { name: 'Котельная', area: '8 м²', floor: '1 этаж' }, { name: 'Гараж', area: '25.4 м²', floor: '1 этаж' }, { name: 'Спальня 2', area: '20 м²', floor: '2 этаж' }, { name: 'Спальня 3', area: '12.2 м²', floor: '2 этаж' }, { name: 'Спальня 4', area: '12.2 м²', floor: '2 этаж' }, { name: 'Спальня 5', area: '11.4 м²', floor: '2 этаж' }, { name: 'Балкон', area: '5.9 м²', floor: '2 этаж' }, { name: 'Санузел', area: '6 м²', floor: '2 этаж' }, { name: 'Холл', area: '7 м²', floor: '2 этаж' }],
      packages: [{ key: 'econom', name: 'Эконом', price: 'от 7 756 000 ₽', tagline: 'Базовый тёплый контур' }, { key: 'optimum', name: 'Оптимум', price: 'от 9 695 000 ₽', tagline: 'Золотая середина цены и набора опций' }, { key: 'maximum', name: 'Максимум', price: 'от 11 634 000 ₽', tagline: 'Премиальные материалы и усиленный каркас' }],
      cover: 'https://static.tildacdn.com/tild6536-3665-4939-a462-623365336535/dg130.png',
      gallery: ['https://static.tildacdn.com/tild6536-3665-4939-a462-623365336535/dg130.png', 'https://static.tildacdn.com/tild3766-6330-4463-b431-303539326462/dg022_11.jpg', 'https://static.tildacdn.com/tild3731-3639-4764-a333-393337626331/dg022_12.jpg', 'https://static.tildacdn.com/tild6433-3537-4339-b732-303136623034/dg022_32.jpg', 'https://static.tildacdn.com/tild6466-3261-4639-b135-653663626331/dg022_33.jpg', 'https://static.tildacdn.com/tild3863-6438-4234-a531-663835643762/dg022_34.jpg', 'https://static.tildacdn.com/tild3832-3063-4639-b266-343530366464/dg022_31.jpg'],
    },
    {
      slug: 'zagorodnyy', name: 'Загородный', priceFrom: 'от 8 800 000 ₽', area: '220', bedrooms: 3, bathrooms: 2, floors: '1 этаж', style: 'Скандинавский',
      description: 'Дом, в котором продумано всё для комфортной загородной жизни. Просторная гостиная объединяет всю семью, три спальни дарят каждому личное пространство, а большая терраса с навесом идеально подходит для отдыха в любое время года.',
      features: ['Три полноценные спальни', 'Большая терраса с навесом 42 м²', '3 гардеробных', 'Постирочная комната', 'Большая гостиная', 'Топочная'],
      characteristics: [{ label: 'Фундамент', value: 'Ж/б забивные сваи 150x150x3000' }, { label: 'Стены', value: 'Сухая строганная доска (камерной сушки) 150×50 мм, шаг 600 мм' }, { label: 'Этажность', value: '1' }, { label: 'Кровля', value: 'Вальмовая, металлочерепица 0.5 мм Grand Line' }, { label: 'Утепление', value: 'Базальтовая вата' }, { label: 'Высота потолков', value: '2.75 м' }],
      rooms: [{ name: 'Гостиная', area: '47 м²' }, { name: 'Кухня', area: '16.7 м²' }, { name: 'Спальня 1', area: '14.3 м²' }, { name: 'Санузел 1', area: '3.7 м²' }, { name: 'Спальня с гардеробной 1', area: '17.1 м²' }, { name: 'Спальня с гардеробной 2', area: '21 м²' }, { name: 'Санузел 2', area: '7.2 м²' }, { name: 'Прихожая', area: '15.3 м²' }, { name: 'Гардеробная', area: '5.7 м²' }, { name: 'Крыльцо', area: '8 м²' }, { name: 'Веранда', area: '14 м²' }, { name: 'Топочная', area: '5.6 м²' }, { name: 'Постирочная', area: '2.4 м²' }, { name: 'Терраса', area: '42 м²' }],
      packages: [{ key: 'econom', name: 'Эконом', price: 'от 8 800 000 ₽', tagline: 'Базовый тёплый контур' }, { key: 'optimum', name: 'Оптимум', price: 'от 11 000 000 ₽', tagline: 'Золотая середина цены и набора опций' }, { key: 'maximum', name: 'Максимум', price: 'от 13 200 000 ₽', tagline: 'Премиальные материалы и усиленный каркас' }],
      cover: 'https://static.tildacdn.com/tild3538-6463-4463-a163-633161303832/dg50.png',
      gallery: ['https://static.tildacdn.com/tild3538-6463-4463-a163-633161303832/dg50.png', 'https://static.tildacdn.com/tild6562-6261-4539-b035-363835363138/dg021_11.jpg', 'https://static.tildacdn.com/tild3633-6263-4966-a266-643534376636/dg021_31.jpg', 'https://static.tildacdn.com/tild3062-3334-4861-a365-383861383266/dg021_32.jpg', 'https://static.tildacdn.com/tild6332-6333-4166-a433-643764363163/dg021_33.jpg', 'https://static.tildacdn.com/tild6337-6563-4431-b639-316664666362/dg021_34.jpg'],
    },
    {
      slug: 'lesnoy', name: 'Лесной', priceFrom: 'от 3 168 000 ₽', area: '79.2', bedrooms: 2, bathrooms: 1, floors: '1 этаж', style: 'Барнхаус',
      description: 'Стильный и уютный дом для комфортной загородной жизни. Две полноценные спальни, большая кухня-гостиная 29,4 м² и продуманная планировка создают удобное пространство для отдыха и повседневного комфорта. Барнхаусный стиль придаёт проекту современный и привлекательный характер.',
      features: ['2 полноценные спальни', 'Большая кухня-гостиная 29.4 м²', 'Терраса с навесом 21 м²', 'Тех. помещение', 'Барнхаусный стиль'],
      characteristics: [{ label: 'Фундамент', value: 'Ж/б забивные сваи 150x150x3000' }, { label: 'Стены', value: 'Сухая строганная доска (камерной сушки) 150×50 мм, шаг 600 мм' }, { label: 'Этажность', value: '1' }, { label: 'Кровля', value: 'Двускатная, металлочерепица 0.5 мм Grand Line' }, { label: 'Утепление', value: 'Базальтовая вата' }, { label: 'Высота потолков', value: '2.75 м' }],
      rooms: [{ name: 'Кухня-гостиная', area: '29.4 м²' }, { name: 'Спальня 1', area: '9.2 м²' }, { name: 'Спальня 2', area: '9.2 м²' }, { name: 'Санузел', area: '3.4 м²' }, { name: 'Тех. помещение', area: '2.5 м²' }, { name: 'Терраса', area: '21 м²' }, { name: 'Прихожая', area: '2.5 м²' }, { name: 'Крыльцо', area: '2 м²' }],
      packages: [{ key: 'econom', name: 'Эконом', price: 'от 3 168 000 ₽', tagline: 'Базовый тёплый контур' }, { key: 'optimum', name: 'Оптимум', price: 'от 3 960 000 ₽', tagline: 'Золотая середина цены и набора опций' }, { key: 'maximum', name: 'Максимум', price: 'от 4 752 000 ₽', tagline: 'Премиальные материалы и усиленный каркас' }],
      cover: 'https://static.tildacdn.com/tild6261-3430-4164-a366-386361623130/80.png',
      gallery: ['https://static.tildacdn.com/tild6261-3430-4164-a366-386361623130/80.png', 'https://static.tildacdn.com/tild3635-3135-4638-b237-663336386630/dbh022_11.jpg', 'https://static.tildacdn.com/tild3638-3439-4438-a666-323863633939/dbh022_31.jpg', 'https://static.tildacdn.com/tild6635-6438-4234-b762-316661656239/dbh022_32.jpg', 'https://static.tildacdn.com/tild6430-3532-4335-b266-373763383365/dbh022_33.jpg', 'https://static.tildacdn.com/tild6132-3633-4563-b661-663463346366/dbh022_34.jpg'],
    },
  ];

  // ============ Package specs data ============
  var PACKAGE_SPECS = [
    { section: 'Основание' },
    { label: 'Фундамент', econom: 'Ж/б забивные сваи 150x150x3000', optimum: 'Ж/б забивные сваи 150x150x3000', maximum: 'Ж/б забивные сваи 150x150x3000' },
    { section: 'Цокольное перекрытие' },
    { label: 'Нижняя обвязка', econom: 'Сухая строганная доска 150×150 мм', optimum: 'Сухая строганная доска 150×150 мм', maximum: 'Сухая строганная доска 150×150 мм' },
    { section: 'Пол' },
    { label: 'Лаги пола', econom: 'Сухая строганная доска 45×190 мм', optimum: 'Сухая строганная доска 45×190 мм', maximum: 'Сухая строганная доска 45×190 мм' },
    { label: 'Утепление пола', econom: 'Каменная вата 200 мм', optimum: 'Каменная вата 200 мм', maximum: 'Каменная вата 250 мм' },
    { label: 'Черный пол', econom: 'Обрезная доска 20x100 мм', optimum: 'Обрезная доска 20x100 мм', maximum: 'Обрезная доска 20x100 мм' },
    { label: 'Покрытие', econom: '—', optimum: 'Фанера 18 мм', maximum: 'Фанера 18 мм' },
    { section: 'Каркас' },
    { label: 'Каркас внешних стен', econom: 'Доска 45x145 мм', optimum: 'Доска 45x145 мм + брусок 40x50 мм', maximum: 'Доска 45x190 мм + брусок 40x50 мм' },
    { label: 'Утепление внешних стен', econom: 'Каменная вата 150 мм', optimum: 'Каменная вата 150+50=200 мм', maximum: 'Каменная вата 200+50=250 мм' },
    { label: 'Утепление перегородок', econom: 'Каменная вата 100 мм', optimum: 'Каменная вата 100 мм', maximum: 'Каменная вата 100 мм' },
    { label: 'Внутренняя отделка', econom: '—', optimum: 'Имитация бруса', maximum: 'OSB + Гипсокартон' },
    { label: 'Наружная отделка', econom: 'OSB 12 мм', optimum: 'Имитация бруса (карельский профиль)', maximum: 'Фиброцементный сайдинг' },
    { label: 'Отделка потолка', econom: '—', optimum: 'OSB 9 мм', maximum: 'OSB 9 мм' },
    { label: 'Утепление потолка', econom: 'Каменная вата 200 мм', optimum: 'Каменная вата 200 мм', maximum: 'Каменная вата 250 мм' },
    { label: 'Окна', econom: 'Пластиковые ПВХ 70 Рехау', optimum: 'Пластиковые ПВХ 70 Рехау', maximum: 'Пластиковые ПВХ 70 Рехау' },
    { label: 'Дверь', econom: 'Металлическая с терморазрывом 100 мм', optimum: 'Металлическая с терморазрывом 100 мм', maximum: 'Металлическая с терморазрывом 100 мм' },
    { section: 'Кровля' },
    { label: 'Стропило', econom: 'Доска 45×190 мм', optimum: 'Доска 45×190 мм', maximum: 'Доска 45×190 мм' },
    { label: 'Покрытие кровли', econom: 'Металлочерепица 0.5 мм Grand Line', optimum: 'Металлочерепица 0.5 мм Grand Line', maximum: 'Металлочерепица 0.5 мм Grand Line' },
    { label: 'Водостоки', econom: '—', optimum: '✓', maximum: '✓' },
    { label: 'Снегозадержатели', econom: '—', optimum: '✓', maximum: '✓' },
    { label: 'Подшив свесов', econom: '—', optimum: 'Пластиковые софиты с перфорацией', maximum: 'Пластиковые софиты с перфорацией' },
    { label: 'Утепление кровли', econom: 'Каменная вата 200 мм', optimum: 'Каменная вата 200 мм', maximum: 'Каменная вата 250 мм' },
    { label: 'Плёнки', econom: 'Изоспан AM, Ютафол Н 110, Изоспан A', optimum: 'Изоспан AM, Ютафол Н 110, Изоспан A', maximum: 'Изоспан AM, Ютафол Н 110, Изоспан A' },
    { section: 'Инженерные системы' },
    { label: 'Вентиляция', econom: '✓', optimum: '✓', maximum: '✓' },
    { label: 'Электрика', econom: 'Труба ПНД 32 мм (закладная)', optimum: 'Труба ПНД 32 мм (закладная)', maximum: 'Труба ПНД 32 мм (закладная)' },
    { label: 'Водоснабжение', econom: 'Труба ПНД 50 мм (закладная)', optimum: 'Труба ПНД 50 мм (закладная)', maximum: 'Труба ПНД 50 мм (закладная)' },
    { label: 'Канализация', econom: 'Труба ПВХ 110 мм', optimum: 'Труба ПВХ 110 мм', maximum: 'Труба ПВХ 110 мм' },
  ];

  function getProject(slug) { return PROJECTS.find(function (p) { return p.slug === slug; }); }

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
      var fd   = new FormData(f);
      var sbtn = f.querySelector('[type="submit"]');
      if (sbtn) sbtn.disabled = true;
      submitToTilda(
        { name: fd.get('name'), phone: fd.get('phone'), area: fd.get('area'), 'package': fd.get('package'), comment: fd.get('comment') },
        function () {
          if (sbtn) sbtn.disabled = false;
          qs('#lead-form-wrap').style.display = 'none';
          qs('#lead-success').style.display = '';
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

  // ============ Specs HTML ============
  var ALL_PKG_KEYS = ['econom', 'optimum', 'maximum'];
  function specsHtml(pk) {
    return PACKAGE_SPECS.map(function (row) {
      if (row.section) return '<div class="specs-section">' + esc(row.section) + '</div>';
      var v = row[pk.key];
      var allVals = ALL_PKG_KEYS.map(function (k) { return row[k]; });
      var allSame = allVals.every(function (x) { return x === allVals[0]; });
      var badge = '', extra = '';
      if (!allSame) {
        extra = ' specs-row-diff';
        if (v === '—') { badge = '<span class="spec-badge spec-no">нет</span>'; }
        else if (allVals.some(function (x) { return x === '—'; })) { badge = '<span class="spec-badge spec-yes">включено</span>'; }
        else { badge = '<span class="spec-badge spec-alt">отличие</span>'; }
      }
      return '<div class="specs-row' + extra + '"><div class="lbl">' + esc(row.label) + '</div><div class="val">' + esc(v) + badge + '</div></div>';
    }).join('');
  }

  function pkgPanel(p, pk) {
    var pkgName = pk.key === 'econom' ? 'эконом' : pk.key === 'optimum' ? 'оптимум' : 'максимум';
    return '<div class="detail-pkg-head">' +
      '<div><div class="nm">' + esc(pk.name) + '</div><div class="tg">' + esc(pk.tagline) + '</div></div>' +
      '<div class="pr">' + esc(pk.price) + '</div>' +
      '</div>' +
      '<div class="specs-wrap">' + specsHtml(pk) + '</div>' +
      '<div style="margin-top:1.5rem;font-size:.75rem;color:var(--muted-fg);font-style:italic">Разводка электрики, водоснабжения, отопления и канализации рассчитывается индивидуально.</div>' +
      '<div style="margin-top:1.5rem">' +
      '<button class="btn btn-primary btn-lg btn-block" data-modal-open' +
      ' data-modal-title="Заявка на проект «' + esc(p.name) + '»"' +
      ' data-modal-desc="Комплектация ' + esc(pk.name) + ', ' + esc(pk.price) + '."' +
      ' data-default-package="' + pkgName + '"' +
      ' data-default-comment="Проект «' + esc(p.name) + '» (' + esc(p.area) + ' м²), комплектация ' + esc(pk.name) + '.">' +
      '<span class="btn-short">Заказать в этой комплектации</span>' +
      '<span class="btn-long">Заказать «' + esc(p.name) + '» в комплектации ' + esc(pk.name) + '</span>' +
      '</button></div>';
  }

  // ============ Render project detail ============
  function renderProjectDetail() {
    var root = qs('#project-detail');
    if (!root) return;
    var slug = window.UK_SLUG || new URLSearchParams(location.search).get('slug');
    var p = slug ? getProject(slug) : null;
    if (!p) {
      root.innerHTML = '<div class="container" style="padding:6rem 1rem;text-align:center"><h1 class="page-title">Проект не найден</h1><p class="page-lead" style="margin:0 auto">Похоже, такого проекта нет. <a href="/projects/" style="color:var(--primary);text-decoration:underline">Все проекты</a></p></div>';
      return;
    }
    document.title = 'Проект «' + p.name + '» — ' + p.area + ' м² — УльтраКаркас';

    var otherProjects = PROJECTS.filter(function (x) { return x.slug !== p.slug; }).slice(0, 3);
    var floorGroups = {};
    p.rooms.forEach(function (r) { var f = r.floor || ''; (floorGroups[f] = floorGroups[f] || []).push(r); });

    var thumbs = p.gallery.slice(0, 5).map(function (src, i) {
      return '<button data-idx="' + i + '"><img src="' + esc(src) + '" alt="фото ' + (i + 1) + '" loading="lazy">' +
        (i === 4 && p.gallery.length > 5 ? '<div class="more-overlay">+' + (p.gallery.length - 5) + '</div>' : '') +
        '</button>';
    }).join('');

    var trustItems = [
      { icon: 'hammer', label: 'Прочный несущий каркас' },
      { icon: 'shield', label: '10 лет гарантии' },
      { icon: 'thermo', label: 'Энергосберегающий дом' },
      { icon: 'checkc', label: 'Контроль качества на каждом этапе' },
    ].map(function (it) { return '<div><div class="ico">' + icon(it.icon) + '</div><span>' + it.label + '</span></div>'; }).join('');

    var pkgList = p.packages.map(function (pk) {
      return '<button data-pkg="' + pk.key + '" class="' + (pk.key === 'optimum' ? 'is-active' : '') + '">' +
        '<span class="nm">' + esc(pk.name) + '</span><span class="pr">' + esc(pk.price) + '</span>' +
        '</button>';
    }).join('');

    var defaultPkg = p.packages.find(function (x) { return x.key === 'optimum'; }) || p.packages[0];

    var roomsHtml = Object.keys(floorGroups).map(function (floor) {
      var rooms = floorGroups[floor];
      return '<div>' +
        (floor ? '<div class="floor-label">' + esc(floor) + '</div>' : '') +
        '<div class="rooms-grid">' +
        rooms.map(function (r) { return '<div><div class="nm">' + esc(r.name) + '</div><div class="ar">' + esc(r.area) + '</div></div>'; }).join('') +
        '</div></div>';
    }).join('');

    var otherHtml = otherProjects.map(function (o) {
      return '<a href="' + projectUrl(o.slug) + '" class="project-card" style="cursor:pointer">' +
        '<div class="project-cover"><img src="' + esc(o.cover) + '" alt="' + esc(o.name) + '" loading="lazy"></div>' +
        '<div class="project-body">' +
        '<div style="color:var(--primary);font-weight:700;margin-bottom:.5rem">' + esc(o.priceFrom) + '</div>' +
        '<h3 class="serif" style="font-size:1.25rem;font-weight:700;margin-bottom:.75rem">Проект «' + esc(o.name) + '»</h3>' +
        '<div style="display:flex;gap:1rem;color:var(--muted-fg);font-size:.875rem"><span>' + esc(o.area) + ' м²</span><span>' + o.bedrooms + ' спал.</span><span>' + o.bathrooms + ' санузл.</span></div>' +
        '</div></a>';
    }).join('');

    root.innerHTML =
      '<div class="container">' +
      '<nav class="crumbs">' +
      '<a href="/">Главная</a>' + icon('chevright') +
      '<a href="/projects/">Проекты</a>' + icon('chevright') +
      '<span class="current">Проект «' + esc(p.name) + '»</span>' +
      '</nav></div>' +

      '<section class="container" style="padding-bottom:4rem">' +
      '<div class="detail-grid">' +
      '<div>' +
      '<button class="detail-cover" data-idx="0">' +
      '<img src="' + esc(p.gallery[0]) + '" alt="Проект «' + esc(p.name) + '» — фото 1">' +
      '<span class="tag">' + esc(p.style) + ' · ' + esc(p.floors) + '</span>' +
      '<span class="open-tag">Открыть фото</span>' +
      '</button>' +
      '<div class="detail-thumbs">' + thumbs + '</div>' +
      '</div>' +
      '<div>' +
      '<div class="detail-price">' + esc(p.priceFrom) + '</div>' +
      '<h1 class="detail-title">Проект «' + esc(p.name) + '»</h1>' +
      '<div class="detail-meta">' +
      '<div>' + icon('maximize') + '<span class="num">' + esc(p.area) + '</span><span class="lbl">м²</span></div>' +
      '<div>' + icon('bed') + '<span class="num">' + p.bedrooms + '</span><span class="lbl">спальни</span></div>' +
      '<div>' + icon('bath') + '<span class="num">' + p.bathrooms + '</span><span class="lbl">санузел</span></div>' +
      '</div>' +
      '<p class="detail-desc">' + esc(p.description) + '</p>' +
      '<ul class="detail-features">' + p.features.map(function (f) { return '<li>' + icon('checkc') + '<span>' + esc(f) + '</span></li>'; }).join('') + '</ul>' +
      '<div class="detail-actions">' +
      '<button class="btn btn-primary btn-lg" data-modal-open data-modal-title="Расчёт проекта «' + esc(p.name) + '»" data-modal-desc="Оставьте контакты — менеджер свяжется в течение рабочего дня." data-default-comment="Интересует проект «' + esc(p.name) + '» (' + esc(p.area) + ' м²).">Получить расчёт проекта</button>' +
      '<a href="tel:+74993909789" class="btn btn-outline btn-lg">' + icon('phone') + 'Позвонить</a>' +
      '</div>' +
      '<div class="gift-banner">' + icon('gift') + '<div><div class="ttl">При заключении договора — проект в подарок!</div><div class="sub">Заключите договор на основные работы и получите проект бесплатно.</div></div></div>' +
      '</div></div>' +
      '<div class="trust-strip">' + trustItems + '</div>' +
      '</section>' +

      '<section class="bg-muted-solid section">' +
      '<div class="container">' +
      '<div class="section-header">' +
      '<span class="section-eyebrow">Комплектации</span>' +
      '<h2 class="section-title">Выберите комплектацию</h2>' +
      '<p class="section-lead">Нажмите на нужную комплектацию — ниже откроется подробный состав.</p>' +
      '</div>' +
      '<div class="detail-pkg-tabs">' +
      '<div class="detail-pkg-list" id="pkg-list">' + pkgList + '</div>' +
      '<div class="detail-pkg-panel" id="pkg-panel">' + pkgPanel(p, defaultPkg) + '</div>' +
      '</div></div>' +
      '</section>' +

      '<section class="container section">' +
      '<div class="detail-grid">' +
      '<div><h2 class="serif" style="font-size:clamp(1.5rem,3vw,1.875rem);font-weight:700;margin-bottom:2rem">Характеристики</h2>' +
      '<dl class="spec-list">' + p.characteristics.map(function (c) { return '<div class="row"><dt>' + esc(c.label) + '</dt><dd>' + esc(c.value) + '</dd></div>'; }).join('') + '</dl></div>' +
      '<div><h2 class="serif" style="font-size:clamp(1.5rem,3vw,1.875rem);font-weight:700;margin-bottom:2rem">Состав помещений</h2>' +
      '<div class="rooms-block">' + roomsHtml + '</div></div>' +
      '</div></section>' +

      '<section class="bg-muted-solid section">' +
      '<div class="container">' +
      '<h2 class="section-title text-center" style="margin-bottom:2.5rem">Другие дома</h2>' +
      '<div class="cards-grid">' + otherHtml + '</div>' +
      '<div style="text-align:center;margin-top:2.5rem">' +
      '<a href="/projects/" class="btn btn-outline btn-lg">Все проекты ' + icon('arrowright') + '</a>' +
      '</div></div></section>';

    // Package tab switching
    qsa('#pkg-list button').forEach(function (b) {
      b.addEventListener('click', function () {
        qsa('#pkg-list button').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        var pk = p.packages.find(function (x) { return x.key === b.dataset.pkg; });
        qs('#pkg-panel').innerHTML = pkgPanel(p, pk);
      });
    });

    // Lightbox
    setupLightbox(p);
  }

  // ============ Lightbox ============
  function setupLightbox(p) {
    var idx = null;
    var lb = qs('#lightbox');
    var img = qs('#lightbox-img');
    var counter = qs('#lightbox-counter');
    function show(i) {
      idx = (i + p.gallery.length) % p.gallery.length;
      img.src = p.gallery[idx];
      img.alt = 'Проект «' + p.name + '» — фото ' + (idx + 1);
      counter.textContent = (idx + 1) + ' / ' + p.gallery.length;
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function close() { lb.classList.remove('is-open'); idx = null; document.body.style.overflow = ''; }
    qsa('[data-idx]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); show(+b.dataset.idx); }); });
    qs('#lightbox-close').addEventListener('click', close);
    qs('#lightbox-prev').addEventListener('click', function (e) { e.stopPropagation(); show(idx - 1); });
    qs('#lightbox-next').addEventListener('click', function (e) { e.stopPropagation(); show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (idx === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    });
  }

  // ============ Init ============
  function init() {
    buildModal();
    renderProjectDetail();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
