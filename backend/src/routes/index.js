const router = require('express').Router()
const usersRoute = require('./users')
const teamsRoute = require('./teams')

router.use('/users', usersRoute)
router.use('/teams', teamsRoute)

module.exports = router
