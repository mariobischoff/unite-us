const router = require('express').Router()
const User = require('../models/user')
const UsersController = require('../controllers/users')
const AuthService = require('../services/auth')
const auth = require('../middlewares/auth')

const usersController = new UsersController(User, AuthService)

router.get('/', auth, (req, res) => usersController.get(req, res))
router.post('/', (req, res) => usersController.create(req, res))
router.post('/auth', (req, res) => usersController.auth(req, res))

module.exports = router
