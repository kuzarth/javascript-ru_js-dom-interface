// Артур Кузь
// Массивы с числовыми индексами
// Получить последний элемент массива

(function() {
  'use strict';
  
  var goods = [0,1,2,3,4,5,6,7,8,9];

  function findLastArrayElement(arr) {
    return arr[arr.length - 1];
  }

  console.log(findLastArrayElement(goods));

})();
