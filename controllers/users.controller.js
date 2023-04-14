// const { response } = require('express') => para que reconozca los onjetos con el punto
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

const createUser = (req, res) => {
    const body = req.body
    console.log(body)
    res.status(201).json({
        msg: 'post API - controller',
        body
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
