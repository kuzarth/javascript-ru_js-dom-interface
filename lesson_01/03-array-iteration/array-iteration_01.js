// Артур Кузь
// Массив: перебирающие методы
// Перепишите цикл через map

(function() {
  'use strict';
  
  var arr = ["Есть", "жизнь", "на", "Марсе"];

  var arrLength = arr.map(function (val) {
      return val.length;
  })

  console.log(arrLength); // 4,5,2,5

})();
