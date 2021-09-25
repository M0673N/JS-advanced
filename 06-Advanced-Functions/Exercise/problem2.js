function solve(...data) {
    let database = {}
    data.forEach((el, i) => {
        let type = typeof el;
        if (!database.hasOwnProperty(type)) {
            database[type] = [0, el, i];
        }
        database[type][0] += 1;
    });
    let result1 = [];
    for (const key in database) {
        result1.push(`${key}: ${database[key][1]}`);
    }
    result1 = result1.join('\n');
    database = Object.fromEntries(Object.entries(database).sort((a, b) => a[1][0] - b[1][0] || a[1][2] - b[1][2]));

    let result2 = [];
    for (const key in database) {
        result2.push(`${key} = ${database[key][0]}`)
    }
    result2 = result2.join('\n');
    return result1 += '\n' + result2;
}

// console.log(solve('cat', 42, function () {console.log('Hello world!');}));