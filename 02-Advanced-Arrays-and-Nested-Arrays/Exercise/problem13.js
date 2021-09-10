function solve(rows, cols) {
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
    function drawRight(matrix, position, rows, cols, counter) {
        [startRow, startCol] = position;
        let lastKnownPosition = position;
        let moved = false;
        for (let index = startCol + 1; index < cols; index++) {
            if (matrix[startRow][index] !== 'empty') {
                return [matrix, moved, lastKnownPosition, counter];
            } else {
                matrix[startRow][index] = counter;
                counter++;
                moved = true;
                lastKnownPosition = [startRow, index]
            }
        }
        return [matrix, moved, lastKnownPosition, counter];
    }
    function drawDown(matrix, position, rows, cols, counter) {
        [startRow, startCol] = position;
        let lastKnownPosition = position;
        let moved = false;
        for (let index = startRow + 1; index < rows; index++) {
            if (matrix[index][startCol] !== 'empty') {
                return [matrix, moved, lastKnownPosition, counter];
            } else {
                matrix[index][startCol] = counter;
                counter++;
                moved = true;
                lastKnownPosition = [index, startCol]
            }
        }
        return [matrix, moved, lastKnownPosition, counter];
    }
    function drawLeft(matrix, position, rows, cols, counter) {
        [startRow, startCol] = position;
        let lastKnownPosition = position;
        let moved = false;
        for (let index = startCol - 1; index >= 0; index--) {
            if (matrix[startRow][index] !== 'empty') {
                return [matrix, moved, lastKnownPosition, counter];
            } else {
                matrix[startRow][index] = counter;
                counter++;
                moved = true;
                lastKnownPosition = [startRow, index]
            }
        }
        return [matrix, moved, lastKnownPosition, counter];
    }
    function drawUp(matrix, position, rows, cols, counter) {
        [startRow, startCol] = position;
        let lastKnownPosition = position;
        let moved = false;
        for (let index = startRow - 1; index >= 0; index--) {
            if (matrix[index][startCol] !== 'empty') {
                return [matrix, moved, lastKnownPosition, counter];
            } else {
                matrix[index][startCol] = counter;
                counter++;
                moved = true;
                lastKnownPosition = [index, startCol]
            }
        }
        return [matrix, moved, lastKnownPosition, counter];
    }
    function printMatrix(matrix) {
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    }


    listOfMoves = [drawRight, drawDown, drawLeft, drawUp]

    let board = buildMatrix(rows, cols);
    let lastPosition = [0, -1];
    let counter = 1;
    let whileCounter = 1;
    [board, moved, lastPosition, counter] = drawRight(board, lastPosition, rows, cols, counter);
    while (moved) {
        [board, moved, lastPosition, counter] = listOfMoves[whileCounter](board, lastPosition, rows, cols, counter);
        whileCounter++;
        if (whileCounter == 4) {
            whileCounter = 0;
        }
    }
    printMatrix(board);
}
// solve(3, 3)
// solve(5, 5)