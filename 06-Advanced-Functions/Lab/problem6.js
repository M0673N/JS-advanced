function solve(data) {
    let result = [];
    let mapper = {
        add: x => result.push(x),
        remove: x => result = result.filter(el => el !== x),
        print: () => console.log(result.join(','))
    };
    data.forEach(function (el) {
        [key, value] = el.split(' ');
        mapper[key](value);
    });
}

// solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);