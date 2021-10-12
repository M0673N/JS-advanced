function solution() {
    let addButton = document.querySelector('button');
    let inputs = document.querySelector('input');
    let listOfGifts = document.querySelector('section:nth-child(2) ul');
    let sentGifts = document.querySelector('section:nth-child(3) ul');
    let discardedGifts = document.querySelector('section:nth-child(4) ul');

    function sendButtonFunctionality(event) {
        let newLi = document.createElement('li');
        newLi.className = 'gift';
        let target = event.target.parentElement;
        newLi.textContent = target.textContent.slice(0, -11);
        sentGifts.appendChild(newLi);
        target.remove()
    }

    function discardButtonFunctionality(event) {
        let newLi = document.createElement('li');
        newLi.className = 'gift';
        let target = event.target.parentElement;
        newLi.textContent = target.textContent.slice(0, -11);
        discardedGifts.appendChild(newLi);
        target.remove()
    }

    function createLi() {
        let newLi = document.createElement('li');
        newLi.className = 'gift';
        newLi.textContent = inputs.value;
        let newBtn1 = document.createElement('button');
        newBtn1.id = 'sendButton';
        newBtn1.textContent = 'Send';
        newBtn1.addEventListener('click', sendButtonFunctionality);
        let newBtn2 = document.createElement('button');
        newBtn2.id = 'discardButton';
        newBtn2.textContent = 'Discard';
        newBtn2.addEventListener('click', discardButtonFunctionality)
        newLi.appendChild(newBtn1);
        newLi.appendChild(newBtn2);
        return newLi;
    }

    function sortData() {
        let data = Array.from(listOfGifts.querySelectorAll('li'));
        data.sort((a, b) => a.textContent.localeCompare(b.textContent));
        data.forEach(el => el.remove())
        data.forEach(el => listOfGifts.appendChild(el));
    }

    function addButtonFunctionality() {
        let newLi = createLi();
        listOfGifts.appendChild(newLi);
        sortData()
        inputs.value = '';
    }

    addButton.addEventListener('click', addButtonFunctionality);
}