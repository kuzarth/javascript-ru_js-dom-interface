// Артур Кузь
// Массивы с числовыми индексами
// Создайте калькулятор для введённых значений

(function() {
  'use strict';
  
  function calcFormPromt(argument) {
    var input = promt('Введите число', '');
    var arr = [input];
    var sum = 0;

    while(isNumeric(input)) {
      input = promt('Введите число', '');
      arr.push(input);
    }

    for(var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }

    return alert(sum);
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

})();
