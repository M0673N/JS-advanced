function toggle() {
    let button = document.querySelector('.button');
    let extra = document.getElementById('extra');

    if (button.textContent === 'More') {
        extra.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extra.style.display = 'none';
        button.textContent = 'More';
    }
}