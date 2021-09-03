function solve(numberOfSteps, footprintLength, speed) {
    let coveredLength = 0;
    timeSeconds = ((footprintLength * numberOfSteps) / (speed * 1000)) * 3600;
    timeSeconds = Math.ceil(timeSeconds);
    for (let i = 1; i <= numberOfSteps; i++) {
        if (coveredLength !== 0 && coveredLength >= 500) {
            timeSeconds += 60;
            coveredLength -= 500;
            continue;
        }
        coveredLength += footprintLength;
    }
    let hours = Math.floor(timeSeconds / 3600);
    hours = String(hours).padStart(2, '0');
    let minutes = Math.floor(timeSeconds % 3600 / 60);
    minutes = String(minutes).padStart(2, '0');
    let seconds = Math.floor(timeSeconds % 3600 % 60);
    seconds = String(seconds).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}