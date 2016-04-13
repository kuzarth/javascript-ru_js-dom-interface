// Артур Кузь
// Строки
// Выделить число

(function() {
  'use strict';
  
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }

  console.log(
    extractCurrencyValue('$120'),
    extractCurrencyValue('$120') === 120
  );

})();
