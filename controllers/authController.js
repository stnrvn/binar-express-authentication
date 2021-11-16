const { Users } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken} = require('../helpers/jwt')

class AuthController {
  static async register(req, res){
    try {
        const opt = {
            username: req.body.username,
            password: req.body.password
        }

        const result = await Users.create(opt)

        //balikin data id sama username aja
        const response = {
            id: result.id,
            username: result.username
        }

        return res.redirect('/login')
    } catch (error) {
        return res.status(400).json(error)
    }
  }

  static async login(req, res){
    try {
      const opt = {
        username: req.body.username,
        password: req.body.password
    }

    const result = await Users.findOne({
        where: {
            username : opt.username
        }
    })

    if(!result){
        return res.status(401).json({
            message: 'Invalid username / password'
        })
    }

    const match = comparePassword(opt.password, result.password)

    if(match){
        //ngirim jwt
        const payload = {
            id: result.id,
            username: result.username
        }

        const access_token = generateToken(payload)

        res.cookie('auth', access_token);
        res.redirect('/')
    }else{
        return res.status(401).json({
            message: 'Invalid username / password'
        })
    }
    } catch (error) {
      return res.send(error)
    }
  }

}

module.exports = AuthController