function solve() {
    let text = document.getElementById('text').value;
    let casing = document.getElementById('naming-convention').value;

    function transform() {
        let result = '';
        for (let element of text.split(' ')) {
            result += element[0].toUpperCase() + element.slice(1).toLowerCase();
        }
        return result;
    }

    if (casing === "Pascal Case") {
        processedText = transform();
        document.getElementById('result').textContent = processedText;
    } else if (casing === "Camel Case") {
        processedText = transform();
        processedText = processedText[0].toLowerCase() + processedText.slice(1);
        document.getElementById('result').textContent = processedText;
    } else {
        document.getElementById('result').textContent = 'Error!'
    }
}