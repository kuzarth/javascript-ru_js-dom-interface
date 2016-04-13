// Артур Кузь
// Строки
// Усечение строки

(function() {
  'use strict';
  
  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 3) + '...' : str;
  }

  console.log(
    truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
    truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)== "Вот, что мне хоте...");

  console.log(
    truncate("Всем привет!", 20),
    truncate("Всем привет!", 20) == "Всем привет!"
  );

})();
