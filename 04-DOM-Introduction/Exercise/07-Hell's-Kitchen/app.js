function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        function objectSorter(obj) {
            let arr = Object.entries(obj);
            arr.sort((a, b) => b[1][1] - a[1][1] || a[1][2] - b[1][2]);
            return Object.fromEntries(arr)
        }

        function objectSorter2(obj) {
            let arr = Object.entries(obj);
            arr.sort((a, b) => b[1] - a[1]);
            return Object.fromEntries(arr)
        }

        let input = document.querySelector('#inputs > textarea').value;
        input = JSON.parse(input);
        let output = document.querySelector('#bestRestaurant > p');
        let workers = document.querySelector('#workers > p')

        let restaurants = {};
        let counter = 0;
        for (let pair of input) {
            [restaurant, workerAndSalary] = pair.split(' - ');
            salaryPairs = {};
            workerAndSalary = workerAndSalary.split(', ');

            for (const workSalaryPair of workerAndSalary) {
                [person, salary] = workSalaryPair.split(' ');
                salary = Number(salary);
                salaryPairs[person] = salary;
            }
            if (restaurants.hasOwnProperty(restaurant)) {
                Object.assign(restaurants[restaurant][0], salaryPairs);
            } else {
                restaurants[restaurant] = [salaryPairs, 0, counter];
                counter++;
            }
        }

        for (const restaurant in restaurants) {
            let salarySum = 0;
            let workersAmount = 0;
            for (const worker in restaurants[restaurant][0]) {
                salarySum += restaurants[restaurant][0][worker];
                workersAmount++;
            }
            restaurants[restaurant][1] = salarySum / workersAmount;
        }

        restaurants = objectSorter(restaurants);
        for (let restaurant in restaurants) {
            restaurants[restaurant][0] = objectSorter2(restaurants[restaurant][0]);
        }


        let bestRestaurant = '';
        let avgSal = '';
        let bestSal = '';
        let workerList = {}

        for (const restaurant in restaurants) {
            bestRestaurant = restaurant;
            avgSal = restaurants[restaurant][1];
            workerList = restaurants[restaurant][0];
            for (const firstPerson in restaurants[restaurant][0]) {
                bestSal = restaurants[restaurant][0][firstPerson];
                break;
            }
            break
        }
        let result1 = `Name: ${bestRestaurant} Average Salary: ${avgSal.toFixed(2)} Best Salary: ${bestSal.toFixed(2)}`;
        output.textContent = result1;

        let result2 = [];
        for (const worker in workerList) {
            result2.push(`Name: ${worker} With Salary: ${workerList[worker]}`);
        }
        result2 = result2.join(' ');
        workers.textContent = result2;
    }
}