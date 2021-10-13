function addDestination() {
    let city = document.querySelectorAll('#input input')[0];
    let country = document.querySelectorAll('#input input')[1];
    let season = document.querySelector('#seasons');
    let destinationList = document.querySelector('#destinationsList');
    let summer = document.querySelector('#summer');
    let autumn = document.querySelector('#autumn');
    let winter = document.querySelector('#winter');
    let spring = document.querySelector('#spring');

    if (city.value !== '' && country.value !== '') {
        let newTr = document.createElement('tr');
        let newTd1 = document.createElement('td');
        newTd1.textContent = `${city.value}, ${country.value}`
        let newTd2 = document.createElement('td');
        newTd2.textContent = season.value.charAt(0).toUpperCase() + season.value.slice(1);
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        destinationList.appendChild(newTr);
        if (season.value === 'summer') {
            summer.value = Number(summer.value) + 1;
        } else if (season.value === 'autumn') {
            autumn.value = Number(autumn.value) + 1;
        } else if (season.value === 'winter') {
            winter.value = Number(winter.value) + 1;
        } else if (season.value === 'spring') {
            spring.value = Number(spring.value) + 1;
        }

        city.value = '';
        country.value = '';
    }
}