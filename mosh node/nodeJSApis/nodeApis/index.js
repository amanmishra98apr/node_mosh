const express = require('express');


const routes = require('./routes/index.js');
const app = express();




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', routes);


APP_PORT = 3000;

app.listen(APP_PORT, () => {
    console.log(`listening on port ${APP_PORT}`);
});