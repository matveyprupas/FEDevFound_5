// let promise = new Promise((resolve) => {
//         console.log(1);
//     resolve();
// }).then(()	=>	{
//     console.log(2);
// }).then(()	=>	{
//     console.log(3);
// })
// console.log(4);
//1, 4, 2, 3

class MyPromise extends Promise {
    constructor (resolve, reject) {
        super(resolve, reject);
    }

    synchThen(callback) {
        callback();
        return this;
    }
}

let myPromise = new MyPromise((resolve) => {
    console.log(1);
    resolve();
}).synchThen(()	=>	{
    console.log(2);
}).then(()	=>	{
    console.log(3);
})
console.log(4);
// 1,	2,	4,	3