function create(words) {
    let output = document.querySelector('#content');
    words.forEach(function (str) {
        let newDiv = document.createElement('div');
        let newParagraph = document.createElement('p');
        newDiv.appendChild(newParagraph);
        newParagraph.textContent = str;
        output.appendChild(newDiv);
        newParagraph.style.display = 'none';
        newDiv.addEventListener('click', function (e) {
            newParagraph.style.display = 'block';
        });
    });
}