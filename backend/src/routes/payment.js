const router = require('express').Router()
const PaymentController = require('../controllers/payment')
const Payment = require('../models/payment')
const User = require('../models/user')

const paymentController = new PaymentController(Payment, User)

router.post('/', (req, res) => paymentController.create(req, res))

module.exports = router
