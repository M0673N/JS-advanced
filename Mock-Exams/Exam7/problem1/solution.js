function solve() {
    let [name, age, kind, currentOwner] = document.querySelectorAll('input');
    let inputs = [name, age, kind, currentOwner];
    let addBtn = document.querySelector('button');
    let adoptionTarget = document.querySelector('#adoption ul');
    let adoptedTarget = document.querySelector('#adopted ul');

    function clearInputs() {
        inputs.forEach(el => el.value = '');
    }

    function inputsAreValid() {
        if (name.value !== '' && age.value !== '' && kind.value !== '' && currentOwner.value !== '') {
            if (!isNaN(age.value)) {
                return true;
            }
        }
        return false;
    }

    function btn3Logic(event) {
        let target = event.target.parentElement;
        target.remove();
    }

    function btn2Logic(event) {
        let liTarget = event.target.parentElement.parentElement;
        let spanTarget = liTarget.querySelector('span');
        let divTarget = event.target.parentElement;
        let inputEl = event.target.parentElement.querySelector('input');
        if (inputEl.value !== '') {
            divTarget.remove();
            spanTarget.textContent = `New Owner: ${inputEl.value}`;
            let newBtn = document.createElement('button');
            newBtn.textContent = 'Checked';
            newBtn.addEventListener('click', btn3Logic);
            liTarget.appendChild(newBtn);
            adoptedTarget.appendChild(liTarget);
        }
    }

    function btn1Logic(event) {
        let liTarget = event.target.parentElement;
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.placeholder = 'Enter your names';
        let button = document.createElement('button');
        button.textContent = 'Yes! I take it!';
        button.addEventListener('click', btn2Logic);
        div.appendChild(input);
        div.appendChild(button);
        liTarget.appendChild(div);
        event.target.remove()
    }

    function buildLi() {
        let li1 = document.createElement('li');
        let p1 = document.createElement('p');
        p1.innerHTML = `<strong>${name.value}</strong> is a <strong>${Number(age.value)}</strong> year old <strong>${kind.value}</strong>`;
        li1.appendChild(p1);
        let span1 = document.createElement('span');
        span1.textContent = `Owner: ${currentOwner.value}`;
        li1.appendChild(span1);
        let btn1 = document.createElement('button');
        btn1.textContent = 'Contact with owner';
        btn1.addEventListener('click', btn1Logic);
        li1.appendChild(btn1)
        return li1;
    }

    addBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (inputsAreValid()) {
            let newLi = buildLi();
            adoptionTarget.appendChild(newLi);
            clearInputs()
        }
    })
}