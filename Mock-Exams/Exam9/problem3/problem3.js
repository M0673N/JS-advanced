class Vacationer {
    constructor(fullName, creditCard = [1111, "", 111]) {
        this.fullName = fullName;
        this.creditCard = creditCard;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
    }

    set creditCard(value) {
        if (value.length < 3) {
            throw new Error('Missing credit card information');
        }
        if (typeof value[0] !== 'number' || typeof value[2] !== 'number') {
            throw new Error('Invalid credit card details');
        }
        this._creditCard = {cardNumber: value[0], expirationDate: value[1], securityNumber: value[2]};
    }

    get creditCard() {
        return this._creditCard;
    }

    set fullName(value) {
        if (value.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }
        for (const name of value) {
            if (!/\b[A-Z][a-z]+\b/.test(name)) {
                throw new Error('Invalid full name');
            }
        }
        this._fullName = {
            firstName: value[0],
            middleName: value[1],
            lastName: value[2]
        };
    }

    get fullName() {
        return this._fullName;
    }

    generateIDNumber() {
        let vowels = 'aeoiu';
        let result = `${231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length}`;
        if (vowels.includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1))) {
            result += 8;
        } else {
            result += 7;
        }
        return result;
    }

    addCreditCardInfo(input) {
        if (input.length < 3) {
            throw new Error('Missing credit card information');
        }
        if (typeof input[0] !== 'number' || typeof input[2] !== 'number') {
            throw new Error('Invalid credit card details');
        }
        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = input[2];
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        let result = [];
        result.push(`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`);
        result.push(`ID Number: ${this.idNumber}`);
        result.push(`Wishlist:`);
        if (this.wishList.length === 0) {
            result.push(`empty`);
        } else {
            result.push(`${this.wishList.join(', ')}`);
        }
        result.push(`Credit Card:`)
        result.push(`Card Number: ${this.creditCard.cardNumber}`)
        result.push(`Expiration Date: ${this.creditCard.expirationDate}`)
        result.push(`Security Number: ${this.creditCard.securityNumber}`)
        return result.join('\n');
    }
}

// // Initialize vacationers with 2 and 3 parameters
// let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
// let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
//     [123456789, "10/01/2018", 777]);
//
// // Should throw an error (Invalid full name)
// try {
//     let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
// } catch (err) {
//     console.log("Error: " + err.message);
// }
//
// // Should throw an error (Missing credit card information)
// try {
//     let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
//     vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
// } catch (err) {
//     console.log("Error: " + err.message);
// }
//
// vacationer1.addDestinationToWishList('Spain');
// vacationer1.addDestinationToWishList('Germany');
// vacationer1.addDestinationToWishList('Bali');
//
// // Return information about the vacationers
// console.log(vacationer1.getVacationerInfo());
// console.log(vacationer2.getVacationerInfo());