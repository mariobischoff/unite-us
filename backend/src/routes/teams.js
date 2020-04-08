const router = require('express').Router()
const Team = require('../models/team')
const TeamsController = require('../controllers/teams')
const auth = require('../middlewares/auth')

const teamsController = new TeamsController(Team)

router.post('/', auth, (req, res) => teamsController.create(req, res))
router.get('/', auth, (req, res) => teamsController.get(req, res))
router.get('/:id', auth, (req, res) => teamsController.getById(req, res))
router.put('/:id', auth, (req, res) => teamsController.update(req, res))
router.delete('/:id', auth, (req, res) => teamsController.remove(req, res))

module.exports = router
