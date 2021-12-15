onmessage = function(e) {
    console.log('Message received from main script');
    console.log(e);
    let workerResult = 'Result: ' + e.data;
    console.log('Posting message back to main script');
    postMessage(workerResult);
  }