const router = require('express').Router()

const AuthController = require('../controllers/authController.js')

router.get('/register', (req, res) => res.render('register'))
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/login', (req, res) => res.render('login'))

module.exports = router