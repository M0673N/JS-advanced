function solve(data) {
    let keys = [];
    let values = [];
    let result = {};

    for (let index = 0; index < data.length; index++) {
        if (index % 2 === 0) {
            keys.push(data[index]);
        } else {
            values.push(data[index]);
        }
    }
    for (let index = 0; index < keys.length; index++) {
        result[keys[index]] = Number(values[index]);
    }

    return result;
}

// console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));