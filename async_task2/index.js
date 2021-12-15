class ReversePromise extends Promise {
    constructor(resolve, reject) {
        super(resolve, reject);
    }

    then(cb) {
        (async function(cb) {
            await cb();
        })();
        return this;
    }
}

// let	revPromise = new ReversePromise((resolve) => {
//     console.log(1);
//     resolve();
// })
// .then(() => console.log(2))
// .then(() => console.log(3))
// .then(() => console.log(4))

//1, 4, 3, 2

console.log('------------------------')

let worker = new Worker('./worker.js');
function testWorker () {
    console.log('Hello my first Worker');
}

worker.postMessage({
    eventList: () => console.log(2),
});
console.log('Message sent to worker');

worker.onmessage = function(e) {
    // result.textContent = e.data;
    console.log(e.data);
  }

// let	promise = new Promise((resolve) => {
//     console.log(1);
//     resolve();
// })
// .then(() => console.log(2))
// .then(() => console.log(3))
// .then(() => console.log(4))

// //1, 4, 3, 2