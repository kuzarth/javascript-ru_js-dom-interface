// Артур Кузь
// Локальные переменные для объекта
// Армия функций

(function() {
  'use strict';
  
  function makeArmy() {

    var shooters = [];

    function createShooter(num) {
      return function () {
        return console.log(num);
      }
    }

    for (var i = 0; i < 10; i++) {
      var shooter = createShooter(i);

      shooters.push(shooter);
    }

    return shooters;
  }

  var army = makeArmy();

  army[0](); // стрелок выводит 10, а должен 0
  army[5](); // стрелок выводит 10...
  // .. все стрелки выводят 10 вместо 0,1,2...9

})();
