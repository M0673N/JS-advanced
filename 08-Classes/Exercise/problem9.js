function solve(arr) {
    let data = {};
    for (const el of arr) {
        let [brand, model, number] = el.split(' | ');
        if (!data.hasOwnProperty(brand)) {
            let obj = {};
            obj[model] = Number(number);
            data[brand] = obj;
        } else if (!data[brand].hasOwnProperty(model)) {
            data[brand][model] = Number(number);
        } else {
            data[brand][model] += Number(number);
        }
    }
    let result = '';
    for (const dataKey in data) {
        result += dataKey + '\n';
        for (const key in data[dataKey]) {
            result += `###${key} -> ${data[dataKey][key]}\n`;
        }
    }

    return result.trimRight()
}

// console.log(solve(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']
// ))