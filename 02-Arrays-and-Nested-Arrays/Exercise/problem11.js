function solve(matrix) {
    function buildMatrix(matrix) {
        let result = [];
        for (const row of matrix) {
            let data = row.split(' ');
            let miniResult = [];
            for (const num of data) {
                miniResult.push(Number(num));
            }
            result.push(miniResult);
        }
        return result;
    }
    function findDiagonalsSumIsEqual(matrix) {
        let sum1 = findDiagonalOneSum(matrix);
        let sum2 = 0;
        for (let row = 0; row < matrix.length; row++) {
            sum2 += matrix[matrix.length - 1 - row][row];
        }
        return sum1 === sum2;
    }
    function printMatrix(matrix) {
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    }
    function findDiagonalOneSum(matrix) {
        let sum1 = 0;
        for (let row = 0; row < matrix.length; row++) {
            sum1 += matrix[row][row];
        }
        return sum1;
    }
    function transformMatrix(matrix, sum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                let position1 = `${row} ${row}`;
                let position2 = `${row} ${matrix.length - 1 - row}`;
                let realPosition = `${row} ${col}`;
                if (realPosition === position1 || realPosition === position2) {
                    continue;
                }
                matrix[row][col] = sum;
            }
        }
        return matrix;
    }

    let board = buildMatrix(matrix);
    let diagonalsSum = findDiagonalOneSum(board)
    if (findDiagonalsSumIsEqual(board)) {
        let transformedMatrix = transformMatrix(board, diagonalsSum);
        printMatrix(board);
    } else {
        printMatrix(board);
    }
}

// solve(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// );
// solve(['1 1 1',
//     '1 1 1',
//     '1 1 0']
// );