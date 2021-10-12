function solve() {
    let addBtn = document.querySelector('#add');
    let task = document.querySelector('#task');
    let description = document.querySelector('#description');
    let date = document.querySelector('#date');
    let open = document.querySelector('section:nth-child(2) div:nth-child(2)');
    let inProgress = document.querySelector('#in-progress');
    let finished = document.querySelector('section:nth-child(4) div:nth-child(2)');

    addBtn.addEventListener('click', function (event) {
        event.preventDefault()
        if (task.value !== '' && description.value !== '' && date.value !== '') {
            let art1 = document.createElement('article');
            let h31 = document.createElement('h3');
            h31.textContent = task.value;
            let p1 = document.createElement('p');
            p1.textContent = 'Description: ' + description.value;
            let p2 = document.createElement('p');
            p2.textContent = 'Due Date: ' + date.value;

            let div1 = document.createElement('div');
            div1.className = 'flex';
            let btn1 = document.createElement("button");
            btn1.textContent = 'Start';
            btn1.className = 'green';
            let btn2 = document.createElement("button");
            btn2.textContent = 'Delete';
            btn2.className = 'red';
            div1.appendChild(btn1);
            div1.appendChild(btn2);

            art1.appendChild(h31)
            art1.appendChild(p1)
            art1.appendChild(p2)
            art1.appendChild(div1)

            btn1.addEventListener('click', function (event) {
                let target = event.target.parentElement.parentElement;
                let newArticle = document.createElement('article');
                let h3 = event.target.parentElement.parentElement.querySelector('h3');
                let p1 = event.target.parentElement.parentElement.querySelectorAll('p')[0];
                let p2 = event.target.parentElement.parentElement.querySelectorAll('p')[1];
                newArticle.appendChild(h3);
                newArticle.appendChild(p1);
                newArticle.appendChild(p2);

                let div2 = document.createElement('div');
                div2.className = 'flex';
                let btn3 = document.createElement("button");
                btn3.textContent = 'Delete';
                btn3.className = 'red';
                let btn4 = document.createElement("button");
                btn4.textContent = 'Finish';
                btn4.className = 'orange';
                div2.appendChild(btn3);
                div2.appendChild(btn4);

                newArticle.appendChild(div2);

                inProgress.appendChild(newArticle);
                target.remove();

                btn4.addEventListener('click', function (event) {
                    let target = event.target.parentElement.parentElement;
                    let newArticle = document.createElement('article');
                    let h3 = event.target.parentElement.parentElement.querySelector('h3');
                    let p1 = event.target.parentElement.parentElement.querySelectorAll('p')[0];
                    let p2 = event.target.parentElement.parentElement.querySelectorAll('p')[1];

                    newArticle.appendChild(h3);
                    newArticle.appendChild(p1);
                    newArticle.appendChild(p2);
                    finished.appendChild(newArticle)
                    target.remove();
                });

                btn3.addEventListener('click', function (event) {
                    let target = event.target.parentElement.parentElement;
                    target.remove();
                });
            });

            btn2.addEventListener('click', function (event) {
                let target = event.target.parentElement.parentElement
                target.remove()
            });

            open.appendChild(art1);
        }
    });
}