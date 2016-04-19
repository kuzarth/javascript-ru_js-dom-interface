// Артур Кузь
// Локальные переменные для объекта
// Сумма через замыкание

(function() {
  'use strict';
  
  function sum(a) {

    return function(b) {
      return a + b;
    };
  }

  console.log(sum(1)(4)); 

})();
