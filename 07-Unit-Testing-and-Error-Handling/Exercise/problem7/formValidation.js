function validate() {
    let usernameEl = document.querySelector('#username');
    let passwordEl = document.querySelector('#password');
    let confirmPasswordEl = document.querySelector('#confirm-password');
    let emailEl = document.querySelector('#email');
    let companyCheckboxEl = document.querySelector('#company');
    let companyNumEl = document.querySelector('#companyNumber');
    let submitBtn = document.querySelector('#submit');
    let usernameRegex = /\b[A-Za-z0-9]{3,20}\b/;
    let passwordRegex = /\b[A-Za-z0-9_]{5,15}\b/;
    let emailRegex = /.*@.*\..*/;
    let validDiv = document.querySelector('#valid');
    let passed = [0, 0, 0, 0];

    companyCheckboxEl.addEventListener('change', function (e) {
        if (companyCheckboxEl.checked) {
            document.querySelector('#companyInfo').style.display = 'block';
        } else {
            document.querySelector('#companyInfo').style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (!usernameRegex.test(usernameEl.value)) {
            usernameEl.style.borderColor = 'red';
            passed[0] = 0;
        } else {
            usernameEl.style.borderColor = '';
            passed[0] = 1;
        }

        if (!passwordRegex.test(passwordEl.value)) {
            passwordEl.style.borderColor = 'red';
            passed[1] = 0;
        } else {
            passwordEl.style.borderColor = '';
            passed[1] = 1;
        }

        if (!passwordRegex.test(passwordEl.value) || passwordEl.value !== confirmPasswordEl.value) {
            confirmPasswordEl.style.borderColor = 'red';
            passwordEl.style.borderColor = 'red';
            passed[3] = 0;
        } else {
            confirmPasswordEl.style.borderColor = '';
            passwordEl.style.borderColor = '';
            passed[3] = 1;
        }

        if (!emailRegex.test(emailEl.value)) {
            emailEl.style.borderColor = 'red';
            passed[2] = 0;
        } else {
            emailEl.style.borderColor = '';
            passed[2] = 1;
        }

        if (companyCheckboxEl.checked) {
            if (Number(companyNumEl.value) < 1000 || Number(companyNumEl.value) > 9999) {
                companyNumEl.style.borderColor = 'red';
                passed[0] = 0;
            } else {
                companyNumEl.style.borderColor = '';
            }
        }

        if (passed.every((el) => el === 1)) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    });
}