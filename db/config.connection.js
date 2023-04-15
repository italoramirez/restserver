const  mongoose = require('mongoose')
const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // UseFindAndModify: false
        })
        console.log('db online')

    } catch (e) {
        console.error(e)
        throw new Error('Error en al conectar la base de datos  ')
    }
}

module.exports = {
    dbConnection
}
