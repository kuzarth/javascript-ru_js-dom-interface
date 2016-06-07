'use strict';

class Gallery {
    constructor(options) {
        this._el = options.el;
        this._largeImg = this._el.querySelector('#largeImg');

        this._el.onclick = this._click.bind(this);
    }
    
    _click(event) {
        let link = event.target.closest('a');

        if(!link) {
            return;
        }

        event.preventDefault();

        this._showImage(link);
    }

    _showImage(link) {
        this._largeImg.src = link.href;
        this._largeImg.alt = link.title;
    }
}

new Gallery({
    el: document.getElementById('gallery')
});