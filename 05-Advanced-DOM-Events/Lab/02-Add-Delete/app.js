function addItem() {
    let list = document.querySelector('#items');
    let text = document.querySelector('#newItemText').value;

    if (text.length === 0) return;

    let newItem = document.createElement('li');
    let newA = document.createElement('a');
    newA.setAttribute('href', '#');
    newA.textContent = '[Delete]';
    newA.addEventListener("click", () => newItem.remove());
    newItem.textContent = text;
    newItem.appendChild(newA);
    list.appendChild(newItem);
    document.querySelector('#newItemText').value = '';
}