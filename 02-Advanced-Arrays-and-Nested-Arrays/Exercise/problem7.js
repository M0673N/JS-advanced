function solve(array) {
    let result = [];
    let asscendings = array.sort((a, b) => a - b).slice();
    let descending = array.sort((a, b) => b - a).slice();
    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            result.push(asscendings.shift());
        } else {
            result.push(descending.shift());
        }
    }
    return result;
}
// console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))