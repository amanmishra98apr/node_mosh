const queryParamsController = {
    async queryParams(req, res, next) {
        try {
            let data = req.query;
            res.status(200).send({ "status": "OK", "data": data })
        } catch (err) {
            res.status(500).send({ "status": "error", "message": err.message })
        }
    }
}

module.exports = queryParamsController;