// Артур Кузь
// Локальные переменные для объекта
// Строковый буфер с очисткой

(function() {
  'use strict';
  
  function makeBuffer() {
    var bufferStorage = '';

    function buffer(value) {
      return arguments.length ? bufferStorage += value : bufferStorage;
    }

    buffer.clear = function() {
      bufferStorage = '';
    }

    return buffer;
  }

  var buffer = makeBuffer();

  buffer("Тест");
  buffer(" тебя не съест ");
  console.log( buffer() ); // Тест тебя не съест

  buffer.clear();

  console.log( buffer() ); // ""

})();
