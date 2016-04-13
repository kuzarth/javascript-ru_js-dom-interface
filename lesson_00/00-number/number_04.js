// Артур Кузь
// Числа
// Как получить дробную часть

(function() {
  'use strict';
  
  function getDecimal(num) {
      return Math.abs(+(num - Math.round(num)).toFixed(10));
    }

    console.log(getDecimal(12.345));
    console.log(getDecimal(1.2));
    console.log(getDecimal(-1.2));
    console.log(getDecimal(5));
})();
