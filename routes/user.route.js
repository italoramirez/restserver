const { Router } = require('express')
const {
    getUsers,
    updateUser,
    createUser,
    deleteUser
} = require('../controllers/users.controller')
const { body } = require('express-validator')
const { validateFields } = require('../middlewares/validate.fields')
const { isRoleValidate, hasEmail } = require('../helpers/db-validators')

const router = Router()

router.get('/', getUsers)
router.put('/:id', updateUser)
router.post('/', [
    body('name').not().isEmpty().withMessage('El nombre es obligatorio'),
    body('password').not().isEmpty().isLength({ min: 5 })
        .withMessage('El password es obligatorio y debe tener mas de 6 caracteres'),
    // body('role').isIn(['ADMIN_ROLE', 'USER_ROLE']).withMessage('No es un rol valido'),
    // body('mail').isEmail().withMessage('El correo no es válido'),
    body('mail').isEmail().withMessage('El correo no es válido').custom(hasEmail),
    body('role').custom(isRoleValidate),
    validateFields
], createUser)
router.delete('/', deleteUser)
module.exports = router
