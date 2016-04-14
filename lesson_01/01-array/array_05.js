// Артур Кузь
// Массивы с числовыми индексами
// Создайте калькулятор для введённых значений

(function() {
  'use strict';

  var nums = [];

  while(true) {
    var input = prompt('Введите число', 0);

    if(!isNumeric(input) || input === '' || input === null) {
        break;
    }

    nums.push(+input);
  }

  var sum = nums.reduce(function (prev, curr) {
    return prev + curr;
  }, 0);

  return alert(sum);

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

})();
