function attachGradientEvents() {
    let output = document.querySelector('#result');
    let box = document.querySelector('#gradient');

    box.addEventListener('mousemove', function (e) {
        current = e.offsetX;
        total = e.target.clientWidth - 1;
        output.textContent = `${Math.trunc((current / total) * 100)}%`
    })

    box.addEventListener('mouseout', function (e) {
        output.textContent = '';
    })
}