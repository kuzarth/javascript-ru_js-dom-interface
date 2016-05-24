'use strict';

var menus = Array.from(document.querySelectorAll('.menu'));

class Menu {
    constructor(el) {
        let titleEl = el.querySelector('.menu-title');

        this._el = el;

        titleEl.onclick = this.toggle.bind(this);
//      titleEl.onclick = function() {
//        el.classList.toggle('active');
//      };
//            titleEl.onclick()
    }

    toggle() {
        this._el.classList.toggle('active');
    }
}

menus.forEach(function(menuEl) {
    let menu = new Menu(menuEl);

    menu.toggle();
});