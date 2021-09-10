function solve(matrix) {
    let diag1 = 0;
    let diag2 = 0;
    for (let row = 0; row < matrix.length; row++) {
        diag1 += matrix[row][row];
    }
    for (let row = matrix.length - 1; row >= 0; row--) {
        diag2 += matrix[row][matrix.length - 1 - row];
    }
    return `${diag1} ${diag2}`;
}
// console.log(solve([[20, 40],
// [10, 60]]
// ))
// console.log(solve([[3, 5, 17],
// [-1, 7, 14],
// [1, -8, 89]]
// ))