function generateReport() {
    let output = document.getElementById('output');
    let selected = [];
    let allTableHeadings = document.querySelectorAll('th');

    for (let i = 0; i < allTableHeadings.length; i++) {
        if (allTableHeadings[i].querySelector('input').checked) {
            let obj = {name: allTableHeadings[i].querySelector('input').getAttribute('name'), value: i + 1};
            selected.push(obj);
        }
    }

    if (selected.length === 0) {
        return;
    }

    let allTableRows = document.querySelectorAll('tbody > tr');
    let result = [];
    for (let i = 0; i < allTableRows.length; i++) {
        let obj = {};
        for (const heading of selected) {
            let headingName = heading['name'];
            let data = document.querySelector(`tr:nth-child(${i + 1}n) > td:nth-child(${heading['value']}n)`).textContent;

            let miniObj = {};
            miniObj[headingName] = data;
            Object.assign(obj, miniObj);
        }
        result.push(obj);
    }
    output.textContent = JSON.stringify(result);
}