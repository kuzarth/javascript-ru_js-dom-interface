// var widget = document.querySelector('.js-widget');

// var widgetItems = widget.querySelectorAll('li');
// var widgetItemsQuantity = widgetItems.length;
// var widgetItemWidth = widgetItems[0].offsetWidth;

// var widgetContainer = widget.querySelector('.js-widget-container');
// var widgetContainerWidth = widgetContainer.offsetWidth;
// var widgetContainerPositionMax = (widgetItemsQuantity*widgetItemWidth) - widgetContainerWidth;
// var widgetContainerPosition = 0;

// console.log(widgetItemsQuantity, widgetContainerWidth, widgetItemWidth, widgetContainerPositionMax);

// widget.onclick = function(e) {
//     console.dir(e.target);
//     console.log(e.target.dataset.dir);

//     if(e.target.dataset.dir === "left") {
//         console.log('slide left');

//         if(widgetContainerPosition-widgetContainerWidth <= 0) {
//             widgetContainerPosition = 0;
//         } else {
//             widgetContainerPosition -= widgetContainerWidth;
//         }

//         console.log(widgetContainerPosition);

//         widgetContainer.querySelector('ul').style.transform = 'translate3d('+(-widgetContainerPosition)+'px , 0,  0)';
//     }

//     if(e.target.dataset.dir === "right") {
//         console.log('slide right');
        
//         if(widgetContainerPosition+widgetContainerWidth >= widgetContainerPositionMax) {
//             widgetContainerPosition = widgetContainerPositionMax;
//         } else {
//             widgetContainerPosition += widgetContainerWidth;
//         }

//         console.log(widgetContainerPosition);
        
//         widgetContainer.querySelector('ul').style.transform = 'translate3d('+(-widgetContainerPosition)+'px , 0,  0)';
//     }
// }

'use strict';

class Widget {
    constructor(el) {
        
        this._el = el;

        this._el.widgetItems = el.querySelectorAll('li');
        this._el.widgetContainerPosition = 0;

        this._el.widgetItemsQuantity = this._el.widgetItems.length;
        this._el.widgetItemWidth = this._el.widgetItems[0].offsetWidth;

        this._el.widgetContainer = el.querySelector('.js-widget-container');
        this._el.widgetContainerWidth = this._el.widgetContainer.offsetWidth;
        this._el.widgetContainerPositionMax = (this._el.widgetItemsQuantity * this._el.widgetItemWidth) - this._el.widgetContainerWidth;
        
        el.onclick = this.slide.bind(this);
    }

    slide(e) {

        if(e.target.dataset.dir === "left") {

            if(this._el.widgetContainerPosition - this._el.widgetContainerWidth <= 0) {
                    this._el.widgetContainerPosition = 0;
            } else {
                this._el.widgetContainerPosition -= this._el.widgetContainerWidth;
            }

            this._el.widgetContainer.querySelector('ul').style.transform = 'translate3d('+(-this._el.widgetContainerPosition)+'px , 0,  0)';
        }

        if(e.target.dataset.dir === "right") {
            
            if(this._el.widgetContainerPosition + this._el.widgetContainerWidth >= this._el.widgetContainerPositionMax) {
                this._el.widgetContainerPosition = this._el.widgetContainerPositionMax;
            } else {
                this._el.widgetContainerPosition += this._el.widgetContainerWidth;
            }

            this._el.widgetContainer.querySelector('ul').style.transform = 'translate3d('+(-this._el.widgetContainerPosition)+'px , 0,  0)';
        }
    }
}

let widget = new Widget(document.querySelector('.js-widget'));
