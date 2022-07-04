function sum(...args) {

    let sum = getSum(args);

    function getSum(arr) {
      return arr.reduce( (sum, e) => sum + e )
    }
  
    function f(...args) {
        sum += getSum( args );
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
console.log( +sum(2)(3, 5) );	//	Outputs	10
console.log( +sum(1)(2)(3)(4));	//	Outputs	10

// below code from master 

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
