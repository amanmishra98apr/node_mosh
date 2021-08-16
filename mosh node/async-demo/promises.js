const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("hello aman!"); // pending->fulfilled

        reject(new Error('message')); // pending->rejected
    }, 2000)
})

p.then(function(result) {
    console.log("this is result: ", result);
})

.catch(function(err) {
    console.log("error is: ", err.message);
})