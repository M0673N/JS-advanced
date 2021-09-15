function sumTable() {
    let firstTable = document.querySelector('table');
    let values = firstTable.querySelectorAll('td:nth-child(even):not(#sum)');
    let sum = 0;
    for (const value of values) {
        sum += Number(value.textContent)
    }
    document.querySelector('#sum').textContent = sum
}