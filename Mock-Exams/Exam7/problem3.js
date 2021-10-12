class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.currentCapacity = 0;
        this.totalMoney = 0;
    }

    findClient(target) {
        for (const client of this.clients) {
            if (client.ownerName === target) {
                return client;
            }
        }
    }

    findPet(target, petName) {
        for (const pet of target.pets) {
            if (pet.petName === petName) {
                return pet;
            }
        }
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentCapacity === this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }
        let currentClient = this.findClient(ownerName);
        if (!currentClient) {
            this.clients.push({ownerName, pets: []});
        }
        currentClient = this.findClient(ownerName);
        let currentPet = this.findPet(currentClient, petName);
        if (!currentPet) {
            currentClient.pets.push({petName, kind, procedures});
            this.currentCapacity += 1;
            return `Welcome ${petName}!`;
        }
        if (currentPet.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
        }
        currentClient = this.findClient(ownerName);
        currentClient.pets.push({petName, kind, procedures});
        this.currentCapacity += 1;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let currentClient = this.findClient(ownerName);
        if (!currentClient) {
            throw new Error('Sorry, there is no such client!');
        }
        let currentPet = this.findPet(currentClient, petName);
        if (!currentPet || currentPet.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
        this.totalMoney += 500 * currentPet.procedures.length;
        currentPet.procedures.length = 0;
        this.currentCapacity -= 1;
        return `Goodbye ${petName}. Stay safe!`;
    }

    findAllActive() {
        let total = 0;
        for (const cl of this.clients) {
            for (const pet of cl.pets) {
                if (pet.procedures.length > 0) {
                    total += 1;
                }
            }
        }
        return total;
    }

    toString() {
        let result = []

        function numberIsPercentOfTotal(num, total) {
            return num / total * 100;
        }

        result.push(`${this.clinicName} is ${Math.floor(numberIsPercentOfTotal(this.findAllActive(), this.capacity))}% busy today!`);
        result.push(`Total profit: ${this.totalMoney.toFixed(2)}$`);
        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));
        for (const cl of this.clients) {
            cl.pets.sort((a, b) => a.petName.localeCompare(b.petName))
        }
        for (const cl of this.clients) {
            result.push(`${cl.ownerName} with:`);
            for (const pet of cl.pets) {
                result.push(`---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`);
            }
        }
        return result.join('\n');
    }
}

// let clinic = new VeterinaryClinic('SoftCare', 10);
// console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
// console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
// console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
// console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
// console.log(clinic.toString());