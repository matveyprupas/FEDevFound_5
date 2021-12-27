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