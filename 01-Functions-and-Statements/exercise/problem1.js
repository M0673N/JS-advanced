function solve(fruit, weight, pricePerKilo) {
    console.log(`I need $${(pricePerKilo * (weight / 1000)).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}