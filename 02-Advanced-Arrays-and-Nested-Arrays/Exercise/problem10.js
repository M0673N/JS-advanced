function solve(moves) {
    function checkIfValid(move, matrix) {
        move = move.split(' ');
        let row = move[0];
        let col = move[1];
        if (matrix[row][col] == false) {
            return true;
        }
        return false;
    }
    function checkIfWon(matrix) {
        let winX = ['X', 'X', 'X'];
        let winO = ['O', 'O', 'O'];
        let row1 = [matrix[0][0], matrix[0][1], matrix[0][2]];
        let row2 = [matrix[1][0], matrix[1][1], matrix[1][2]];
        let row3 = [matrix[2][0], matrix[2][1], matrix[2][2]];
        let col1 = [matrix[0][0], matrix[1][0], matrix[2][0]];
        let col2 = [matrix[0][1], matrix[1][1], matrix[2][1]];
        let col3 = [matrix[0][2], matrix[1][2], matrix[2][2]];
        let diag1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
        let diag2 = [matrix[2][0], matrix[1][1], matrix[0][2]];
        let lines = [row1, row2, row3, col1, col2, col3, diag1, diag2];
        for (const line of lines) {
            if (line.toString() === winX.toString()) {
                return "Player X wins!";
            } else if (line.toString() === winO.toString()) {
                return "Player O wins!"
            }
        }
        return false;
    }
    function makeMove(move, symbol, matrix) {
        move = move.split(' ');
        let row = move[0];
        let col = move[1];
        matrix[row][col] = symbol;
    }
    function printMatrix(matrix) {
        for (const row of matrix) {
            console.log(row.join('\t'));
        }
    }
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];
    let counter = 0;

    for (const move of moves) {
        if (counter % 2 === 0) {
            if (!checkIfValid(move, board)) {
                console.log("This place is already taken. Please choose another!");
                continue;
            } else {
                makeMove(move, 'X', board);
                counter += 1
            }
        } else {
            if (!checkIfValid(move, board)) {
                console.log("This place is already taken. Please choose another!");
                continue;
            } else {
                makeMove(move, 'O', board);
                counter += 1
            }
        }
        if (checkIfWon(board)) {
            console.log(checkIfWon(board));
            printMatrix(board);
            break;
        }
        if (counter == 9) {
            console.log("The game ended! Nobody wins :(");
            printMatrix(board);
            break;
        }
    }
}
// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]
// );
// solve(["0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"]
// );
// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]
// );