const pagarme = require('pagarme')

module.exports = class PaymentController {
  constructor (Payment, User) {
    this.Payment = Payment
    this.User = User
  }

  async create (req, res) {
    try {
      const pay = pagarme.client.connect({ api_key: 'ak_test_7w0oJRvFgc3cJNaAUOH4SfxwwzeXOt' })
        .then(client => client.transactions.create({
          amount: req.body.amount,
          card_number: req.body.cardNumber,
          card_holder_name: req.body.cardName,
          card_expiration_date: req.body.cardExpiration,
          card_cvv: req.body.cardCvv,
        }))
      res.status(200).send('certo')
    } catch (error) {
      res.status(400).send(error)
    }
  }
}
