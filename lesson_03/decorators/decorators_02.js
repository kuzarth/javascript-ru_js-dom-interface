// Артур Кузь
// Тема - Методы объектов и контекст вызова
// Задача - Кеширующий декоратор

(function() {
  'use strict';

  function f(x) {
    return Math.random() * x; // random для удобства тестирования
  }

  function makeCaching(f) {
    return function () {
      
    }
  }

  f = makeCaching(f);

  var a, b;

  a = f(1);
  b = f(1);
  alert( a == b ); // true (значение закешировано)

  b = f(2);
  alert( a == b ); // false, другой аргумент => другое значение
})();
