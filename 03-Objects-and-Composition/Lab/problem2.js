function solve(arr) {
    let result = {}
    let answer = ''
    for (const i of arr) {
        let data = i.split(' <-> ');
        if (!result.hasOwnProperty(town)) {
            result[data[0]] = Number(data[1]);
        } else {
            result[data[0]] += Number(data[1]);
        }
    }
    for (const key in result) {
        answer += `${key} : ${result[key]}\n`;
    }
    return answer.trimRight();
}
// console.log(solve(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']
// ));
// console.log(solve(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']
// ));