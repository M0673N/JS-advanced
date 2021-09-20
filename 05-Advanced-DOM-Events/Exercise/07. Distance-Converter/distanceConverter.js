function attachEventsListeners() {
    let distanceElement = document.getElementById('inputDistance');
    let button = document.getElementById('convert');
    let outputElement = document.getElementById('outputDistance');
    let selectInput = document.getElementById('inputUnits');
    let selectOutput = document.getElementById('outputUnits');
    let mapper = {
        'km': num => num * 1000,
        'm': num => num * 1,
        'cm': num => num * 0.01,
        'mm': num => num * 0.001,
        'mi': num => num * 1609.34,
        'yrd': num => num * 0.9144,
        'ft': num => num * 0.3048,
        'in': num => num * 0.0254
    }
    let mapper2 = {
        'km': num => num / 1000,
        'm': num => num / 1,
        'cm': num => num / 0.01,
        'mm': num => num / 0.001,
        'mi': num => num / 1609.34,
        'yrd': num => num / 0.9144,
        'ft': num => num / 0.3048,
        'in': num => num / 0.0254
    }

    button.addEventListener('click', function (e) {
        function convert(value, input, output) {
            value = Number(value);
            valueToM = mapper[input](value);
            return valueFromM = mapper2[output](valueToM);
        }

        let result = convert(distanceElement.value, selectInput.value, selectOutput.value);
        outputElement.value = result;
    })
}