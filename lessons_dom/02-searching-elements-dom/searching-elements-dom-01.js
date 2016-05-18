// Link: https://learn.javascript.ru/searching-elements-dom#поиск-элементов

// Найдите (получите в переменную) в нём:

// 1. Все элементы label внутри таблицы. Должно быть 3 элемента.
var allLabels = document.getElementById('age-table').querySelectorAll('label');

// 2. Первую ячейку таблицы (со словом "Возраст").
var firstTD = document.getElementById('age-table').querySelector('td');

// 3. Вторую форму в документе.
var lastForm = document.body.lastElementChild;

// 4. Форму с именем search, без использования её позиции в документе.
var searchForm = document.querySelector('[name=search]');

// 5. Элемент input в форме с именем search. Если их несколько, то нужен первый.
var inputFormSearch = document.body.firstElementChild.querySelector('input');

// 6. Элемент с именем info[0], без точного знания его позиции в документе.
var infoZero = document.querySelector('[name="info[0]"]');

// 7. Элемент с именем info[0], внутри формы с именем search-person.
var infoZeroAgain = document.querySelector('[name="search-person"]').querySelector('[name="info[0]"]');
