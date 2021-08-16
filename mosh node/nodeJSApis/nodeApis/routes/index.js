const express = require('express');
const sendDataController = require('../controller/sendDataController.js');
const pathParamsController = require('../controller/pathParamsController.js');
const queryParamsController = require('../controller/queryParamsController.js');
const sendPostDataController = require('../controller/sendPostDataController.js');
const sendDataMongoController = require('../controller/sendDataMongoController.js');





const router = express.Router();


router.get('/data', sendDataController.sendData);

router.get('/data/:id/:name', pathParamsController.pathParams);

router.get('/data1', queryParamsController.queryParams);

router.post('/data', sendPostDataController.sendPostData);

router.post('/mongo', sendDataMongoController.sendDataMongo);





module.exports = router;