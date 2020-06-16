module.exports = class PaymentController {
  constructor (User, PaymentService) {
    this.PaymentService = PaymentService
    this.User = User
  }

  async create (req, res) {
    const { document_number: documentNumber, ...card } = req.body
    try {
      const user = await this.User.findById(req.decoded.id)
      if (!user.vip) {
        const paymentService = new this.PaymentService(process.env.PAGAR_KEY)
        await paymentService.init(card)
        await paymentService.createSubscription(user.email, documentNumber)
        user.vip = true
        await user.save()
        res.sendStatus(200)
      } else {
        res.status(409).send({ message: 'Você já é um VIP' })
      }
    } catch (error) {
      res.status(400).send({ message: error.response.errors[0].message })
    }
  }
}
