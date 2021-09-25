function solution() {
    let internalString = '';
    return {
        append: (data) => internalString += data,
        removeStart: (n) => internalString = internalString.slice(n),
        removeEnd: (n) => internalString = internalString.slice(0, internalString.length - n),
        print: () => console.log(internalString)
    };
}

// let firstZeroTest = solution();
//
// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();
//
// let secondZeroTest = solution();
//
// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print();