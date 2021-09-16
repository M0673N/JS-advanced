function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let text = document.getElementById('searchField');
        let rows = document.querySelectorAll('tbody > tr');

        for (const row of rows) {
            row.classList.remove('select');
        }

        for (const row of rows) {
            for (const col of row.querySelectorAll('td')) {
                if (col.textContent.includes(text.value)) {
                    row.classList.add('select');
                    break;
                }
            }
        }
        text.value = ''
    }
}