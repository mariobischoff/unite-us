const router = require('express').Router()
const User = require('../models/user')
const UsersController = require('../controllers/users')
const AuthService = require('../services/auth')
const auth = require('../middlewares/auth')

const usersController = new UsersController(User, AuthService)

router.post('/', (req, res) => usersController.create(req, res))
router.get('/', auth, (req, res) => usersController.get(req, res))
router.get('/:id', auth, (req, res) => usersController.getById(req, res))
router.put('/:id', auth, (req, res) => usersController.update(req, res))
router.delete('/:id', auth, (req, res) => usersController.remove(req, res))

router.post('/auth', (req, res) => usersController.auth(req, res))

module.exports = router
