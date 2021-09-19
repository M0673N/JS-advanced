function validate() {
    let field = document.querySelector('#email');
    let re = /[a-z]+@[a-z]+\.[a-z]+/;
    field.addEventListener('change', function (e) {
        if (re.test(field.value)) {
            field.removeAttribute('class', 'error');
        } else {
            field.setAttribute('class', 'error');
        }
    })
}