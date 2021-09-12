function solve(arr) {
    let sortedArray = arr.sort(((a, b) => a.localeCompare(b)));
    let zeroLetter = ''
    while (sortedArray.length > 0) {
        let letter = sortedArray[0][0];
        if (zeroLetter !== letter) {
            console.log(letter);
            zeroLetter = letter;
        }
        [item, amount] = sortedArray[0].split(' : ')
        console.log(`  ${item}: ${amount}`);
        sortedArray.shift();
    }
}

// solve(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']
// );
// solve(['Banana : 2',
//     "Rubic's Cube : 5",
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']
// );