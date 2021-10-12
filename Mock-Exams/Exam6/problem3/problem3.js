class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let found = this.allCustomers.find(el => el.personalId === customer.personalId);
        if (found) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0;
        customer.transactions = []
        this.allCustomers.push(customer);
        return {firstName: customer.firstName, lastName: customer.lastName, personalId: customer.personalId};
    }

    depositMoney(personalId, amount) {
        let found = this.allCustomers.find(el => el.personalId === personalId);
        if (!found) {
            throw new Error('We have no customer with this ID!');
        }
        found.totalMoney += amount;
        found.transactions.push(`${found.firstName} ${found.lastName} made deposit of ${amount}$!`);
        return `${found.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        let found = this.allCustomers.find(el => el.personalId === personalId);
        if (!found) {
            throw new Error('We have no customer with this ID!');
        }
        if (found.totalMoney < amount) {
            throw new Error(`${found.firstName} ${found.lastName} does not have enough money to withdraw that amount!`);
        }
        found.totalMoney -= amount;
        found.transactions.push(`${found.firstName} ${found.lastName} withdrew ${amount}$!`);
        return `${found.totalMoney}$`;
    }

    customerInfo(personalId) {
        let found = this.allCustomers.find(el => el.personalId === personalId);
        if (!found) {
            throw new Error('We have no customer with this ID!');
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`)
        result.push(`Customer name: ${found.firstName} ${found.lastName}`)
        result.push(`Customer ID: ${found.personalId}`)
        result.push(`Total Money: ${found.totalMoney}$`)
        result.push(`Transactions:`)
        for (let i = found.transactions.length; i >= 1; i--) {
            result.push(`${i}. ${found.transactions[i - 1]}`)
        }
        return result.join('\n');
    }
}

// let bank = new Bank('SoftUni Bank');
//
// console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
// console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
//
// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);
//
// console.log(bank.withdrawMoney(6233267, 125));
//
// console.log(bank.customerInfo(6233267));