// Артур Кузь
// Массив: методы
// Сортировка объектов

(function() {
  'use strict';
  
  
  var vasya = { name: "Вася", age: 23 };
  var masha = { name: "Маша", age: 18 };
  var vovochka = { name: "Вовочка", age: 6 };

  var people = [ vasya , masha , vovochka ];
  
  people.sort(function(a, b) {
    return compareNumeric(a.age, b.age);
  });
  
  function compareNumeric(a, b) {
    return a - b;
  }
  // теперь people: [vovochka, masha, vasya]
  console.log(people[0].age); // 6
  console.log(people); // 6

})();
