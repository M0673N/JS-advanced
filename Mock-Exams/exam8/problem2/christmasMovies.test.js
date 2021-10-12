const ChristmasMovies = require('../test1');
const assert = require('chai').assert;

describe("ChristmasMovies Tests", function () {
    describe("constructor test", function () {
        it("initialize properly", function () {
            let obj = new ChristmasMovies();
            let expectedResult = {
                "actors": [],
                "movieCollection": [],
                "watched": {}
            };
            let actualResult = obj;

            assert.deepEqual(expectedResult, actualResult);
        });
    });

    describe("buyMovie tests", function () {
        it("happy case", function () {
            let obj = new ChristmasMovies();
            let expectedResult = 'You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!';
            let expectedResult2 = 'You just got Home Alone2 to your collection in which Macaulay Culkin, Joe Pesci2, Daniel Stern2 are taking part!';
            let expectedResult3 = [
                {
                    "actors": [
                        "Macaulay Culkin",
                        "Joe Pesci",
                        "Daniel Stern"
                    ],
                    "name": "Home Alone"
                },
                {
                    "actors": [
                        "Macaulay Culkin",
                        "Joe Pesci2",
                        "Daniel Stern2"
                    ],
                    "name": "Home Alone2"
                }
            ]
            let actualResult = obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let actualResult2 = obj.buyMovie('Home Alone2', ['Macaulay Culkin', 'Joe Pesci2', 'Joe Pesci2', 'Daniel Stern2']);

            assert.equal(expectedResult, actualResult);
            assert.equal(expectedResult2, actualResult2);
            assert.deepEqual(expectedResult3, obj.movieCollection);
        });

        it("already owned should throw error", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
                , Error, 'You already own Home Alone in your collection!');
        });
    });

    describe("discardMovie tests", function () {
        it("have the movie and delete it", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let expectedResult = 'You just threw away Home Alone!';
            let expectedResult2 = [];
            let expectedResult3 = {};

            obj.watchMovie('Home Alone');
            let actualResult = obj.discardMovie('Home Alone');
            let actualResult2 = obj.movieCollection;
            let actualResult3 = obj.watched;

            assert.equal(expectedResult, actualResult);
            assert.deepEqual(expectedResult2, actualResult2);
            assert.deepEqual(expectedResult3, actualResult3);
        });

        it("don't have the movie should throw error", function () {
            let obj = new ChristmasMovies();
            assert.throws(() => obj.discardMovie('Home Alone', Error, 'Home Alone is not at your collection!'));
        });

        it("have the movie but didn't watch it should throw error", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => obj.discardMovie('Home Alone', Error, 'Home Alone is not watched!'));
        });
    });

    describe("watchMovie tests", function () {
        it("watch a movie for the first time", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let expectedResult = {"Home Alone": 1};
            obj.watchMovie('Home Alone');
            let actualResult = obj.watched;

            assert.deepEqual(expectedResult, actualResult);
        });

        it("watch a movie for the second time", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            obj.watchMovie('Home Alone');
            let expectedResult = {"Home Alone": 2};
            obj.watchMovie('Home Alone');
            let actualResult = obj.watched

            assert.deepEqual(expectedResult, actualResult);
        });

        it("missing movie should throw error", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => obj.watchMovie('test'), Error, 'No such movie in your collection!')
        });
    });

    describe("favouriteMovie tests", function () {
        it("should return most watched movie", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            obj.watchMovie('Home Alone');
            obj.watchMovie('Home Alone');
            obj.buyMovie('Home Alone2', ['Macaulay Culkin', 'Joe Pesci2', 'Daniel Stern2']);
            obj.watchMovie('Home Alone2');
            let expectedResult = 'Your favourite movie is Home Alone and you have watched it 2 times!';

            let actualResult = obj.favouriteMovie()

            assert.deepEqual(expectedResult, actualResult);
        });

        it("haven't watched any movies", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throws(() => obj.favouriteMovie(), Error, 'You have not watched a movie yet this year!')
        });
    });


    describe("mostStarredActor tests", function () {
        it("should return most starred actor", function () {
            let obj = new ChristmasMovies();
            obj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            obj.buyMovie('Home Alone2', ['Macaulay Culkin', 'Joe Pesci2', 'Daniel Stern2']);
            obj.watchMovie('Home Alone');
            obj.watchMovie('Home Alone2');
            let expectedResult = 'The most starred actor is Macaulay Culkin and starred in 2 movies!';

            let actualResult = obj.mostStarredActor()

            assert.deepEqual(expectedResult, actualResult);
        });

        it("no movies in collection should throw error", function () {
            let obj = new ChristmasMovies();
            assert.throws(() => obj.mostStarredActor(), Error, 'You have not watched a movie yet this year!')
        });
    });
});