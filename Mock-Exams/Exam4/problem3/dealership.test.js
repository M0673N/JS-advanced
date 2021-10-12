const dealership = require('../test1');
const assert = require('chai').assert;

describe("Functionality tests", function () {
    it("newCarCost discount should return correct result", function () {
        let expectedResult = 80000;
        let actualResult = dealership.newCarCost('Audi A6 4K', 100000);

        assert.equal(expectedResult, actualResult);
    });

    it("newCarCost no discount should return correct result", function () {
        let expectedResult = 100000;
        let actualResult = dealership.newCarCost('Audi', 100000);

        assert.equal(expectedResult, actualResult);
    });

    it("carEquipment correct data should return correct result", function () {
        let expectedResult = ['2', '4'];
        let actualResult = dealership.carEquipment(['1', '2', '3', '4', '5'], [1, 3]);

        assert.deepEqual(expectedResult, actualResult);
    });

    it("euroCategory no discount should return correct result", function () {
        let expectedResult = 'Your euro category is low, so there is no discount from the final price!';
        let actualResult = dealership.euroCategory(3);

        assert.deepEqual(expectedResult, actualResult);
    });

    it("euroCategory discount should return correct result", function () {
        let expectedResult = 'We have added 5% discount to the final price: 14250.';
        let actualResult = dealership.euroCategory(4);

        assert.deepEqual(expectedResult, actualResult);
    });
});

// module.exports = cinema;