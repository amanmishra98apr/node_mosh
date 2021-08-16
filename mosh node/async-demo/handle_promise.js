// handling it using promise
console.log("Promise")
console.log("Before");

getUser3(2)
    .then(function(result) {
        console.log(result)
    })

console.log("After");

function getUser3(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("reading a user from db3");
            resolve(id);
        }, 2000)
    })
}