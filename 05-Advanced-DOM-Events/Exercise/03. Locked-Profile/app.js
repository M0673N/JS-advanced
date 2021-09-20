function lockedProfile() {
    let user1Unlocked = document.querySelectorAll('[name="user1Locked"]')[1];
    let div1 = document.querySelector('#user1HiddenFields');
    let btn1 = document.querySelector('div:nth-child(1) button');

    btn1.addEventListener('click', function (e) {
        if (user1Unlocked.checked) {
            if (div1.style.display == 'block') {
                div1.style.display = 'none';
                btn1.textContent = 'Show more';
            } else {
                div1.style.display = 'block';
                btn1.textContent = 'Hide it';
            }
        }
    })

    let user2Unlocked = document.querySelectorAll('[name="user2Locked"]')[1];
    let div2 = document.querySelector('#user2HiddenFields');
    let btn2 = document.querySelector('div:nth-child(2) button');

    btn2.addEventListener('click', function (e) {
        if (user2Unlocked.checked) {
            if (div2.style.display == 'block') {
                div2.style.display = 'none';
                btn2.textContent = 'Show more';
            } else {
                div2.style.display = 'block';
                btn2.textContent = 'Hide it';
            }
        }
    })

    let user3Unlocked = document.querySelectorAll('[name="user3Locked"]')[1];
    let div3 = document.querySelector('#user3HiddenFields');
    let btn3 = document.querySelector('div:nth-child(3) button');

    btn3.addEventListener('click', function (e) {
        if (user3Unlocked.checked) {
            if (div3.style.display == 'block') {
                div3.style.display = 'none';
                btn3.textContent = 'Show more';
            } else {
                div3.style.display = 'block';
                btn3.textContent = 'Hide it';
            }
        }
    })
}