window.addEventListener('load', solve);

function solve() {
    let genreEl = document.querySelector('#genre');
    let nameEl = document.querySelector('#name');
    let authorEl = document.querySelector('#author');
    let dateEl = document.querySelector('#date');
    let addBtnEl = document.querySelector('#add-btn');
    let totalLikesEl = document.querySelector('.likes p');
    let savedContainersEl = document.querySelector('.saved-container');
    let allHitsContainerEl = document.querySelector('.all-hits-container');

    function isDataValid() {
        if (genreEl.value !== '' && nameEl.value !== '' && dateEl.value !== '' && authorEl.value !== '') {
            return true;
        }
        return false;
    }

    function clearInputs() {
        let listOfInputs = [genreEl, nameEl, authorEl, dateEl];
        listOfInputs.forEach(el => el.value = '');
    }

    function likeBtnLogic(event) {
        let likes = Number(totalLikesEl.textContent.slice(13));
        totalLikesEl.textContent = `Total Likes: ${likes + 1}`;
        event.target.disabled = true;
    }

    function deleteBtnLogic(event) {
        let target = event.target.parentElement;
        target.remove();
    }

    function saveBtnLogic(event) {
        let currentDiv = event.target.parentElement;
        savedContainersEl.appendChild(currentDiv);
        let saveBtn = currentDiv.querySelector('.save-btn');
        let likeBtn = currentDiv.querySelector('.like-btn');
        saveBtn.remove();
        likeBtn.remove();
    }

    function createDiv() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('hits-info');
        let newImg = document.createElement('img');
        newImg.src = './static/img/img.png';
        newDiv.appendChild(newImg);
        let newH21 = document.createElement('h2');
        newH21.textContent = `Genre: ${genreEl.value}`;
        newDiv.appendChild(newH21);
        let newH22 = document.createElement('h2');
        newH22.textContent = `Name: ${nameEl.value}`;
        newDiv.appendChild(newH22);
        let newH23 = document.createElement('h2');
        newH23.textContent = `Author: ${authorEl.value}`;
        newDiv.appendChild(newH23);
        let newH31 = document.createElement('h3');
        newH31.textContent = `Date: ${dateEl.value}`;
        newDiv.appendChild(newH31);

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveBtnLogic);
        newDiv.appendChild(saveBtn);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', likeBtnLogic);
        newDiv.appendChild(likeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteBtnLogic);
        newDiv.appendChild(deleteBtn);

        return newDiv;
    }

    function addBtnLogic(event) {
        event.preventDefault();
        if (isDataValid()) {
            let newDiv = createDiv();
            allHitsContainerEl.appendChild(newDiv);
            clearInputs();
        }
    }

    addBtnEl.addEventListener('click', addBtnLogic)
}