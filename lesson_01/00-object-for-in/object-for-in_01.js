// Артур Кузь
// Объекты: перебор свойств
// Определите, пуст ли объект

(function() {
  'use strict';
  
  console.log('Вариант 1:');
  
  function isEmpty(obj) {
    return !Object.keys(obj).length;
  }

  var schedule = {};

  console.log(isEmpty(schedule)); // true

  schedule["8:30"] = "подъём";

  console.log(isEmpty(schedule)); // false

})();


// Самый кроссбраузерный вариант из книжки
(function() {
  'use strict';
  
  console.log('Вариант 2:');

  function isEmpty(obj) {
    var counter = 0;

    for (var key in obj) {
      counter++;
    }
    
    return !counter;
  }

  var schedule = {};

  console.log(isEmpty(schedule)); // true

  schedule["8:30"] = "подъём";

  console.log(isEmpty(schedule)); // false
  
})();
