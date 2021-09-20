function addItem() {
    let text = document.querySelector('#newItemText');
    let value = document.querySelector('#newItemValue');
    let selector = document.querySelector('#menu');

    let newItem = document.createElement('option');
    newItem.textContent = text.value;
    newItem.value = value.value;
    selector.appendChild(newItem);

    text.value = '';
    value.value = '';
}