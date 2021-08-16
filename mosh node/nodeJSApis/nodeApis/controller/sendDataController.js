const sendDataController = {
    async sendData(req, res, next) {
        try {
            res.status(200).send({ "status": "OK" })
        } catch (err) {
            res.status(500).send({ "status": "error", "message": err.message })
        }
    }
}

module.exports = sendDataController;