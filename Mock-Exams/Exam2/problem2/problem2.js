class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const product of products) {
            let [name, quantity, price] = product.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if (price <= this.budgetMoney) {
                if (this.stockProducts[name] === undefined) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += quantity;
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        }
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }
        this.menu[meal] = {products: neededProducts, price};
        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...'
        }
        let result = [];
        for (const key in this.menu) {
            result.push(`${key} - $ ${this.menu[key]['price']}`);
        }
        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!Object.keys(this.menu).includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let currentMeal = '';
        for (const key in this.menu) {
            if (key === meal) {
                currentMeal = this.menu[key];
                break;
            }
        }
        let failed = false;
        for (const pair of currentMeal.products) {
            let product = pair.split(' ')[0];
            let quantity = pair.split(' ')[1];
            if (!this.stockProducts.hasOwnProperty(product) || this.stockProducts[product] < quantity) {
                failed = true;
                break;
            }
        }
        if (failed) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        for (let i = 0; i < currentMeal.products.length; i += 2) {
            let product = currentMeal.products[i];
            let quantity = currentMeal.products[i + 1];
            this.stockProducts[product] -= quantity;
            this.budgetMoney += this.menu[meal].price;
        }
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));