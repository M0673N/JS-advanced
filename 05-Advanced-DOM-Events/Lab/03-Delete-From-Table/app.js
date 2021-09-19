function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let data = Array.from(document.querySelectorAll('tbody td:last-child'));
    let found = false;

    data.forEach(function (el) {
        if (el.textContent === input.value) {
            el.parentNode.remove();
            found = true;
        }
    })

    let result = document.querySelector('#result');
    found ? result.textContent = 'Deleted' : result.textContent = 'Not found.';
}