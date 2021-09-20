function attachEventsListeners() {
    let daysField = document.querySelector('#days');
    let daysButton = document.querySelector('#daysBtn');
    let hoursField = document.querySelector('#hours');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesField = document.querySelector('#minutes');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsField = document.querySelector('#seconds');
    let secondsButton = document.querySelector('#secondsBtn');

    daysButton.addEventListener('click', function (e) {
        hoursField.value = Number(daysField.value) * 24;
        minutesField.value = Number(daysField.value) * 1440;
        secondsField.value = Number(daysField.value) * 86400;
    });

    hoursButton.addEventListener('click', function (e) {
        daysField.value = Number(hoursField.value) / 24;
        minutesField.value = Number(hoursField.value) * 60;
        secondsField.value = Number(hoursField.value) * 3600;
    });

    minutesButton.addEventListener('click', function (e) {
        daysField.value = Number(minutesField.value) / 1440;
        hoursField.value = Number(minutesField.value) / 60;
        secondsField.value = Number(minutesField.value) * 60;
    });

    secondsButton.addEventListener('click', function (e) {
        daysField.value = Number(secondsField.value) / 86400;
        hoursField.value = Number(secondsField.value) / 3600;
        minutesField.value = Number(secondsField.value) / 60;
    });
}