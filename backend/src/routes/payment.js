const router = require('express').Router()
const auth = require('../middlewares/auth')
const PaymentController = require('../controllers/payment')
const PaymentService = require('../services/payment')
const User = require('../models/user')

const paymentController = new PaymentController(User, PaymentService)

router.post('/', auth, (req, res) => paymentController.create(req, res))

module.exports = router
