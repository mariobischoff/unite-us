const router = require('express').Router()
const Team = require('../models/team')
const TeamsController = require('../controllers/teams')

const teamsController = new TeamsController(Team)

router.get('/', teamsController.get)

module.exports = router
