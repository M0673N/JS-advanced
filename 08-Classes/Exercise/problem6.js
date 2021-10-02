class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        let data = [username, salary, position, department];
        let badInputs = ['', null, undefined];
        data.forEach(function (el) {
            if (badInputs.includes(el)) {
                throw new Error('Invalid input!');
            }
        });

        if (salary < 0) {
            throw new Error('Invalid input!')
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push([salary, username, position]);
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        function objectSorter(obj) {
            let arr = Object.entries(obj);
            let averages = []
            for (let i = 0; i < arr.length; i++) {
                let average = arr[i][1].reduce((acc, el) => acc + el[0], 0) / arr[i][1].length;
                averages.push([i, average]);
            }
            let winner = averages.sort((a, b) => b[1] - a[1])[0][0];
            return arr[winner];
        }


        let winner = objectSorter(this.departments);
        winner[1].sort((a, b) => b[0] - a[0] || a[1].localeCompare(b[1]));
        let average = (winner[1].reduce((acc, el) => acc + el[0], 0) / winner[1].length).toFixed(2)
        let result = `Best Department is: ${winner[0]}\nAverage salary: ${average}\n`
        for (const employee of winner[1]) {
            result += `${employee[1]} ${employee[0]} ${employee[2]}\n`
        }
        return result.trimRight()
    }
}

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());