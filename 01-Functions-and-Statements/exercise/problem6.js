function solve(speed, area) {
    info = { 'motorway': 130, 'interstate': 90, 'residential': 20, 'city': 50 }
    allowedSpeed = info[area]
    if (speed <= allowedSpeed) {
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
    } else if (0 < speed - allowedSpeed && speed - allowedSpeed <= 20) {
        difference = speed - allowedSpeed;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} km/h- speeding`)
    } else if (20 < speed - allowedSpeed && speed - allowedSpeed <= 40) {
        difference = speed - allowedSpeed;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} km/h- excessive speeding`)
    } else {
        difference = speed - allowedSpeed;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} km/h- reckless driving`)
    }
}