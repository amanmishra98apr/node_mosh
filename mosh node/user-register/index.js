const mongoose = require('./dbConfig')
const Joi = require('@hapi/joi');
const lodash = require('lodash');
const bcrypt = require('bcrypt');



// create schema
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 10
        },
        email: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1000
        }
    })
    // create collection
const User = mongoose.model('User', userSchema);

// validate schema using joii
function validateUser(user1) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(10).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user1);
}


const express = require('express');
const { func } = require('@hapi/joi');
app = express();
// middleware
app.use(express.json());


// post api to user register
app.post('/aman', async function(req, res) {
    const response = validateUser(req.body);
    if (response.error) return res.status(400).send({ "status": response.error })
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send({ "status": "User already registered" });

    // user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    user = new User(lodash.pick(req.body, ['name', 'email', 'password']));

    // hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    result = await user.save();

    // use lodash
    return res.send(lodash.pick(user, ['_id', 'name', 'email']))
})

// get api to get single user
// app.get('/aman/:id', async function(req, res){

// })


const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})