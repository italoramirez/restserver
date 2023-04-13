// const { response } = require('express') => para que reconozca los onjetos con el punto
const getUsers = (req, res/*  = response */) => {
    res.json({
        msg: 'get API - controller'
    })
}

const updateUser = (req, res) => {
    res.json({
        msg: 'put API - controller'
    })
}

const createUser = (req, res) => {
    res.status(201).json({
        msg: 'post API - controller'
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
