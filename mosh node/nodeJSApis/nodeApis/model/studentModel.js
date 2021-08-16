const mongoose = require('../config/dbconfig.js');


// create schema
const studentSchema = new mongoose.Schema({
    roll: Number,
    name: String,
    branch: String,
    date: { type: Date, default: Date.now }
})


// create collection
const Student = mongoose.model('Student', studentSchema);


module.exports = Student;