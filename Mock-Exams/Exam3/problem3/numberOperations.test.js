const numberOperations = require('../test1');
const assert = require('chai').assert;

describe("Functionality tests", function () {
    it("powNumber correct data should return correct result", function () {
        let expectedResult = 9;
        let actualResult = numberOperations.powNumber(3);

        assert.equal(expectedResult, actualResult);
    });

    it("numberChecker correct data under 100 should return correct result", function () {
        let expectedResult = 'The number is lower than 100!';
        let actualResult = numberOperations.numberChecker(99);
        let actualResult2 = numberOperations.numberChecker(0);
        let actualResult3 = numberOperations.numberChecker(-1);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult, actualResult3);
    });

    it("numberChecker correct data over 100 should return correct result", function () {
        let expectedResult = 'The number is greater or equal to 100!';
        let actualResult = numberOperations.numberChecker(100);
        let actualResult2 = numberOperations.numberChecker(110);
        let actualResult3 = numberOperations.numberChecker(123112313131);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult, actualResult3);
    });

    it("numberChecker wrong data should throw error", function () {
        assert.throws(() => numberOperations.numberChecker('car'), Error, 'The input is not a number!');
        assert.throws(() => numberOperations.numberChecker([100, 200]), Error, 'The input is not a number!');
        assert.throws(() => numberOperations.numberChecker(undefined), Error, 'The input is not a number!');
        assert.throws(() => numberOperations.numberChecker({cat: 'cat'}), Error, 'The input is not a number!');
    });

    it("sumArrays correct data should return correct result", function () {
        let expectedResult = [6, 6, 6, 6, 6];
        let expectedResult2 = [6, 6, 6, 6, 6, 6];
        let actualResult = numberOperations.sumArrays([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
        let actualResult2 = numberOperations.sumArrays([1, 2, 3, 4, 5, 6], [5, 4, 3, 2, 1]);
        let actualResult3 = numberOperations.sumArrays([1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 6]);

        assert.deepEqual(expectedResult, actualResult);
        assert.deepEqual(expectedResult2, actualResult2);
        assert.deepEqual(expectedResult2, actualResult3);
    });
});

// module.exports = cinema;