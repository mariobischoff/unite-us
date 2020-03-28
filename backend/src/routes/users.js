const router = require('express').Router()
const User = require('../models/user')
const UsersController = require('../controllers/users')

const usersController = new UsersController(User)

router.get('/', usersController.get)

module.exports = router
