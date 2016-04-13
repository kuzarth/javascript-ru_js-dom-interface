// Артур Кузь
// Массивы с числовыми индексами
// Добавить новый элемент в массив

(function() {
  'use strict';
  
  var goods = [0,1,2,3,4,5,6,7,8,9];

  goods.push('Компьютер');

  function findLastArrayElement(arr) {
    return arr[arr.length - 1];
  }

  console.log(findLastArrayElement(goods));

})();
