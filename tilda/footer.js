/* УльтраКаркас — Footer JS
   Динамически проставляет текущий год в копирайт.
   Вставьте в поле JS того же Zero Block T123 что и footer.html.
*/
(function () {
  'use strict';
  var el = document.getElementById('footer-copy');
  if (el) {
    el.textContent = '\u00a9 ' + new Date().getFullYear() +
      ' \u041e\u041e\u041e \u00ab\u0423\u043b\u044c\u0442\u0440\u0430\u041a\u0430\u0440\u043a\u0430\u0441\u00bb. ' +
      '\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b. ' +
      '\u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u043e\u0439.';
  }
}());
