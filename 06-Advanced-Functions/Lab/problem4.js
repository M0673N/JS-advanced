function solve(data, criteria) {
    let dataToReturn = ''
    let result = [];
    data = JSON.parse(data);
    let [key, value] = criteria.split('-');
    data.forEach(function (el) {
        if (el[key] === value) {
            result.push(el);
        }
    });
    result.forEach(function (el, i) {
        dataToReturn += `${i}. ${el['first_name']} ${el['last_name']} - ${el['email']}\n`
    });
    return dataToReturn.trimRight()
}