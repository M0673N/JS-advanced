const isSymmetric = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('not symmetrical', () => {
        let arr = [1, 2, 3, 4, 5];
        let expectedResult = false;

        let actualResult = isSymmetric(arr);

        assert.equal(actualResult, expectedResult)
    });

    it('symmetrical', () => {
        let arr = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(arr);

        assert.equal(actualResult, expectedResult)
    });

    it('wrong input (string)', () => {
        let arr = 'Pesho';
        let expectedResult = false;

        let actualResult = isSymmetric(arr);

        assert.equal(actualResult, expectedResult)
    });

    it('wrong data in input', () => {
        let arr = [1, '1'];
        let expectedResult = false;

        let actualResult = isSymmetric(arr);

        assert.equal(actualResult, expectedResult)
    });

    it('wrong input (number)', () => {
        let arr = 1;
        let expectedResult = false;

        let actualResult = isSymmetric(arr);

        assert.equal(actualResult, expectedResult)
    });
});