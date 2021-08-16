const fs = require('fs');

// synchronous form
const file = fs.readdirSync('./');
console.log("sync");
console.log(file);

// asynchronous form
// asynchronous function contains last argument as a callback function
fs.readdir('./', function(err, files) {
    if (err) {
        console.log("error is: " + err);
    } else {
        console.log("async");
        console.log(files);
    }
})