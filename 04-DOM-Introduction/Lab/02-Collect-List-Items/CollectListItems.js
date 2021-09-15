function extractText() {
    let items = document.querySelectorAll('#items li');
    for (const item of items) {
        document.querySelector('#result').textContent += item.textContent + '\n'
    }
    document.querySelector('#result').textContent.trimRight()
}