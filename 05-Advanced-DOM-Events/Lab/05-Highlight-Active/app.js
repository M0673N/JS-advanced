function focused() {
    let divs = Array.from(document.querySelectorAll('div div'));
    divs.forEach(function (div) {
        let inputField = div.querySelector('input');
        inputField.addEventListener('focus', (e) => {
            div.setAttribute('class', 'focused');
        });
        inputField.addEventListener('blur', (e) => {
            div.removeAttribute('class', 'focused');
        });
    });
};