// Артур Кузь
// Массив: методы
// Скопировать и отсортировать массив

(function() {
  'use strict';
  
  var arr = ["HTML", "JavaScript", "CSS"];

  var arrSorted = arr.slice().sort();
  
  console.log(arrSorted); // CSS, HTML, JavaScript
  console.log(arr); // HTML, JavaScript, CSS (без изменений)

})();
