// Артур Кузь
// Массив: методы
// Фильтрация массива "на месте"

(function() {
  'use strict';
  
  var arr = [5, 3, 8, 1];
  
  function filterRangeInPlace(arr, min, max) {
    arr = arr.forEach(function(val, i, arr) {
      if(val < min || val > max) {
        arr.splice(i, 1);
      }
    });
  }

  filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

  console.log(arr); // массив изменился: остались [3, 1]
})();
