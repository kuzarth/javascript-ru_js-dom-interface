// Артур Кузь
// Числа
// Бесконечный цикл по ошибке

(function() {
  'use strict';
  
  var i = 0;
  
  while (i <= 10) {
    i += 0.2;
    console.log(i.toFixed(20));
  }
  
})();
