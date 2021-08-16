var fs = require('fs');

var readfile = fs.readFile('aman.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("err", err);
    }
    console.log("data", data)
});

// console.log(readfile);