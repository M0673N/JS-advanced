const mathEnforcer = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    describe('addFive tests', () => {
        it('happy case', () => {
            let num = 5;
            let num2 = 5.14;
            let num3 = -10;
            let expectedResult = 10;
            let expectedResult2 = 10.14;
            let expectedResult3 = -5;

            let actualResult = mathEnforcer.addFive(num);
            let actualResult2 = mathEnforcer.addFive(num2);
            let actualResult3 = mathEnforcer.addFive(num3);

            assert.equal(actualResult, expectedResult);
            assert.closeTo(actualResult2, expectedResult2, 0.01);
            assert.equal(actualResult3, expectedResult3);
        });

        it('supplied string', () => {
            let num = '5';
            let expectedResult = undefined;

            let actualResult = mathEnforcer.addFive(num);

            assert.equal(actualResult, expectedResult);
        });
    });

    describe('subtractTen tests', () => {
        it('happy case', () => {
            let num = 5;
            let num2 = 5.14;
            let num3 = -5;
            let expectedResult = -5;
            let expectedResult2 = -4.86;
            let expectedResult3 = -15;

            let actualResult = mathEnforcer.subtractTen(num);
            let actualResult2 = mathEnforcer.subtractTen(num2);
            let actualResult3 = mathEnforcer.subtractTen(num3);

            assert.equal(actualResult, expectedResult);
            assert.closeTo(actualResult2, expectedResult2, 0.01);
            assert.equal(actualResult3, expectedResult3);
        });

        it('supplied string', () => {
            let num = '5';
            let expectedResult = undefined;

            let actualResult = mathEnforcer.subtractTen(num);

            assert.equal(actualResult, expectedResult);
        });
    });

    describe('sum tests', () => {
        it('happy case', () => {
            let num = 5;
            let num2 = 10;
            let negativeNum = -3;
            let floatNum = 3.14
            let negativeFloatNum = -3.14
            let expectedResult = 15;
            let expectedResult2 = 2;
            let expectedResult3 = 8.14;
            let expectedResult4 = -6.28;

            let actualResult = mathEnforcer.sum(num, num2);
            let actualResult2 = mathEnforcer.sum(num, negativeNum);
            let actualResult3 = mathEnforcer.sum(num, floatNum);
            let actualResult4 = mathEnforcer.sum(negativeFloatNum, negativeFloatNum);

            assert.equal(actualResult, expectedResult);
            assert.equal(actualResult2, expectedResult2);
            assert.closeTo(actualResult3, expectedResult3, 0.01);
            assert.closeTo(actualResult4, expectedResult4, 0.01);
        });

        it('supplied string', () => {
            let num = 5;
            let str = '5'
            let expectedResult = undefined;

            let actualResult = mathEnforcer.sum(num, str);
            let actualResult2 = mathEnforcer.sum(str, num);
            let actualResult3 = mathEnforcer.sum(str, str);

            assert.equal(actualResult, expectedResult);
            assert.equal(actualResult2, expectedResult);
            assert.equal(actualResult3, expectedResult);
        });
    });
});