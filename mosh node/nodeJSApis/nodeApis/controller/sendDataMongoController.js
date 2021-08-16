const Student = require("../model/studentModel.js");


const sendDataMongoController = {
    async sendDataMongo(req, res, next) {
        try {
            const student = new Student({
                roll: 21,
                name: "aman",
                branch: "cs",
            })

            const result = await student.save();
            console.log(result);
            res.status(200).send({ "status": "OK", "result": result })
        } catch (err) {
            res.status(500).send({ "status": "error", "message": err.message })
        }
    }
}

module.exports = sendDataMongoController;