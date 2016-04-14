// Артур Кузь
// Массив: методы
// Добавить класс в строку

(function() {
  'use strict';
  
  var obj = {
    className: 'open menu'
  };

  function addClass(obj, cls) {
    var splitNames = obj.className ? obj.className.split(' ') : [];
    
    var check = splitNames.find(function(value) {
       return value === cls;
    });

    if(check) return;

    splitNames.push(cls);
    obj.className = splitNames.join(' ');
  }

  console.log(addClass(obj, 'new'), obj.className); // obj.className='open menu new'
  console.log(addClass(obj, 'open'), obj.className); // без изменений (класс уже существует)
  console.log(addClass(obj, 'me'), obj.className); // obj.className='open menu new me'
  console.log(obj.className);

})();
