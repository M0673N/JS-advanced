function solve(num, param1, param2, param3, param4, param5) {
    listOfParams = [param1, param2, param3, param4, param5];
    commands = {
        'chop': function (num) { return num / 2 },
        'dice': function (num) { return Math.sqrt(num) },
        'spice': function (num) { return num + 1 },
        'bake': function (num) { return num * 3 },
        'fillet': function (num) { return num - num * 0.2 },
    }
    for (param of listOfParams) {
        num = commands[param](num);
        console.log(num);
    }
}