const router = require('express').Router()
const homeRouter = require('./home')
const authRouter = require('./auth')
const { authenticate } = require('../middlewares/auth')

router.use(authRouter)

router.use(authenticate) // req { Headers, params, query, body, user }

router.use(homeRouter)

module.exports = router