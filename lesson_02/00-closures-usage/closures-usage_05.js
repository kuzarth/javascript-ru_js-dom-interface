// Артур Кузь
// Локальные переменные для объекта
// Фильтрация через функцию

(function() {
  'use strict';
  
  /* .. ваш код для filter, inBetween, inArray */

  function filter(arr, func) {
    return arr.filter(func);
  }

  function inBetween(a, b) {
    return function(el) {
      return el >= a && el <= b;
    }
  }

  function inArray(arr) {
    return function(el) {
      return arr.indexOf(el) !== -1;

      // return arr.some(function(element) {
      //   return element === el;
      // });
    }
  }

  var arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(filter(arr, function(a) {
    return a % 2 == 0
  })); // 2,4,6

  console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

  console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2

})();

