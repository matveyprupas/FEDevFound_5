function Person (name, age)	{
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return 'My name is ' + this.name + ' and I am ' + this.age;
};

var	matvey = new Person('Matvey', 30);
var	jack = new Person('Jack', 40);


console.log( matvey.introduce() ); //	My name is Matvey and I am 30
console.log( jack.introduce() ); //	My name is Jack and I am 40

console.log( "----------------------------" );

function myNew (classConstructor, ...args) {
    let myPerson = new classConstructor(...args);
    return myPerson;
}

myNew.prototype = new Person();
myNew.prototype = Object.create(Person.prototype);

let egor = myNew(Person, 'Egor', 23);

console.log( egor.introduce() ); //	My name is Egor and I am 23
