function runningAverage() {
    let arr = [];
    let average = 0;
    return function (arg) {
        arr.push(arg);
        average = (average * (arr.length - 1) + arr[arr.length - 1]) / arr.length;
        console.log(average);
    }
}

let rAvg = runningAverage();
rAvg(10); // 10.0
rAvg(11); // 10.5
rAvg(12); // 11