const express = require('express')

class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT
        //Middlewares => funciones que van a añadir otra funcionalidad
        this.middlewares()
        //routes
        this.routes()
    }

    middlewares () {
        //Directorio público
        this.app.use(express.static('public'))
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
