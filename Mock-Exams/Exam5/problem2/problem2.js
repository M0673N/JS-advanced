class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }
        let car = {carModel, carNumber, payed: false};
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let currentCar = this.vehicles.find(el => el.carNumber === carNumber);
        if (!currentCar) {
            throw new Error('The car, you\'re looking for, is not found.');
        }
        if (!currentCar.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        let index = this.vehicles.indexOf(currentCar);
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let currentCar = this.vehicles.find(el => el.carNumber === carNumber);
        if (!currentCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (currentCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        currentCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (carNumber === undefined) {
            let result = [];
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
            let clonedArr = JSON.parse(JSON.stringify(this.vehicles));
            clonedArr.sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(el => result.push(`${el.carModel} == ${el.carNumber} - ${el.payed ? 'Has payed' : 'Not payed'}`));
            return result.join('\n');
        }
        let currentCar = this.vehicles.find(el => el.carNumber === carNumber);
        return `${currentCar.carModel} == ${carNumber} - ${currentCar.payed ? 'Has payed' : 'Not payed'}`;
    }
}

// const parking = new Parking(12);
//
// console.log(parking.addCar("Volvo t600", "TX3691CA"));
// console.log(parking.getStatistics());
//
// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));