const pizzUni = require('../test1');
const assert = require('chai').assert;

describe("Functionality tests", function () {
    it("makeAnOrder correct full data should return correct result", function () {
        let obj = {orderedPizza: 'pi', orderedDrink: 'dri'};
        let expectedResult = 'You just ordered pi and dri.';
        let actualResult = pizzUni.makeAnOrder(obj);

        assert.equal(expectedResult, actualResult);
    });

    it("makeAnOrder correct partial data should return correct result", function () {
        let obj = {orderedPizza: 'pi'};
        let expectedResult = 'You just ordered pi';
        let actualResult = pizzUni.makeAnOrder(obj);

        assert.equal(expectedResult, actualResult);
    });

    it("makeAnOrder wrong data should throw error", function () {
        assert.throws(() => pizzUni.makeAnOrder({}), Error, 'You must order at least 1 Pizza to finish the order.');
        assert.throws(() => pizzUni.makeAnOrder(1), Error, 'You must order at least 1 Pizza to finish the order.');
        assert.throws(() => pizzUni.makeAnOrder([]), Error, 'You must order at least 1 Pizza to finish the order.');
        assert.throws(() => pizzUni.makeAnOrder('1'), Error, 'You must order at least 1 Pizza to finish the order.');
    });

    it("getRemainingWork all done should return correct result", function () {
        let arr = [{pizzaName: 'pi', status: 'ready'}]
        let expectedResult = 'All orders are complete!';
        let actualResult = pizzUni.getRemainingWork(arr);

        assert.equal(expectedResult, actualResult);
    });

    it("getRemainingWork still working should return correct result", function () {
        let arr = [{pizzaName: 'pi', status: 'doing smth'}]
        let expectedResult = 'The following pizzas are still preparing: pi.';
        let actualResult = pizzUni.getRemainingWork(arr);

        assert.equal(expectedResult, actualResult);
    });

    it("orderType discount should return correct result", function () {
        let data = 'Carry Out'
        let expectedResult = 9;
        let actualResult = pizzUni.orderType(10, data);

        assert.equal(expectedResult, actualResult);
    });

    it("orderType no discount should return correct result", function () {
        let data = 'Delivery'
        let expectedResult = 10;
        let actualResult = pizzUni.orderType(10, data);

        assert.equal(expectedResult, actualResult);
    });
});