// handle promises parallely

p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("facebook api data");
        resolve(1);
    }, 2000)
})


p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("instagram api data");
        resolve(2);
    }, 2000)
})

Promise.all([p1, p2])
    .then(function(result) {
        console.log('result: ', result);
    })