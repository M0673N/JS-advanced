function solve() {
    let selectTable = document.getElementById('selectMenuTo');
    let binary = selectTable.querySelector('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';
    let hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';
    selectTable.appendChild(hexadecimal);

    let mapper = {
        'binary': (num) => num.toString(2),
        'hexadecimal': (num) => num.toString(16).toUpperCase()
    }

    let button = document.querySelector('#container > button');
    button.addEventListener('click', () => {
        let input = Number(document.getElementById('input').value)
        let output = document.getElementById('result');

        output.value = mapper[selectTable.value](input);
    })
}