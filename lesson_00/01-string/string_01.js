// Артур Кузь
// Строки
// Проверьте спам

(function() {
  'use strict';
  
  function checkSpam(str) {
    var strLC = str.toLowerCase();
    
    return (~strLC.indexOf('viagra') || ~strLC.indexOf('xxx')) ? true : false;
  }

  console.log(checkSpam('buy ViAgRA now') == true);
  console.log(checkSpam('free xxxxx') == true);
  console.log(checkSpam("innocent rabbit") == false);

})();
