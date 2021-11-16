const bcrypt = require('bcryptjs');

function hashPassword(userPassword){
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(userPassword, salt);

    return hash
}

function comparePassword(userPassword, dbPassword){
    return bcrypt.compareSync(userPassword, dbPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}