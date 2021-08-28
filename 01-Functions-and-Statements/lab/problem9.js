function solve(list) {
    let result1 = 0;
    for (num of list) {
        result1 += num
    }
    let result2 = 0;
    for (num of list) {
        result2 += 1 / num
    }
    let result3 = ''
    for (num of list) {
        result3 += num.toString()
    }
    console.log(result1, '\n', result2, '\n', result3)
}