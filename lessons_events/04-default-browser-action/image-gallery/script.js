'use strict';

class Gallery {
    constructor(options) {
        this._el = options.el;
        this._largeImg = this._el.querySelector('#largeImg');

        this._el.onclick = this._click.bind(this);
    }
    
    _click(event) {
        event.preventDefault();

        let link = event.target.closest('a');

        if(link) {
            let href = link.href;
            let title = link.title;

            this._largeImg.src = href;
            this._largeImg.alt = title;
        }
    }
}

new Gallery({
    el: document.getElementById('gallery')
});