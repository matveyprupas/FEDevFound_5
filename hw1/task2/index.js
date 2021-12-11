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