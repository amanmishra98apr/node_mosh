// handling it using async/await

console.log("async/await")
console.log("Before");

async function show() {
    result = await getUser3(2)
    console.log(result)
}
show()


console.log("After");

function getUser3(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("reading a user from db3");
            resolve(id);
        }, 2000)
    })
}