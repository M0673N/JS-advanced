const sum = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('positive nums', () => {
        let arr = [1, 2, 3, 4, 5];
        let expectedResult = 15;

        let actualResult = sum(arr);

        assert.equal(actualResult, expectedResult)
    });

    it('negative nums', () => {
        let arr = [-1];
        let expectedResult = -1;

        let actualResult = sum(arr);

        assert.equal(actualResult, expectedResult)
    });

    it('wrong data supplied', () => {
        let arr = [-1, 'Pesho'];
        let expectedResult = NaN;

        let actualResult = sum(arr);

        assert.equal(actualResult.toString(), expectedResult.toString())
    });
});