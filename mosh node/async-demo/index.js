// aschronous nature
console.log("asynchronous nature")
console.log("Before");

value = getUser(2)
console.log(value);

console.log("After");

function getUser(id) {
    setTimeout(function() {
        console.log("reading a user from db");
        return id
    }, 2000)
}