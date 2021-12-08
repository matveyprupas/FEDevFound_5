console.log("--------------------------- TASK1 ---------------------------")

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



console.log("--------------------------- TASK2 ---------------------------")


function sum(...args) {

    let sum = args.reduce( (sum, e) => sum + e );
  
    function f(...args) {
        sum += args.reduce( (sum, e) => sum + e );
      return f;
    }
  
    f.valueOf = function() {
      return sum;
    };
  
    return f;
  }


console.log( sum(2,3) );		//	Outputs	5
console.log( +sum(2,3) );		//	Outputs	5
console.log( +sum(2)(3) );	//	Outputs	5
console.log( +sum(1)(2)(3)(4));	//	Outputs	10