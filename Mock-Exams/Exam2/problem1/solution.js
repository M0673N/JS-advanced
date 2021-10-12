window.addEventListener('load', solution);

function solution() {
    let name = document.getElementById('fname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    let code = document.getElementById('code');
    let submitBtn = document.getElementById('submitBTN');
    let Ulist = document.getElementById('infoPreview');
    let editBtn = document.getElementById('editBTN');
    let continueBtn = document.getElementById('continueBTN');

    submitBtn.addEventListener('click', function (event) {
        if (name.value && email.value) {
            let nameLi = document.createElement('li');
            nameLi.textContent = 'Full Name: ' + name.value;
            let emailLi = document.createElement('li');
            emailLi.textContent = 'Email: ' + email.value;
            let phoneLi = document.createElement('li');
            phoneLi.textContent = 'Phone Number: ' + phone.value;
            let addressLi = document.createElement('li');
            addressLi.textContent = 'Address: ' + address.value;
            let codeLi = document.createElement('li');
            codeLi.textContent = 'Postal Code: ' + code.value;

            Ulist.appendChild(nameLi);
            Ulist.appendChild(emailLi);
            Ulist.appendChild(phoneLi);
            Ulist.appendChild(addressLi);
            Ulist.appendChild(codeLi);

            name.value = '';
            email.value = '';
            phone.value = '';
            address.value = '';
            code.value = '';

            submitBtn.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;
        }
    });

    editBtn.addEventListener('click', function (event) {
        let inputs = Array.from(event.target.parentElement.parentElement.querySelectorAll('li'));
        console.log(inputs)
        name.value = inputs[0].textContent.slice(11);
        email.value = inputs[1].textContent.slice(7);
        phone.value = inputs[2].textContent.slice(14);
        address.value = inputs[3].textContent.slice(9);
        code.value = inputs[4].textContent.slice(13);

        inputs.forEach(el => el.remove());

        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;
    })

    continueBtn.addEventListener('click', function (event) {
        let body = document.querySelector('body');
        blockDiv = document.getElementById('block');
        blockDiv.remove();
        let newDiv = document.createElement('div');
        newDiv.id = 'block';
        body.appendChild(newDiv)
        let newH3 = document.createElement('h3');
        newH3.textContent = 'Thank you for your reservation!';
        newDiv.appendChild(newH3);
    });
}