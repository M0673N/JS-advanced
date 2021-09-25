function solve(data) {
    let objects = {};
    let mapper = {
        create: (name, inherit, otherObj) => {
            objects[name] = {};
            if (inherit) {
                objects[name] = Object.create(objects[otherObj]);
            }
        },
        set: (name, key, value) => {
            objects[name][key] = value
        },
        print: (name) => {
            let result = [];
            for (const key in objects[name]) {
                result.push(`${key}:${objects[name][key]}`);
            }
            result = result.join(', ');
            console.log(result);
        }
    }
    data.forEach((el) => {
        let key = el.split(' ')[0];
        let value1 = el.split(' ')[1];
        let value2 = el.split(' ')[2];
        let value3 = el.split(' ')[3];
        mapper[key](value1, value2, value3);
    });
}

// solve(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']
// )