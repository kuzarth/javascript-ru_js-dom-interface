// Артур Кузь
// Локальные переменные для объекта
// Функция - строковый буфер

(function() {
  'use strict';
  
  function makeBuffer() {
    var bufferStorage = '';

    function buffer(value) {
      return arguments.length ? bufferStorage += value : bufferStorage;
    }

    return buffer;
  }

  var buffer = makeBuffer();

  // добавить значения к буферу
  buffer('Замыкания');
  buffer(' Использовать');
  buffer(' Нужно!');

  // получить текущее значение
  console.log(buffer()); // Замыкания Использовать Нужно!

  var buffer2 = makeBuffer();
  buffer2(0);
  buffer2(1);
  buffer2(0);

  console.log(buffer2()); // '010'

  var buffer2 = makeBuffer();
  buffer2(null);
  buffer2(NaN);
  buffer2(undefined);

  console.log(buffer2()); // '010'

})();

/* 
  Вопросы
  
  1. Почему в решении из учебника сравнение производится через `==`, а не через `===`?
  2. Если проименовать внутреннюю функцию и вернуть её в конце функции, будет ли это проще/выгодней в перспективе? 
  Скажем, если захочется её расширить и присвоить ей методы.
  3. Плохо ли в данном примере использовать тернарный оператор? Я решил что читаемость кода тут не страдает, т.к. условие простое.

*/
