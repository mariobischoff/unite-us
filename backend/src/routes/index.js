const router = require('express').Router()
const usersRoute = require('./users')
const teamsRoute = require('./teams')
const questionsRoute = require('./questions')
const paymentRouter = require('./payment')

router.use('/users', usersRoute)
router.use('/teams', teamsRoute)
router.use('/questions', questionsRoute)

router.use('/pay', paymentRouter)

module.exports = router
