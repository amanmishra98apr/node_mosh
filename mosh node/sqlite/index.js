const sqlite3 = require('sqlite3').verbose();




let db = new sqlite3.Database('./amandb.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});
db.run('CREATE TABLE IF NOT EXISTS emp(id TEXT, name TEXT)');

db.run('INSERT INTO emp(id,name) VALUES(?,?)', [1,
    "aman"
]);
console.log("done")