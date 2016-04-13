// Артур Кузь
// Числа
// Формула Бине

(function() {
  'use strict';
  
  function fib(n) {
      var a = 1,
        b = 0,
        x;
      for (var i = 0; i < n; i++) {
        x = a + b;
        a = b;
        b = x;
      }
      return b;
    }

    function fibBinet(n) {
      return (Math.pow((1 + Math.sqrt(5))/2, n))/Math.sqrt(5);
    }

    console.log(
      fib(77),
      fib(77) == 5527939700884757
    );

    console.log(
      fibBinet(77),
      fibBinet(77) == 5527939700884757
    );
})();
