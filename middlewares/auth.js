const { checkToken } = require('../helpers/jwt')
const { Users, Todo } = require('../models/index')
const router = require('../routes')

async function authenticate(req, res, next) {
    //cektoken
    try{
        var token = req.cookies.auth

        let decoded = checkToken(token)

        let find = await Users.findOne({
            where: {
                username: decoded.username
            }
        })

        if(!find){
            return res.status(401).json({
                message: 'please login first'
            })
        }else{
            req.user = find
            next()
        }
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
  authenticate
}