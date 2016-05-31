var tree = document.querySelector('.tree');

tree.onclick = function(e) {
    if(e.target.tagName === 'SPAN' && e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.toggle('hidden');
    }
}
