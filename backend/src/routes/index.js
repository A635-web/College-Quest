const test = require("./test")
const auth = require("./auth")
const team = require("./team")
const upload=require("./Upload")

function routesV1(app) {
    app.use('/api/v1', test)
    app.use('/api/v1', auth)
    app.use('/api/v1', team)
    app.use('/api/v1/upload',upload)
}

module.exports = { routesV1 }