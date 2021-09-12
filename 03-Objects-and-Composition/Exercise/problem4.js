function solve(data) {
    let result = [];
    for (const item of data) {
        let splitItem = item.split(' / ');
        let name = splitItem[0];
        let level = Number(splitItem[1]);
        let items = []
        if (splitItem.length > 2) {
            items = splitItem[2];
            items = items.split(', ')
        }
        result.push({name, level, items});
    }
    return JSON.stringify(result);
}

// console.log(solve(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// ));
// console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));