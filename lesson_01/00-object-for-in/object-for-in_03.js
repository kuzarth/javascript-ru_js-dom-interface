// Артур Кузь
// Объекты: перебор свойств
// Свойство с наибольшим значением

(function() {
  'use strict';

  var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };

  function biggerSalary (obj) {
    var salariesArray = [];
    
    for(var key in obj) {
      salariesArray.push(obj[key]);
    }
    
    return Math.max.apply(null, salariesArray);
  }

  console.log(
    biggerSalary(salaries),
    biggerSalary(salaries) === 300
  );
   
})();

/*
  Reference:
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
*/
