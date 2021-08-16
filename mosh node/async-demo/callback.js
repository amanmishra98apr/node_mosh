// handling it using callback
console.log("callback");
console.log("Before");

getUser2(2, function(id) {
    console.log(id)
})

console.log("After");

function getUser2(id, callback) {
    setTimeout(function() {
        console.log("reading a user from db2");
        callback(id);
    }, 2000)
}