const mongoose = require('./dbConfig')
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const config = require('config');


// create schema
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            // required: true,
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
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user1);
}


const express = require('express');
app = express();
// middleware
app.use(express.json());


// post api to user register
app.post('/aman/auth', async function(req, res) {

    const response = validateUser(req.body);
    if (response.error) return res.status(400).send({ "status": response.error })
    try {
        let user = await User.findOne({ email: req.body.email });
        // bcrypt compare
        const result = await bcrypt.compare(req.body.password, user.password)
        const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
        if (!token) {
            return res.status(404).send("you are not authorized");
        } else {
            if (result == true) {
                res.header('x-auth-token', token).send({ "status": "login successful1", "token": token })
            } else {
                res.status(400).send({ "status": "invalid input" })
            }
        }

    } catch (err) {
        return res.status(404).send(err.message);
    }

})


const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})