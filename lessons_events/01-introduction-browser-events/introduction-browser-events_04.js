var summary = document.querySelector('.summary');
var details = document.querySelector('.details');

summary.addEventListener('click', function(e) {
    if(summary.classList.contains('is-opened')) {
        summary.classList.remove('is-opened');
        details.setAttribute('hidden', 'true');
    } else {
        summary.classList.add('is-opened');
        details.removeAttribute('hidden');
    }
});