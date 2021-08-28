function solve(num = 5) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += '* '.repeat(num).trimRight() + '\n';
    }
    console.log(result.trimRight());
}