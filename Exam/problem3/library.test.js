const library = require('../test1');
const assert = require('chai').assert;

describe("library tests", function () {
    it("calcPriceOfBook test happy case + discount should return correct message", function () {
        let expectedResult = 'Price of book1 is 10.00';
        let actualResult = library.calcPriceOfBook('book1', 1980);
        let actualResult2 = library.calcPriceOfBook('book1', 1000);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
    });

    it("calcPriceOfBook test happy case no discount should return correct message", function () {
        let expectedResult = 'Price of book1 is 20.00';
        let actualResult = library.calcPriceOfBook('book1', 1981);
        let actualResult2 = library.calcPriceOfBook('book1', 2000);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
    });

    it("calcPriceOfBook test wrong data should throw error", function () {
        assert.throws(() => library.calcPriceOfBook(12, 1981), Error, 'Invalid input');
        assert.throws(() => library.calcPriceOfBook(['book1'], 1981), Error, 'Invalid input');
        assert.throws(() => library.calcPriceOfBook(undefined, 1981), Error, 'Invalid input');
        assert.throws(() => library.calcPriceOfBook('book1', '1981'), Error, 'Invalid input');
        assert.throws(() => library.calcPriceOfBook('book1', [1981]), Error, 'Invalid input');
        assert.throws(() => library.calcPriceOfBook('book1', undefined), Error, 'Invalid input');
        assert.throws(() => library.calcPriceOfBook('book1', NaN), Error, 'Invalid input');
        assert.throws(() => library.calcPriceOfBook('book1', 1981.5), Error, 'Invalid input');
    });

    it("findBook test happy case return correct message", function () {
        let expectedResult = 'We found the book you want.';
        let actualResult = library.findBook(['book1', 'book2', 'book3'], 'book2');

        assert.equal(expectedResult, actualResult);
    });

    it("findBook test missing book should return correct message", function () {
        let expectedResult = 'The book you are looking for is not here!';
        let actualResult = library.findBook(['book1', 'book2', 'book3'], 'book4');

        assert.equal(expectedResult, actualResult);
    });

    it("findBook test no books should throw error", function () {
        assert.throws(() => library.findBook([], 'book1'), Error, 'No books currently available');
    });

    it("arrangeTheBooks test happy case should return correct message", function () {
        let expectedResult = 'Great job, the books are arranged.';
        let actualResult = library.arrangeTheBooks(40);
        let actualResult2 = library.arrangeTheBooks(0);
        let actualResult3 = library.arrangeTheBooks(20);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult, actualResult3);
    });

    it("arrangeTheBooks test too many books should return correct message", function () {
        let expectedResult = 'Insufficient space, more shelves need to be purchased.';
        let actualResult = library.arrangeTheBooks(41);
        let actualResult2 = library.arrangeTheBooks(60);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult2);
    });

    it("arrangeTheBooks test wrong data should throw error", function () {
        assert.throws(() => library.arrangeTheBooks(-1), Error, 'Invalid input');
        assert.throws(() => library.arrangeTheBooks(-15), Error, 'Invalid input');
        assert.throws(() => library.arrangeTheBooks(5.5), Error, 'Invalid input');
        assert.throws(() => library.arrangeTheBooks('1'), Error, 'Invalid input');
        assert.throws(() => library.arrangeTheBooks([3]), Error, 'Invalid input');
        assert.throws(() => library.arrangeTheBooks(undefined), Error, 'Invalid input');
        assert.throws(() => library.arrangeTheBooks(NaN), Error, 'Invalid input');
    });
});

// module.exports = ChristmasMovies;
// beforeEach(function () {
//     obj = new ChristmasMovies();
// });