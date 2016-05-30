var panes = document.querySelector('.js-panes');

panes.onclick = function(e) {
    if(e.target.className === 'remove-button') {
        e.target.parentNode.remove();
    }
}
