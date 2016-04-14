// Артур Кузь
// Массив: методы
// Сортировать в обратном порядке

(function() {
  'use strict';
  
  var arr = [5, 2, 1, -10, 8];
  
  arr.sort(compareNumeric).reverse();

  function compareNumeric(a, b) {
    return a - b;
  }
  
  console.log(arr); // 8, 5, 2, 1, -10

})();
