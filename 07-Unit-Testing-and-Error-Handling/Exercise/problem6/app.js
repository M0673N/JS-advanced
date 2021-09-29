function validate() {
    let input = document.querySelector('#email');
    input.addEventListener('change', (e) => {
        let regex = /[a-z]+@[a-z]+\.[a-z]+/g;
        if (!regex.test(input.value)) {
            input.className = 'error';
        } else {
            input.className = '';
        }
    });
}