const cinema = require('../test1');
const assert = require('chai').assert;

describe("Cinema tests", function () {
    describe("showMovies tests", function () {
        it("empty array should return no movies message", function () {
            let expectedResult = 'There are currently no movies to show.';
            let actualResult = cinema.showMovies([]);

            assert.equal(expectedResult, actualResult);
        });

        it("full array should return movies string", function () {
            let expectedResult = 'm1, m2, m3';
            let actualResult = cinema.showMovies(['m1', 'm2', 'm3']);

            assert.equal(expectedResult, actualResult);
        });
    });

    describe("ticketPrice tests", function () {
        it("wrong projection should throw error", function () {
            assert.throws(() => cinema.ticketPrice('test'), Error, 'Invalid projection type.');
            assert.throws(() => cinema.ticketPrice(''), Error, 'Invalid projection type.');
            assert.throws(() => cinema.ticketPrice(1), Error, 'Invalid projection type.');
        });

        it("correct projection should return price", function () {
            let expectedResult = 7.50;
            let expectedResult2 = 12.00;
            let expectedResult3 = 5.50;
            let actualResult = cinema.ticketPrice('Normal');
            let actualResult2 = cinema.ticketPrice('Premiere');
            let actualResult3 = cinema.ticketPrice('Discount');

            assert.equal(expectedResult, actualResult);
            assert.equal(expectedResult2, actualResult2);
            assert.equal(expectedResult3, actualResult3);
        });
    });

    describe("swapSeatsInHall tests", function () {
        it("wrong data should return Unsuccessful message", function () {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult3 = cinema.swapSeatsInHall(21, 2);
            let actualResult4 = cinema.swapSeatsInHall(2, 0);
            let actualResult5 = cinema.swapSeatsInHall(1.5, 2);
            let actualResult6 = cinema.swapSeatsInHall(1, 2.5);
            let actualResult7 = cinema.swapSeatsInHall(1);
            let actualResult8 = cinema.swapSeatsInHall('1', 2);
            let actualResult9 = cinema.swapSeatsInHall(2, 21);
            let actualResult10 = cinema.swapSeatsInHall(0, 2);
            let actualResult11 = cinema.swapSeatsInHall(2, 2);

            assert.equal(expectedResult, actualResult3);
            assert.equal(expectedResult, actualResult4);
            assert.equal(expectedResult, actualResult5);
            assert.equal(expectedResult, actualResult6);
            assert.equal(expectedResult, actualResult7);
            assert.equal(expectedResult, actualResult8);
            assert.equal(expectedResult, actualResult9);
            assert.equal(expectedResult, actualResult10);
            assert.equal(expectedResult, actualResult11);
        });

        it("correct data should return Successful message", function () {
            let expectedResult = 'Successful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(10, 3);
            let actualResult2 = cinema.swapSeatsInHall(1, 20);
            let actualResult3 = cinema.swapSeatsInHall(20, 1);

            assert.equal(expectedResult, actualResult);
            assert.equal(expectedResult, actualResult2);
            assert.equal(expectedResult, actualResult3);
        });
    });
});