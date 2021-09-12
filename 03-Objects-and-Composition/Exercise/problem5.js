function solve(data) {
    let result = {}
    let counter = 0
    for (let el of data) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);
        if (result[product] === undefined) {
            result[product] = {};
        }
        result[product][town] = [price, counter];
        counter++;
    }
    for (const key in result) {
        let sortable = [];
        for (let town in result[key]) {
            sortable.push([town, result[key][town]]);
        }
        sortable = sortable.sort((a, b) => a[1][0] - b[1][0] || a[1][1] - b[1][1]);
        console.log(`${key} -> ${sortable[0][1][0]} (${sortable[0][0]})`);
    }
}

// solve(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']
// );