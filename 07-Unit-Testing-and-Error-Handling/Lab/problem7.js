const createCalculator = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('check if there are properties', () => {
        let expectedResult = true;
        let obj = createCalculator();
        let actualResult = obj.add instanceof Function;
        let actualResult2 = obj.subtract instanceof Function;
        let actualResult3 = obj.get instanceof Function;

        assert.equal(obj instanceof Object, expectedResult);
        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, expectedResult);
    });

    it('check if get works', () => {
        let expectedResult = 0;
        let obj = createCalculator();
        let actualResult = obj.get();

        assert.equal(actualResult, expectedResult);
    });

    it('check if you can change value', () => {
        let expectedResult = undefined;
        let obj = createCalculator();
        let actualResult = obj.value;

        assert.equal(actualResult, expectedResult);
    });

    it('check if functions work properly', () => {
        let expectedResult = -8;
        let obj = createCalculator();
        obj.add('3');
        obj.add(3);
        obj.subtract('7');
        obj.subtract(7);
        let actualResult = obj.get();

        assert.equal(actualResult, expectedResult);
    });
});