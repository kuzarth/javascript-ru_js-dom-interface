// Артур Кузь
// Тема - Методы объектов и контекст вызова
// Задача - Функции-обёртки, декораторы

(function() {
  'use strict';

  function work(a) {
    return a;
  }

  function makeLogging(f, log) {
    return function () {
      log.push(arguments[0]);
      return f.apply(this, arguments)
    }
  }

  var log = [];
  work = makeLogging(work, log);

  work(1); // 1, добавлено в log
  work(5); // 5, добавлено в log

  for (var i = 0; i < log.length; i++) {
    console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
  }
})();
