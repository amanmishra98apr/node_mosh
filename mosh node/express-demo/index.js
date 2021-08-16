const express = require('express');
app = express();
// middleware
app.use(express.json());

// get api
app.get('/', function(req, res) {
    res.send("Hello World Aman ....");
})


app.get('/aman', function(req, res) {
    res.send("this is aman mishra");
})

// path parameter
app.get('/aman/:id', function(req, res) {
    rollNo = req.params.id
    res.send(`my roll no is ${rollNo}`);
})

// path parameters
app.get('/aman/:roll/:branch', function(req, res) {
    res.send(req.params);
})


// query parameter -> http://localhost:3000/aman2/21?sortby=aman
app.get('/aman2/:id', function(req, res) {
    rollNo = req.params.id
    console.log(`roll no is ${rollNo}`);
    res.send(req.query);
})


// error response 404
app.get('/shu/:id', function(req, res) {
    rollNo = req.params.id
    res.status(404).send(`roll number ${rollNo} not found`);
})


// post API
app.post('/aman/', function(req, res) {
    data = req.body
    res.send(data);
})




const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})