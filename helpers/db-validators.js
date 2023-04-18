const Role = require('../models/role.model')
const User = require('../models/user.model')
const isRoleValidate = async (role = '') => {
    const isRol = await Role.findOne({ role })
    if (!isRol) {
        throw new Error(`El rol ${ role } no es válido`)
    }
}

const hasEmail = async (mail) => {
    const isEmail = await User.findOne({ mail })
    if (isEmail) {
        throw new Error(`El correo ${ mail } ya existe`)
    }
}

module.exports = {
    isRoleValidate,
    hasEmail
}
