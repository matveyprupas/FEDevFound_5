function runningAverage() {
    let arr = [];
    let average = 0;
    return function (arg) {
        arr.push(arg);
        average = (arr.reduce( (sum, e) => sum + e)) / arr.length;
        console.log(average);
    }
}

let rAvg = runningAverage();
rAvg(10); // 10.0
rAvg(11); // 10.5
rAvg(12); // 11