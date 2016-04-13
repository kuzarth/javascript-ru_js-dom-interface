// Артур Кузь
// Массивы с числовыми индексами
// Создание массива

(function() {
  'use strict';
  
  var styles  = ['Джаз', 'Блюз'];
  console.log(styles);

  styles.push('Рок-н-Ролл');
  console.log(styles);

  replaceNextToLastArrayElement(styles, 'Классика');
  console.log(styles);

  alert(styles.shift());
  console.log(styles);

  styles.unshift('Рэп', 'Регги');
  console.log(styles);

  function replaceNextToLastArrayElement(arr, value) {
    return arr[arr.length - 2] = value;
  }
  
})();
