function solve(data, command) {
    let mapper = {
        asc: (arr) => arr = arr.sort(((a, b) => a - b)),
        desc: (arr) => arr = arr.sort((a, b) => b - a)
    };
    return mapper[command](data);
}

// console.log(solve([14, 7, 17, 6, 8], 'asc'));
// console.log(solve([14, 7, 17, 6, 8], 'desc'));