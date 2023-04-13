const express = require('express')
const cors = require('cors')

class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        //Middlewares => funciones que van a añadir otra funcionalidad
        this.middlewares()
        //routes
        this.routes()
    }

    middlewares () {
        //cors
        this.app.use(cors())
        //Directorio público
        this.app.use(express.static('public'))
    }

    routes () {
        this.app.use(this.usuariosPath, require('../routes/user'))
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server
