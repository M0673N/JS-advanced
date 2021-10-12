const testNumbers = require('../test1');
const assert = require('chai').assert;

describe("Functionality tests", function () {
    it("sumNumbers wrong data should return undefined", function () {
        let expectedResult = undefined;
        let actualResult = testNumbers.sumNumbers('1', '2');
        let actualResult2 = testNumbers.sumNumbers(1, '2');
        let actualResult3 = testNumbers.sumNumbers('1', 2);
        let actualResult4 = testNumbers.sumNumbers([1], 2);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult, actualResult3);
        assert.equal(expectedResult, actualResult4);
    });

    it("sumNumbers correct data should return correct result", function () {
        let expectedResult = '11.00';
        let expectedResult2 = '-1.00';
        let expectedResult3 = '-11.00';
        let actualResult = testNumbers.sumNumbers(5, 6);
        let actualResult2 = testNumbers.sumNumbers(5, -6);
        let actualResult3 = testNumbers.sumNumbers(-5, -6);
        let actualResult4 = testNumbers.sumNumbers(-6, 5);


        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult2, actualResult2);
        assert.equal(expectedResult3, actualResult3);
        assert.equal(expectedResult2, actualResult4);
    });

    it("numberChecker correct data should return correct result", function () {
        let expectedResult = 'The number is odd!';
        let expectedResult2 = 'The number is even!';
        let actualResult = testNumbers.numberChecker('1');
        let actualResult2 = testNumbers.numberChecker(1);
        let actualResult3 = testNumbers.numberChecker(2);
        let actualResult4 = testNumbers.numberChecker('2');

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult2, actualResult3);
        assert.equal(expectedResult2, actualResult4);
    });

    it("numberChecker wrong data should throw error", function () {
        assert.throws(() => testNumbers.numberChecker('sda'), Error, 'The input is not a number!');
        assert.throws(() => testNumbers.numberChecker(undefined), Error, 'The input is not a number!');
        assert.throws(() => testNumbers.numberChecker(NaN), Error, 'The input is not a number!');
    });

    it("averageSumArray correct data should return correct result", function () {
        let expectedResult = 3;
        let actualResult = testNumbers.averageSumArray([1, 2, 3, 4, 5]);

        assert.equal(expectedResult, actualResult);
    });
});