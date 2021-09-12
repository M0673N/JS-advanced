function solve(data) {
    let small = { power: 90, volume: 1800 };
    let normal = { power: 120, volume: 2400 };
    let monster = { power: 200, volume: 3500 };
    let engines = [small, normal, monster];

    let hatchback = { type: 'hatchback', color: '' };
    let coupe = { type: 'coupe', color: '' };
    let carriages = { hatchback, coupe }

    wheelsList = [];
    wheelsList.length = 4;

    let result = {}
    result.model = data.model;
    for (const engine of engines) {
        if (engine.power >= data.power) {
            result.engine = engine;
            break;
        }
    }
    result.carriage = carriages[data.carriage];
    result.carriage.color = data.color;
    wheel = data.wheelsize
    if (wheel % 2 === 0) {
        wheel = Math.ceil(wheel - 1) | 1;
    }
    result.wheels = wheelsList.fill(wheel)
    return result;
}

// console.log(solve({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }
// ));
// console.log(solve({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }
// ));