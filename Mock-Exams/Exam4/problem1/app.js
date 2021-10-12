function solution() {
    let addButton = document.querySelector('button');
    let inputEl = document.querySelector('input');
    let [listOfGifts, sentGifts, discardedGifts] = document.querySelectorAll('ul');

    addButton.addEventListener('click', function (event) {
        let newLi = document.createElement('li');
        newLi.textContent = inputEl.value;
        newLi.className = 'gift';
        listOfGifts.appendChild(newLi);
        inputEl.value = '';
        let newButton1 = document.createElement('button');
        newButton1.id = 'sendButton';
        newButton1.textContent = 'Send';
        let newButton2 = document.createElement('button');
        newButton2.id = 'discardButton';
        newButton2.textContent = 'Discard';
        newLi.appendChild(newButton1);
        newLi.appendChild(newButton2);

        let data = Array.from(listOfGifts.querySelectorAll('li')).slice();
        data.sort(function (a, b) {
            return a.textContent.localeCompare(b.textContent);
        });
        for (const element of listOfGifts.querySelectorAll('li')) {
            element.remove();
        }
        for (const el of data) {
            listOfGifts.appendChild(el);
        }

        newButton1.addEventListener('click', function (event) {
            let newLiToSend = document.createElement('li');
            newLiToSend.textContent = event.target.parentElement.textContent.slice(0, -11);
            newLiToSend.className = 'gift';

            sentGifts.appendChild(newLiToSend);
            event.target.parentElement.remove();
        });

        newButton2.addEventListener('click', function (event) {
            let newLiToDiscard = document.createElement('li');
            newLiToDiscard.textContent = event.target.parentElement.textContent.slice(0, -11);
            newLiToDiscard.className = 'gift';

            discardedGifts.appendChild(newLiToDiscard);
            event.target.parentElement.remove();
        });
    });
}