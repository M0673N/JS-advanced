const isOddOrEven = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('check if string is odd', () => {
        let string = 'abcde';
        let expectedResult = 'odd';

        let actualResult = isOddOrEven(string);

        assert.equal(actualResult, expectedResult);
    });

    it('check if string is even', () => {
        let string = 'abcd';
        let expectedResult = 'even';

        let actualResult = isOddOrEven(string);

        assert.equal(actualResult, expectedResult);
    });

    it('wrong data supplied', () => {
        let number = 12;
        let array = ['1', 1];
        let obj = {test: 'smth'};
        let expectedResult = undefined;

        let actualResult = isOddOrEven(number);
        let actualResult2 = isOddOrEven(array);
        let actualResult3 = isOddOrEven(obj);

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, expectedResult);
    });

    it('multicall test', () => {
        let string = 'abcde';
        let string2 = 'haha';
        let string3 = 's';
        let expectedResult = 'odd';

        let actualResult = isOddOrEven(string);
        let actualResult2 = isOddOrEven(string2);
        let actualResult3 = isOddOrEven(string3);

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, 'even');
        assert.equal(actualResult3, expectedResult);
    });
});