function solve() {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    let sentences = input.split('.').filter(x => x.length > 0);
    let paragraph = '<p>';
    for (let i = 1; i <= sentences.length; i++) {
        if (i % 3 === 0 || i === sentences.length) {
            paragraph += sentences[i - 1] + '.</p>\n';
            output.innerHTML += paragraph;
            paragraph = '<p>';
        } else {
            paragraph += sentences[i - 1] + '.';
        }
    }
}