function solve() {
    let check = document.querySelectorAll('button')[0];
    let clear = document.querySelectorAll('button')[1];
    let cells = Array.from(document.querySelectorAll('tbody input'));
    let table = document.querySelector('table');
    let solved = document.querySelector('#check p');
    let flag = true;

    check.addEventListener('click', function (e) {

        let row1 = new Set();
        row1.add(cells[0].value);
        row1.add(cells[1].value);
        row1.add(cells[2].value);
        let row2 = new Set();
        row2.add(cells[3].value);
        row2.add(cells[4].value);
        row2.add(cells[5].value);
        let row3 = new Set();
        row3.add(cells[6].value);
        row3.add(cells[7].value);
        row3.add(cells[8].value);

        let col1 = new Set();
        col1.add(cells[0].value);
        col1.add(cells[3].value);
        col1.add(cells[6].value);
        let col2 = new Set();
        col2.add(cells[1].value);
        col2.add(cells[4].value);
        col2.add(cells[7].value);
        col3 = new Set();
        col3.add(cells[2].value);
        col3.add(cells[5].value);
        col3.add(cells[8].value);

        result = [row1, row2, row3, col1, col2, col3];
        result.forEach(el => {
            if (el.size !== 3) {
                table.style.border = '2px solid red';
                solved.textContent = 'NOP! You are not done yet...';
                solved.style.color = 'red';
                flag = false;
            }
        });
        if (flag) {
            table.style.border = '2px solid green';
            solved.textContent = 'You solve it! Congratulations!';
            solved.style.color = 'green';
        }
        flag = true;
    });

    clear.addEventListener('click', (e) => {
        cells.forEach(cell => cell.value = '');
        table.style.border = 'none';
        solved.textContent = '';
    })
}