const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../db/config.connection')

class Server {
    constructor () {
        this.app = express()
        //port
        this.port = process.env.PORT
        //conección db
        this.connectionDb()
        //route
        this.usuariosPath = '/api/user'
        //Middlewares => funciones que van a añadir otra funcionalidad
        this.middlewares()
        //routes
        this.routes()
    }

    middlewares () {
        //cors
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use(express.json())
        //Directorio público
        this.app.use(express.static('public'))
    }

    routes () {
        this.app.use(this.usuariosPath, require('../routes/user.route'))
    }

    async connectionDb() {
        await dbConnection()
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server
