function solve(array) {
    let result = '';
    array.sort((a, b) => a.localeCompare(b));
    for (let index = 0; index < array.length; index++) {
        result += `${index + 1}.${array[index]}\n`;
    }
    return result.trimRight();
}
// console.log(solve(["John", "Bob", "Christina", "Ema"]))