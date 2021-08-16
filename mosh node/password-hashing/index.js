const bcrypt = require('bcrypt');

// to hash the password
async function run() {
    const salt = await bcrypt.genSalt(10);
    hashed_password = await bcrypt.hash("aman19apr", salt);
    console.log(salt)
    console.log(hashed_password)
}
run()

// to compare password
async function comp() {
    hashed_password = "$2b$10$WRMx7GSYyDZjAMfh.gMVMeKvtErbMtZkkjZrpqAl6AhKGNtMHaDIy"
    mypassword = "aman19apr"
    const result = await bcrypt.compare(mypassword, hashed_password)
    console.log(result);
}
comp()

// steps
// 1. create salt with round 10
// 2. use bcrypt.hash method and pass password and salt and it returns promise so await is used