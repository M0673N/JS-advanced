function solve() {
    let [nameEl, dateEl] = document.querySelectorAll('input');
    let selectEl = document.querySelector('select');
    let addButtonEl = document.querySelector('button');
    let modulesEl = document.querySelector('div.modules');

    function clearInputs() {
        nameEl.value = '';
        dateEl.value = '';
        selectEl.value = 'Select module';
    }

    function btnLogic(event) {
        let deleteTarget = event.target.parentElement
        let deleteListTarget = event.target.parentElement.parentElement
        let deleteDivTarget = event.target.parentElement.parentElement.parentElement
        deleteTarget.remove()
        if (Array.from(deleteListTarget.querySelectorAll('li')).length === 0) {
            deleteDivTarget.remove()
        }
    }

    function createLi() {
        let li1 = document.createElement('li');
        li1.className = 'flex';
        let h41 = document.createElement('h4');
        let time = dateEl.value.replace(/-/g, '/');
        time = time.replace(/T/g, ' - ');
        h41.textContent = `${nameEl.value} - ${time}`;
        let btn1 = document.createElement('button');
        btn1.className = 'red';
        btn1.textContent = 'Del';
        li1.appendChild(h41);
        li1.appendChild(btn1);
        btn1.addEventListener('click', btnLogic);
        return li1;
    }

    function createDiv() {
        let div1 = document.createElement('div');
        div1.className = 'module';
        let h31 = document.createElement('h3');
        h31.textContent = `${selectEl.value.toUpperCase()}-MODULE`;
        div1.appendChild(h31);
        let ul1 = document.createElement('ul');
        let li1 = createLi();
        ul1.appendChild(li1);
        div1.appendChild(ul1);
        return div1;
    }

    function sortData(target) {
        let liList = Array.from(target.querySelectorAll('li'));
        let liListCopy = liList.slice()
        liListCopy.forEach(el => el.remove());
        liList.sort((a, b) => a.querySelector('h4').textContent.slice(-18).localeCompare(b.querySelector('h4').textContent.slice(-18)));
        liList.forEach(el => target.appendChild(el));
    }

    addButtonEl.addEventListener('click', function (event) {
        event.preventDefault();
        if (nameEl.value !== '' && dateEl.value !== '' && selectEl.value !== 'Select module') {
            let moduleDivs = Array.from(document.querySelectorAll('div.module'));
            let target = moduleDivs.find(el => el.querySelector('h3').textContent === `${selectEl.value.toUpperCase()}-MODULE`);
            if (target) {
                target = target.querySelector('ul');
                let li1 = createLi();
                target.appendChild(li1);
                sortData(target);
                clearInputs();
            } else {
                let div1 = createDiv();
                modulesEl.appendChild(div1);
                clearInputs();
            }
        }
    })
};