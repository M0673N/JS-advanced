function solve(array) {
    let result = [];
    let num = 1;
    for (let command of array) {
        if (command === "add") {
            result.push(num);
        } else if (command === "remove") {
            result.pop();
        }
        num++;
    }
    if (result.length === 0) {
        return 'Empty';
    }
    return result.join('\n');
}
// console.log(solve(['add',
//     'add',
//     'add',
//     'add']
// ))
// console.log(solve(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
// ))
// console.log(solve(['remove',
//     'remove',
//     'remove']
// ))