function runningAverage() {
    let sum = 0;
    let countRuns = 0;
    let average = 0;
    
    return function (arg) {
        sum += arg;
        countRuns++;
        average = sum / countRuns;
        console.log(average);
    }
}

let rAvg = runningAverage();
rAvg(10); // 10.0
rAvg(11); // 10.5
rAvg(12); // 11