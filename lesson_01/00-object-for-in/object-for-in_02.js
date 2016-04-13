// Артур Кузь
// Объекты: перебор свойств
// Сумма свойств

(function() {
  'use strict';
  
  var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250
  };
  
  function totalSalaries(obj) {
    var total = 0;
    
    for(var key in obj) {
      total += obj[key];
    }
    
    return total;
  }
  
  
  console.log(
    totalSalaries(salaries),
    totalSalaries(salaries) === 650
  );
  
})();
