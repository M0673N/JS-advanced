class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping(productArr) {
        let [product, price] = productArr;
        price = Number(price);
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.budget -= price;
        this.products.push(product);
        return `You have successfully bought ${product}!`;
    }

    recipes(recipe) {
        if (recipe.productsList.some(el => !this.products.includes(el))) {
            throw new Error("We do not have this product")
        }
        this.dishes.push(recipe)
        return `${recipe.recipeName} has been successfully cooked!`
    }

    findDish(dishName) {
        for (const dish of this.dishes) {
            if (dish.recipeName === dishName) {
                return dish;
            }
        }
        return false;
    }

    inviteGuests(name, dish) {
        if (this.findDish(dish) === false) {
            throw new Error("We do not have this dish");
        }

        function findGuest(name, target) {
            for (const guest of Object.keys(target)) {
                if (guest === name) {
                    return true;
                }
            }
            return false;
        }

        if (findGuest(name, this.guests)) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (const [name, dish] of Object.entries(this.guests)) {
            let products = this.findDish(dish).productsList;
            result.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`);
        }
        return result.join('\n');
    }
}

// let dinner = new ChristmasDinner(300);
//
// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);
//
// dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// });
//
// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');
//
// console.log(dinner.showAttendance());