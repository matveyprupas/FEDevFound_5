class ReversePromise extends Promise {
    constructor(resolve, reject) {
        super(resolve, reject);
        this.arrayFunc = [];
    }

    then(cb) {
        this.arrayFunc.push(cb);
        // console.log( this.arrayFunc.reverse() );
        return this;
    }

    finally(cb) {
        this.arrayFunc.reverse().forEach( el => el() );
        return this;
    }
}

let	revPromise = new ReversePromise((resolve) => {
    console.log(1);
    resolve();
})
.then(() => console.log(2))
.then(() => console.log(3))
.then(() => console.log(4))
.finally()

//1, 4, 3, 2