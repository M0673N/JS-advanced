const lookupChar = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('happy case', () => {
        let string = 'abcde';
        let index = 2;
        let expectedResult = 'c';

        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });

    it('wrong data supplied', () => {
        let string = 'abcde';
        let index = 2;
        let expectedResult = undefined;

        let actualResult = lookupChar(string, 'index');
        let actualResult2 = lookupChar(12, index);
        let actualResult3 = lookupChar(12, 'aa');

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, expectedResult);
    });

    it('Incorrect index', () => {
        let string = 'abcde';
        let index = -1;
        let index2 = string.length;
        let index3 = 3.14;

        let expectedResult = 'Incorrect index';

        let actualResult = lookupChar(string, index);
        let actualResult2 = lookupChar(string, index2);
        let actualResult3 = lookupChar(string, index3);

        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult2, expectedResult);
        assert.equal(actualResult3, undefined);
    });
});