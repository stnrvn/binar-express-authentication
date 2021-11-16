const router = require('express').Router()

const HomeController = require('../controllers/homeController.js')

router.get('/', HomeController.home)

module.exports = router