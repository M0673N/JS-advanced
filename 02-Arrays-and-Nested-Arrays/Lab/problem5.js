function solve(array) {
    let result = [];
    array.sort((a, b) => a - b);
    result.push(array.shift());
    result.push(array.shift());
    console.log(result.join(' '));
}
// solve([30, 15, 50, 5])
// solve([3, 0, 10, 4, 7, 3])