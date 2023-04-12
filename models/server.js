const express = require('express')

class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT
        this.routes()
    }

    routes () {

        this.app.get('/', (req, res) => {
            res.send('hola mundo')
        })
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server
