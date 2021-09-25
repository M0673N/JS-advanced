function add(num) {
    let acc = 0;
    acc += num;

    function add2(num) {
        acc += num;
        return add2;
    }

    add2.toString = () => acc;

    return add2;
}

// console.log(add(1)(6)(-3).toString());