const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
    .then(function() {
        console.log("connected to mongodb");
    })
    .catch(function(err) {
        console.error("could not connect with mongodb: ", err);
    })


module.exports = mongoose;