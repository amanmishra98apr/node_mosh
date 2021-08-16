const mongoose = require('./dbConfig')


// create schema
const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: Date, default: Date.now },
        isPublished: Boolean
    })
    // create collection
const Course = mongoose.model('Course', courseSchema);

// insert a record in a collection
async function createCourse() {
    const course = new Course({
        name: "rahul",
        author: "sharma",
        tags: ['red hat', 'devops'],
        isPublished: true
    })

    const result = await course.save();
    console.log(result);
}

// find all records in a collection
async function getCourses() {
    const allCourses = await Course.find();
    console.log(allCourses);
}

// find a sinngle record from collection
async function getSingleCourse() {
    const singleCourse = await Course.find({ name: "rahul" }, { name: 1, author: 1, _id: 0 });
    console.log(singleCourse);
}


// update a record
// collection name is Course
async function updateRecord() {
    const updateRecord = await Course.updateOne({ name: "rahul", tags: "devops" }, { $set: { "tags.$": "ops" } })
    console.log(updateRecord)
}

updateRecord()
    // getSingleCourse()
    // getCourses()
    // createCourse()