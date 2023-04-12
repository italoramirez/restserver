require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.listen(port, () => {
    console.log(`corriendo en el puerto ${port}`)
})
