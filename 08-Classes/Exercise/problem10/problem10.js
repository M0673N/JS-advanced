class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this.div1) {
            this.div1.className = this._online ? 'title online' : 'title';
        }
    }

    render(id) {
        let article = document.createElement('article');
        this.div1 = document.createElement('div');
        let button = document.createElement('button');
        this.div1.className = 'title';
        this.div1.textContent = `${this.firstName} ${this.lastName}`;
        this.div1.className = this.online ? 'title online' : 'title';
        button.textContent = 'ℹ';
        button.addEventListener('click', function (e) {
            let target = e.target.parentElement.parentElement.querySelector('.info');
            target.style.display = target.style.display === 'none' ? 'block' : 'none';
        });
        this.div1.appendChild(button);
        let div2 = document.createElement('div');
        div2.className = 'info';
        let span1 = document.createElement('span');
        span1.textContent = `\u260E ${this.phone}`;
        let span2 = document.createElement('span');
        span2.textContent = `✉ ${this.email}`;
        div2.appendChild(span1);
        div2.appendChild(span2);
        div2.style.display = 'none';
        article.appendChild(this.div1);
        article.appendChild(div2);

        let target = document.querySelector(`#${id}`);
        target.appendChild(article)
    }
}

// let contacts = [
//     new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
//     new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
//     new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
// ];
// contacts.forEach(c => c.render('main'));
//
// // After 1 second, change the online status to true
// setTimeout(() => contacts[1].online = true, 2000);