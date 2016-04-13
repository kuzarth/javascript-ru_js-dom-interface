// Артур Кузь
// Массивы с числовыми индексами
// Получить случайное значение из массива

(function() {
  'use strict';
  
  var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

  function getRandormArrayItem (arr) {
    var rand = 0 + Math.floor(Math.random() * (arr.length));

    return arr[rand];
  }

  console.log(getRandormArrayItem(arr));
  
})();
