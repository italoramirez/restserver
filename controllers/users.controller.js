// const { response } = require('express') => para que reconozca los onjetos con el punto
const bcrypt = require('bcryptjs')

const User = require('../models/user.model')
const getUsers = (req, res/*  = response */) => {
    const { name = "No name" } = req.query
    res.json({
        msg: 'get API - controller',
        name
    })
}

const updateUser = (req, res) => {
    const id = req.params.id
    res.json({
        msg: 'put API - controller',
        id
    })
}

const createUser = async (req, res) => {
    const { name, mail, password, role } = req.body
    const user = new User({
        name,
        mail,
        password,
        role
    })
    // const user = new User(body)
    // validate mail
    // const isEmail = await User.findOne({ mail })
    // console.log(isEmail)
    // if (isEmail) {
    //     return res.status(400).json({
    //         error: 'El correo ya existe'
    //     })
    // }
    // Encrypt pass
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()
    res.status(201).json({
        user
    })
}

const deleteUser =  (req, res) => {
    res.json({
        msg: 'delete API -controller'
    })
}

module.exports = {
    getUsers,
    updateUser,
    createUser,
    deleteUser
}
