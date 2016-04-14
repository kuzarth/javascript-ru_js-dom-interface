// Артур Кузь
// Массив: методы
// Функция removeClass

(function() {
  'use strict';
  
  var obj = {
    className: 'open menu'
  };

  function removeClass(obj, cls) {
    var splitNames = obj.className ? obj.className.split(' ') : [];

    function filterClass(value) {
      return value !== cls;
    }

    var filteredClass = splitNames.filter(filterClass);

    obj.className = filteredClass.join(' ');
  }

  removeClass(obj, 'open'); // obj.className='menu'
  console.log(obj.className);

  removeClass(obj, 'blabla'); // без изменений (нет такого класса)
  console.log(obj.className);

  obj = {
    className: 'my menu menu'
  };

  removeClass(obj, 'menu');
  console.log(obj.className);

})();
