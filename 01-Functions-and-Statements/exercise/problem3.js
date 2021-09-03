function solve(input) {
    input = input.toString();
    let startingChar = input[0]
    let sum = 0
    result = true;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== startingChar) {
            result = false;
        }
        sum += Number(input[i]);
    }
    console.log(result);
    console.log(sum);
}