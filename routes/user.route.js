const { Router } = require('express')
const {
    getUsers,
    updateUser,
    createUser,
    deleteUser
} = require('../controllers/users.controller')

const router = Router()

router.get('/', getUsers)
router.put('/', updateUser)
router.post('/', createUser)
router.delete('/', deleteUser)
module.exports = router
