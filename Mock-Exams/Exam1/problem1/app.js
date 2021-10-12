window.addEventListener('load', solve);

function solve() {
    let modelElement = document.querySelector('#model');
    let priceElement = document.querySelector('#price');
    let yearElement = document.querySelector('#year');
    let descriptionElement = document.querySelector('#description');
    let addButton = document.querySelector('#add');
    let furnitureListElement = document.querySelector('#furniture-list');
    let totalElement = document.querySelector('.total-price');

    addButton.addEventListener('click', function (event) {
        event.preventDefault()
        if (modelElement.value !== '' &&
            yearElement.value !== '' &&
            Number(yearElement.value) > 0 &&
            priceElement.value !== '' &&
            Number(priceElement.value) > 0 &&
            descriptionElement.value !== '') {
            let newTr = document.createElement('tr');
            newTr.className = 'info';
            let newTd1 = document.createElement('td');
            newTd1.textContent = modelElement.value;
            let newTd2 = document.createElement('td');
            newTd2.textContent = Number(priceElement.value).toFixed(2);
            let newTd3 = document.createElement('td');
            let newButton1 = document.createElement('button');
            newButton1.className = 'moreBtn';
            newButton1.textContent = 'More Info';
            newButton1.addEventListener('click', function (event) {
                if (event.target.textContent === 'More Info') {
                    event.target.textContent = 'Less Info';
                } else {
                    event.target.textContent = 'More Info'
                }
                let target = event.target.parentElement.parentElement.nextElementSibling;
                if (target.style.display === 'none' || target.style.display === '') {
                    target.style.display = 'contents';
                } else {
                    target.style.display = 'none';
                }
            });
            let newButton2 = document.createElement('button');
            newButton2.className = 'buyBtn';
            newButton2.textContent = 'Buy it';
            newButton2.addEventListener('click', function (event) {
                let td1 = event.target.parentElement.parentElement;
                let td2 = event.target.parentElement.parentElement.nextElementSibling;
                let price = Number(event.target.parentElement.parentElement.querySelector('td:nth-child(2)').textContent);
                totalElement.textContent = (Number(totalElement.textContent) + price).toFixed(2);
                td1.remove();
                td2.remove();
            })

            newTd3.appendChild(newButton1);
            newTd3.appendChild(newButton2);
            let newTr2 = document.createElement('tr');
            newTr2.className = 'hide';
            let newTd4 = document.createElement('td');
            newTd4.textContent = `Year: ${Number(yearElement.value)}`;
            let newTd5 = document.createElement('td');
            newTd5.colSpan = '3';
            newTd5.textContent = `Description: ${descriptionElement.value}`

            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            newTr.appendChild(newTd3);
            newTr2.appendChild(newTd4);
            newTr2.appendChild(newTd5);

            furnitureListElement.appendChild(newTr);
            furnitureListElement.appendChild(newTr2);

            modelElement.value = '';
            yearElement.value = '';
            descriptionElement.value = '';
            priceElement.value = '';
        }
    });
}