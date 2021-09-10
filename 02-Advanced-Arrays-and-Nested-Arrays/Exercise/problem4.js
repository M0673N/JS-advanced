function solve(array, n) {
    for (let index = 0; index < n; index++) {
        array.unshift(array.pop());
    }
    return array.join(' ');
}
// console.log(solve(['1',
//     '2',
//     '3',
//     '4'],
//     2
// ))
// console.log(solve(['Banana',
//     'Orange',
//     'Coconut',
//     'Apple'],
//     15
// ))