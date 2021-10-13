const HolidayPackage = require('../test1');
const assert = require('chai').assert;

describe("HolidayPackage Tests", function () {
    let obj = new HolidayPackage('burgas', 'Winter');
    beforeEach(function () {
        obj = new HolidayPackage('burgas', 'Winter');
    });

    it("constructor test", function () {
        let expectedResult = [];
        let expectedResult2 = 'burgas';
        let expectedResult3 = 'Winter';
        let expectedResult4 = false;
        let actualResult = obj.vacationers;
        let actualResult2 = obj.destination;
        let actualResult3 = obj.season;
        let actualResult4 = obj.insuranceIncluded;

        assert.deepEqual(expectedResult, actualResult);
        assert.equal(expectedResult2, actualResult2);
        assert.equal(expectedResult3, actualResult3);
        assert.equal(expectedResult4, actualResult4);
    });

    it("insurance test happy case true", function () {
        obj.insuranceIncluded = true;
        let expectedResult = true;
        let actualResult = obj.insuranceIncluded;

        assert.equal(expectedResult, actualResult);
    });

    it("insurance test happy case false", function () {
        obj.insuranceIncluded = false;
        let expectedResult = false;
        let actualResult = obj.insuranceIncluded;

        assert.equal(expectedResult, actualResult);
    });

    it("insurance test non bolean should throw error", function () {
        assert.throws(() => obj.insuranceIncluded = 5, Error, 'Insurance status must be a boolean')
    });

    it("showVacationers method test no vacationers should return message", function () {
        let expectedResult = 'No vacationers are added yet';
        let actualResult = obj.showVacationers();

        assert.equal(expectedResult, actualResult);
    });

    it("showVacationers method test 1 vacationer should return message", function () {
        let expectedResult = 'Vacationers:\nBur Gas';
        obj.addVacationer('Bur Gas')
        let actualResult = obj.showVacationers();

        assert.equal(expectedResult, actualResult);
    });

    it("addVacationer method test happy case", function () {
        let expectedResult = ['Bur Gas'];
        obj.addVacationer('Bur Gas')
        let actualResult = obj.vacationers;

        assert.deepEqual(expectedResult, actualResult);
    });

    it("addVacationer method wrong data should throw error", function () {
        assert.throws(() => obj.addVacationer(' '), Error, 'Vacationer name must be a non-empty string');
        assert.throws(() => obj.addVacationer(undefined), Error, 'Vacationer name must be a non-empty string');
        assert.throws(() => obj.addVacationer([]), Error, 'Vacationer name must be a non-empty string');
        assert.throws(() => obj.addVacationer(5), Error, 'Vacationer name must be a non-empty string');
    });

    it("addVacationer method one name should throw error", function () {
        assert.throws(() => obj.addVacationer('Burgas'), Error, 'Name must consist of first name and last name');
    });

    it("generateHolidayPackage method test happy case", function () {
        let expectedResult = 'Holiday Package Generated\n' +
            'Destination: burgas\n' +
            'Vacationers:\n' +
            'Bur Gas\n' +
            'Var Na\n' +
            'Price: 1100';
        obj.addVacationer('Bur Gas')
        obj.addVacationer('Var Na')
        obj.insuranceIncluded = true
        let actualResult = obj.generateHolidayPackage();

        assert.equal(expectedResult, actualResult);
    });

    it("generateHolidayPackage method no vacationers should throw error", function () {
        assert.throws(() => obj.generateHolidayPackage(), Error, 'There must be at least 1 vacationer added');
    });

    it("generateHolidayPackage method test happy case 2", function () {
        let expectedResult = 'Holiday Package Generated\n' +
            'Destination: burgas\n' +
            'Vacationers:\n' +
            'Bur Gas\n' +
            'Var Na\n' +
            'Price: 1000';
        obj.addVacationer('Bur Gas')
        obj.addVacationer('Var Na')
        obj.insuranceIncluded = false
        let actualResult = obj.generateHolidayPackage();

        assert.equal(expectedResult, actualResult);
    });

    it("generateHolidayPackage method test happy case 3", function () {
        obj = new HolidayPackage('burgas', 'Spring');
        let expectedResult = 'Holiday Package Generated\n' +
            'Destination: burgas\n' +
            'Vacationers:\n' +
            'Bur Gas\n' +
            'Var Na\n' +
            'Price: 800';
        obj.addVacationer('Bur Gas')
        obj.addVacationer('Var Na')
        obj.insuranceIncluded = false
        let actualResult = obj.generateHolidayPackage();

        assert.equal(expectedResult, actualResult);
    });

    it("generateHolidayPackage method test happy case 3", function () {
        obj = new HolidayPackage('burgas', 'Summer');
        let expectedResult = 'Holiday Package Generated\n' +
            'Destination: burgas\n' +
            'Vacationers:\n' +
            'Bur Gas\n' +
            'Price: 600';
        obj.addVacationer('Bur Gas')
        obj.insuranceIncluded = false
        let actualResult = obj.generateHolidayPackage();

        assert.equal(expectedResult, actualResult);
    });
});

// module.exports = ChristmasMovies;
// beforeEach(function () {
//     obj = new ChristmasMovies();
// });