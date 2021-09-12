function solve(arr) {
    let result = []

    function getData(arr) {
        let properties = arr[0].split('|');
        properties.shift();
        properties.pop();
        let prop1 = properties[0].trim();
        let prop2 = properties[1].trim();
        let prop3 = properties[2].trim();
        arr.shift();
        return [prop1, prop2, prop3]
    }

    let [property1, property2, property3] = getData(arr);
    while (arr.length > 0) {
        let [cityData1, cityData2, cityData3] = getData(arr)
        let cityInfo = {}
        cityInfo[property1] = cityData1;
        cityInfo[property2] = Number(Number(cityData2).toFixed(2));
        cityInfo[property3] = Number(Number(cityData3).toFixed(2));
        result.push(cityInfo);
    }

    return JSON.stringify(result);
}

// console.log(solve(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']
// ));
// console.log(solve(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']
// ));