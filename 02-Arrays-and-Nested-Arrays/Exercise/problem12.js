function solve(array) {
    [width, height, x, y] = array;
    function buildMatrix(rows, cols) {
        matrix = [];
        for (let row = 0; row < rows; row++) {
            matrix.push([]);
        }
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                matrix[row][col] = 'empty';
            }
        }
        return matrix;
    }
    function printMatrix(matrix) {
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    }
    function transform(matrix) {
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                matrix[row][col] = Math.max(Math.abs(x - row), Math.abs(y - col)) + 1;
            }
        }
        return matrix;
    }

    let board = buildMatrix(width, height);
    let transformedBoard = transform(board);
    printMatrix(transformedBoard);
}

// solve([4, 4, 0, 0]);
// solve([5, 5, 2, 2]);
// solve([3, 3, 2, 2]);