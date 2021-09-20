function solve() {
    let table = document.querySelector('tbody');
    let firtstTextArea = document.querySelector('textarea:nth-child(2)');
    let secondTextArea = document.querySelector('textarea:nth-child(5)');
    let generateBtn = document.querySelector('button:nth-child(3)');
    let buyBtn = document.querySelector('button:nth-child(6)');

    generateBtn.addEventListener('click', function (e) {
        data = JSON.parse(firtstTextArea.value);
        data.forEach(function (obj) {
            let newRow = document.createElement('tr');

            let newCol = document.createElement('td');
            let newImg = document.createElement('img');
            newImg.src = obj['img'];
            newCol.appendChild(newImg);

            let newCol2 = document.createElement('td');
            let newP = document.createElement('p');
            newP.textContent = obj['name'];
            newCol2.appendChild(newP);

            let newCol3 = document.createElement('td');
            let newP2 = document.createElement('p');
            newP2.textContent = obj['price'];
            newCol3.appendChild(newP2);

            let newCol4 = document.createElement('td');
            let newP3 = document.createElement('p');
            newP3.textContent = obj['decFactor'];
            newCol4.appendChild(newP3);

            let newCol5 = document.createElement('td');
            let newInput = document.createElement('input');
            newInput.type = 'checkbox';
            newCol5.appendChild(newInput);

            newRow.appendChild(newCol);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            newRow.appendChild(newCol4);
            newRow.appendChild(newCol5);
            table.appendChild(newRow);
        })
    });

    buyBtn.addEventListener('click', function (e) {
        let data = Array.from(document.querySelectorAll('input'));
        let filteredData = data.filter(el => el.checked);
        let boughtNames = [];
        let price = [];
        let decFac = [];
        filteredData.forEach(function (el) {
            let parrent = el.parentElement.parentElement;
            boughtNames.push(parrent.querySelectorAll('p')[0].textContent);
            price.push(Number(parrent.querySelectorAll('p')[1].textContent));
            decFac.push(Number(parrent.querySelectorAll('p')[2].textContent));
        });
        let totalPrice = price.reduce((acc, el) => acc + el, 0);
        let decFactor = decFac.reduce((acc, el) => acc + el, 0) / decFac.length
        secondTextArea.textContent += `Bought furniture: ${boughtNames.join(', ')}\n`;
        secondTextArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        secondTextArea.textContent += `Average decoration factor: ${decFactor}`;
    });
}