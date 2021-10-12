function solve() {
    let authorEl = document.querySelector('#creator');
    let titleEl = document.querySelector('#title');
    let categoryEl = document.querySelector('#category');
    let contentEl = document.querySelector('#content');
    let createBtn = document.querySelector('.btn.create');
    let target = document.querySelector('.site-content section');
    let inputs = [authorEl, titleEl, categoryEl, contentEl];
    let archive = document.querySelector('ol');

    createBtn.addEventListener('click', function (event) {
        event.preventDefault();
        let newArticle = document.createElement('article');
        let newH1 = document.createElement('h1');
        newH1.textContent = titleEl.value;
        let p1 = document.createElement('p');
        p1.textContent = 'Category:'
        let strong1 = document.createElement('strong');
        strong1.textContent = categoryEl.value;
        p1.appendChild(strong1);
        newArticle.appendChild(newH1);
        newArticle.appendChild(p1);
        let p2 = document.createElement('p');
        p2.textContent = 'Creator:';
        let strong2 = document.createElement('strong');
        strong2.textContent = authorEl.value;
        p2.appendChild(strong2);
        newArticle.appendChild(p2);
        let p3 = document.createElement('p');
        p3.textContent = contentEl.value;
        newArticle.appendChild(p3);
        let newDiv = document.createElement('div');
        newDiv.className = 'buttons';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('delete')
        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.classList.add('btn');
        archiveBtn.classList.add('archive');
        newDiv.appendChild(deleteBtn);
        newDiv.appendChild(archiveBtn);
        newArticle.appendChild(newDiv);
        target.appendChild(newArticle);

        archiveBtn.addEventListener('click', function (event) {
            let targetEl = event.target.parentElement.parentElement.querySelector('h1');
            let data = targetEl.textContent;
            let newLi = document.createElement('li');
            newLi.textContent = data;
            archive.appendChild(newLi);

            targetEl = event.target.parentElement.parentElement;
            targetEl.remove()

            let liList = Array.from(archive.querySelectorAll('li'));
            let liListCopy = liList.slice();
            for (const el of liList) {
                el.remove()
            }
            liListCopy.sort((a, b) => a.textContent.localeCompare(b.textContent));
            liListCopy.forEach(function (el) {
                let newLi = document.createElement('li');
                newLi.textContent = el.textContent;
                archive.appendChild(newLi)
            });
        });

        deleteBtn.addEventListener('click', function (event) {
            targetEl = event.target.parentElement.parentElement;
            targetEl.remove()
        });

        inputs.forEach(el => el.value = '');
    });
}