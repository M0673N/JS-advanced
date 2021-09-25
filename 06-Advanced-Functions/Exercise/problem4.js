function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let mapper = {
        restock: (el, quantity) => {
            stock[el] += quantity;
            return 'Success';
        },
        prepare: (el, quantity) => {
            if (el === 'apple') {
                if (stock.carbohydrate >= 1 * quantity && stock.flavour >= 2 * quantity) {
                    stock.carbohydrate -= 1 * quantity;
                    stock.flavour -= 2 * quantity;
                    return 'Success';
                } else {
                    if (stock.carbohydrate < 1 * quantity) return 'Error: not enough carbohydrate in stock';
                    else if (stock.flavour < 2 * quantity) return 'Error: not enough flavour in stock';
                }
            } else if (el === 'lemonade') {
                if (stock.carbohydrate >= 10 * quantity && stock.flavour >= 20 * quantity) {
                    stock.carbohydrate -= 10 * quantity;
                    stock.flavour -= 20 * quantity;
                    return 'Success';
                } else {
                    if (stock.carbohydrate < 10 * quantity) return 'Error: not enough carbohydrate in stock';
                    else if (stock.flavour < 20 * quantity) return 'Error: not enough flavour in stock';
                }
            } else if (el === 'burger') {
                if (stock.carbohydrate >= 5 * quantity && stock.flavour >= 3 * quantity && stock.fat >= 7 * quantity) {
                    stock.carbohydrate -= 5 * quantity;
                    stock.flavour -= 3 * quantity;
                    stock.fat -= 7 * quantity;
                    return 'Success';
                } else {
                    if (stock.carbohydrate < 5 * quantity) return 'Error: not enough carbohydrate in stock';
                    else if (stock.fat < 7 * quantity) return 'Error: not enough fat in stock';
                    else if (stock.flavour < 3 * quantity) return 'Error: not enough flavour in stock';
                }
            } else if (el === 'eggs') {
                if (stock.protein >= 5 * quantity && stock.flavour >= 1 * quantity && stock.fat >= 1 * quantity) {
                    stock.protein -= 5 * quantity;
                    stock.flavour -= 1 * quantity;
                    stock.fat -= 1 * quantity;
                    return 'Success';
                } else {
                    if (stock.protein < 5 * quantity) return 'Error: not enough protein in stock';
                    else if (stock.fat < 21 * quantity) return 'Error: not enough fat in stock';
                    else if (stock.flavour < 1 * quantity) return 'Error: not enough flavour in stock';
                }
            } else if (el === 'turkey') {
                if (stock.fat >= 10 * quantity && stock.carbohydrate >= 10 * quantity && stock.protein >= 10 * quantity && stock.flavour >= 10 * quantity) {
                    stock.carbohydrate -= 10 * quantity;
                    stock.flavour -= 10 * quantity;
                    stock.fat -= 10 * quantity;
                    stock.protein -= 10 * quantity;
                    return 'Success';
                } else {
                    if (stock.protein < 10 * quantity) return 'Error: not enough protein in stock';
                    else if (stock.carbohydrate < 10 * quantity) return 'Error: not enough carbohydrate in stock';
                    else if (stock.fat < 10 * quantity) return 'Error: not enough fat in stock';
                    else if (stock.flavour < 10 * quantity) return 'Error: not enough flavour in stock';
                }
            }
        },
        report: () => `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }

    return function (command) {
        command = command.split(' ');
        let [param1, param2, param3] = command;
        param3 = Number(param3);
        return mapper[param1](param2, param3);
    }
}

// let manager = solution ();
// console.log (manager ("restock flavour 50"));
// console.log (manager ("prepare lemonade 4"));

// let manager = solution();
// console.log(manager('restock flavour 50'));
// console.log(manager('prepare lemonade 4'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

// let manager = solution ();
// console.log (manager('prepare turkey 1'));
// console.log (manager('restock protein 10'));
// console.log (manager('prepare turkey 1'));
// console.log (manager('restock carbohydrate 10'));
// console.log (manager('prepare turkey 1'));
// console.log (manager('restock fat 10'));
// console.log (manager('prepare turkey 1'));
// console.log (manager('restock flavour 10'));
// console.log (manager('prepare turkey 1'));
// console.log (manager('report'));