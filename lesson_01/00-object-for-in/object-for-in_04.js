// Артур Кузь
// Объекты: перебор свойств
// Умножьте численные свойства на 2

(function() {
  'use strict';

  // до вызова
  var menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  function multiplyNumeric(obj) {

    for(var key in obj) {
      if(isNumeric(obj[key])) {
        obj[key] *= 2;
      }
    }

    return obj;
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  console.log(multiplyNumeric(menu));

})();
