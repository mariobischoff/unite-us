const router = require('express').Router()
const User = require('../models/user')
const UsersController = require('../controllers/users')

const usersController = new UsersController(User)

router.get('/', (req, res) => usersController.get(req, res))
router.post('/', (req, res) => usersController.create(req, res))

module.exports = router
