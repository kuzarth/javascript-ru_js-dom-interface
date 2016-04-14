// Артур Кузь
// Массив: методы
// Вывести односвязный список

(function() {
  'use strict';
  
  var list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(item) {
    if(item === null) return;
    
    console.log(item.value);
    return printList(item.next);
  }
  
  printList(list);

})();
