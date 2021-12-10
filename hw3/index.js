class Vector {
    constructor(arr) {
        this.coordinates = arr;
    }
}

Vector.prototype.add = function(vector) {
    if (this.coordinates.length !== vector.coordinates.length) 
        throw new Error("Oops, lengthes of vectors don't equivalent");

    let newVectorArr = this.coordinates.map( (el, i) => el + vector.coordinates[i] );
    return new Vector(newVectorArr);
};

Vector.prototype.subtract = function(vector) {
    if (this.coordinates.length !== vector.coordinates.length) 
        throw new Error("Oops, lengthes of vectors don't equivalent");

    let newVectorArr = this.coordinates.map( (el, i) => el - vector.coordinates[i] );
    return new Vector(newVectorArr);
};

Vector.prototype.dot = function(vector) {
    if (this.coordinates.length !== vector.coordinates.length) 
        throw new Error("Oops, lengthes of vectors don't equivalent");

    return this.coordinates.reduce( (sum, el, i) => sum + el * vector.coordinates[i], 0 );
};

Vector.prototype.norm = function() {
    let res = this.coordinates.reduce( (sum, el) => sum + Math.pow(el, 2), 0 );
    return Math.sqrt(res);
};

let a = new Vector([1,2,3]);
let b = new Vector([3,4,5]);
let c = new Vector([3,4,5,9]);

console.log( a.add(b) ); // [4,6,8]
console.log( a.subtract(b) ); // [-2,-2,-2]
console.log( a.dot(b) ); // 26
console.log( a.norm() ); // sqrt(14);


// a.add(c); // Throw ERROR
// a.subtract(c); // Throw ERROR
// a.dot(c); // Throw ERROR