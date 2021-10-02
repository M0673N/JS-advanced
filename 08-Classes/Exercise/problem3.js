function solve(ticketsArr, sortCriteria) {
    let ticketsArrProcessed = ticketsArr.map(function (x) {
        return x.split('|');
    });

    let mapper = {
        destination: function (arr) {
            return arr.sort((a, b) => a[0].localeCompare(b[0]));
        },
        price: function (arr) {
            return arr.sort((a, b) => Number(a[1]) - Number(b[1]));
        },
        status: function (arr) {
            return arr.sort((a, b) => a[2].localeCompare(b[2]));
        }
    }
    let result = []
    let resultArr = mapper[sortCriteria](ticketsArrProcessed);
    for (const resultArrElement of resultArr) {
        result.push({
            destination: resultArrElement[0],
            price: Number(resultArrElement[1]),
            status: resultArrElement[2]
        });
    }
    return result
}

// console.log(solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'
// ));

// console.log(solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'
// ));