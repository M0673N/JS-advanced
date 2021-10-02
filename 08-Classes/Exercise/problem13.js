const StringBuilder = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('constructor functionality', () => {
        let obj = new StringBuilder('test');
        let obj2 = new StringBuilder();
        let expectedResult = ['t', 'e', 's', 't'];
        let expectedResult2 = [];

        let actualResult = obj._stringArray;
        let actualResult2 = obj2._stringArray;

        assert.deepEqual(actualResult, expectedResult);
        assert.deepEqual(actualResult2, expectedResult2);
    });

    it('constructor functionality wrong data', () => {
        assert.throws(() => new StringBuilder(12), TypeError, 'Argument must be a string');
        assert.throws(() => new StringBuilder([]), TypeError, 'Argument must be a string');
    });

    it('append method happy case', () => {
        let obj = new StringBuilder('test');
        let expectedResult = ['t', 'e', 's', 't', 't', 'e', 's', 't'];
        obj.append('test');

        let actualResult = obj._stringArray;

        assert.deepEqual(actualResult, expectedResult);
    });

    it('append method wrong data', () => {
        let obj = new StringBuilder('test');
        assert.throws(() => obj.append(12), TypeError, 'Argument must be a string');
        assert.throws(() => obj.append([]), TypeError, 'Argument must be a string');
    });

    it('prepend method happy case', () => {
        let obj = new StringBuilder('test');
        let expectedResult = ['1', '2', '3', '4', 't', 'e', 's', 't'];
        obj.prepend('1234');

        let actualResult = obj._stringArray;

        assert.deepEqual(actualResult, expectedResult);
    });

    it('prepend method wrong data', () => {
        let obj = new StringBuilder('test');
        assert.throws(() => obj.prepend(12), TypeError, 'Argument must be a string');
        assert.throws(() => obj.prepend([]), TypeError, 'Argument must be a string');
    });

    it('insertAt method happy case', () => {
        let obj = new StringBuilder('test');
        let expectedResult = ['1', '2', '3', '4', 't', 'e', 's', 't'];
        obj.insertAt('1234', 0);

        let actualResult = obj._stringArray;

        assert.deepEqual(actualResult, expectedResult);
    });

    it('insertAt method wrong data', () => {
        let obj = new StringBuilder('test');
        assert.throws(() => obj.insertAt(12, 0), TypeError, 'Argument must be a string');
        assert.throws(() => obj.insertAt([], 0), TypeError, 'Argument must be a string');
    });

    it('remove method happy case', () => {
        let obj = new StringBuilder('test');
        let expectedResult = ['t'];
        obj.remove(1, 3);

        let actualResult = obj._stringArray;

        assert.deepEqual(actualResult, expectedResult);
    });

    it('toString method happy case', () => {
        let obj = new StringBuilder('test');
        let expectedResult = 'test';

        let actualResult = obj.toString();

        assert.deepEqual(actualResult, expectedResult);
    });
});