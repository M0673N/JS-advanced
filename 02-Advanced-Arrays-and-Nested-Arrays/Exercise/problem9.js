function solve(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    for (const row of matrix) {
        if (row.reduce((a, b) => a + b) != sum) {
            return false;
        }
    }
    for (let col = 0; col < matrix.length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum != sum) {
            return false;
        }
    }
    return true;
}
// console.log(solve([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]
// ));
// console.log(solve([[11, 32, 45],
// [21, 0, 1],
// [21, 1, 1]]
// ))
// console.log(solve([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]
// ))