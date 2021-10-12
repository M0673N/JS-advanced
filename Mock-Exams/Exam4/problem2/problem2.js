class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping(data) {
        let [product, price] = data;
        price = Number(price);
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(product);
        this.budget -= price;
        return `You have successfully bought ${product}!`;
    }

    recipes(recipe) {
        let failed = false;
        for (const product of recipe['productsList']) {
            if (!this.products.includes(product)) {
                failed = true;
            }
        }
        if (failed) {
            throw new Error('We do not have this product');
        } else {
            this.dishes.push(recipe)
            return `${recipe['recipeName']} has been successfully cooked!`
        }
    }

    inviteGuests(name, dish) {
        let currentDish = false;
        let currentGuest = false;

        function findDish(dish) {
            for (const d of this.dishes) {
                if (d.recipeName === dish) {
                    return false;
                }
            }
            return true;
        }

        function findGuest(name) {
            for (const key in this.guests) {
                if (key === name) {
                    return true;
                }
            }
            return false;
        }

        currentDish = findDish.call(this, dish);
        if (currentDish) {
            throw new Error('We do not have this dish');
        }
        currentGuest = findGuest.call(this, name);
        if (currentGuest) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        function findRecipe(name) {
            for (const dish of this.dishes) {
                if (dish.recipeName === name) {
                    return dish;
                }
            }
        }

        let result = [];
        for (const guest in this.guests) {
            let currentDish = findRecipe.call(this, this.guests[guest]);
            let products = currentDish.productsList;
            products = products.join(', ');
            result.push(`${guest} will eat ${this.guests[guest]}, which consists of ${products}`)
        }

        return result.join('\n');
    }
}

// let dinner = new ChristmasDinner(300);
//
// // dinner.shopping(['Salt', 1]);
// // dinner.shopping(['Beans', 3]);
// // dinner.shopping(['Cabbage', 4]);
// // dinner.shopping(['Rice', 2]);
// // dinner.shopping(['Savory', 1]);
// // dinner.shopping(['Peppers', 1]);
// // dinner.shopping(['Fruits', 40]);
// // dinner.shopping(['Honey', 10]);
// //
// // dinner.recipes({
// //     recipeName: 'Oshav',
// //     productsList: ['Fruits', 'Honey']
// // });
// // dinner.recipes({
// //     recipeName: 'Folded cabbage leaves filled with rice',
// //     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// // });
// // dinner.recipes({
// //     recipeName: 'Peppers filled with beans',
// //     productsList: ['Beans', 'Peppers', 'Salt']
// // });
// //
// // dinner.inviteGuests('Ivan', 'Oshav');
// // dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// // dinner.inviteGuests('Georgi', 'Peppers filled with beans');
// //
// // console.log(dinner.showAttendance());