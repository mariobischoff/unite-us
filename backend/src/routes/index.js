const router = require('express').Router()
const usersRoute = require('./users')
const teamsRoute = require('./teams')
const questionsRoute = require('./questions')

router.use('/users', usersRoute)
router.use('/teams', teamsRoute)
router.use('/questions', questionsRoute)

module.exports = router
