function solve(n, k) {
    result = [1];
    for (let i = 1; i < n; i++) {
        let newElement = 0;
        for (let j = 1; j <= k; j++) {
            if (result[result.length - j]) {
                newElement += result[result.length - j];
            }
        }
        result.push(newElement);
    }
    return result;
}
// console.log(solve(6, 3))
// console.log(solve(8, 2))