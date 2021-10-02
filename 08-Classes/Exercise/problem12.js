const PaymentPackage = require('../test1');
const assert = require('chai').assert;

describe('Functionality tests', () => {
    it('constructor functionality', () => {
        let obj = new PaymentPackage('test', 0);

        assert.equal(obj.name, 'test');
        assert.equal(obj.value, 0);
        assert.equal(obj.VAT, 20);
        assert.equal(obj.active, true);
    });

    it('test name property happy case', () => {
        let obj = new PaymentPackage('test', 10);
        let expectedResult = 'test';

        let actualResult = obj.name;

        assert.equal(actualResult, expectedResult);
    });

    it('test name property wrong data', () => {
        assert.throws(() => {
            new PaymentPackage(12, 10)
        }, Error, 'Name must be a non-empty string');
        assert.throws(() => {
            new PaymentPackage('', 10)
        }, Error, 'Name must be a non-empty string');
    });

    it('test value property happy case', () => {
        let obj = new PaymentPackage('test', 10);
        let expectedResult = 10;

        let actualResult = obj.value;

        assert.equal(actualResult, expectedResult);
    });

    it('test value property wrong data', () => {
        assert.throws(() => {
            new PaymentPackage('test', '10')
        }, Error, 'Value must be a non-negative number');
        assert.throws(() => {
            new PaymentPackage('test', -10)
        }, Error, 'Value must be a non-negative number');
    });

    it('test VAT property happy case', () => {
        let obj = new PaymentPackage('test', 10);
        let expectedResult = 50;
        obj.VAT = 50;

        let actualResult = obj.VAT;

        assert.equal(actualResult, expectedResult);
    });

    it('test VAT property wrong data', () => {
        let obj = new PaymentPackage('test', 10);

        assert.throws(() => {
            obj.VAT = '50';
        }, Error, 'VAT must be a non-negative number');
        assert.throws(() => {
            obj.VAT = -50;
        }, Error, 'VAT must be a non-negative number');
    });

    it('test active property happy case', () => {
        let obj = new PaymentPackage('test', 10);
        let expectedResult = false;
        obj.active = false;

        let actualResult = obj.active;

        assert.equal(actualResult, expectedResult);
    });

    it('test active property wrong data', () => {
        let obj = new PaymentPackage('test', 10);

        assert.throws(() => {
            obj.active = '50';
        }, Error, 'Active status must be a boolean');
        assert.throws(() => {
            obj.active = -50;
        }, Error, 'Active status must be a boolean');
    });

    it('test toString method active', () => {
        let obj = new PaymentPackage('HR Services', 1500);
        let expectedResult = 'Package: HR Services\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 20%): 1800';
        obj.active = true;

        let actualResult = obj.toString();

        assert.equal(actualResult, expectedResult);
    });

    it('test toString method inactive', () => {
        let obj = new PaymentPackage('HR Services', 1500);
        let expectedResult = 'Package: HR Services (inactive)\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 20%): 1800';
        obj.active = false;

        let actualResult = obj.toString();

        assert.equal(actualResult, expectedResult);
    });
});