const sendPostDataController = {
    async sendPostData(req, res, next) {
        try {
            let data = req.body;
            res.status(200).send({ "status": "OK", "data": data })
        } catch (err) {
            res.status(500).send({ "status": "error", "message": err.message })
        }
    }
}

module.exports = sendPostDataController;