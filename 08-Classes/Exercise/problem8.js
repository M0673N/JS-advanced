function solve(arr) {
    let order = new Set;
    let data = {};
    for (const arrElement of arr) {
        let [key, value] = arrElement.split(' => ');
        value = Number(value);
        if (!data.hasOwnProperty(key)) {
            data[key] = value;
        } else {
            data[key] += value;
        }
        if (data[key] >= 1000) {
            order.add(key)
        }
    }
    let result = [];
    for (const key of order) {
        result.push(`${key} => ${Math.floor(data[key] / 1000)}`)

    }

    return result.join('\n');
}

// console.log(solve(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']
// ));
//
// console.log(solve(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']
// ));