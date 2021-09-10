function solve(array) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.unshift(array[i]);
        } else {
            result.push(array[i]);
        }
    }
    for (const item of result) {
        console.log(item);
    }
}
// solve([7, -2, 8, 9])
// solve([3, -2, 0, -1])