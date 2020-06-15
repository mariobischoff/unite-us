const pagarme = require('pagarme')

module.exports = class PaymentController {
  constructor (Payment, User) {
    this.Payment = Payment
    this.User = User
  }

  async create (req, res) {
    try {
      const client = await pagarme.client.connect({ api_key: 'ak_test_DHJaqykwyS0tVw6rgxJ6NiDzqXQ6fg' })
      const cardHash = await client.security.encrypt({
        amount: 40,
        card_number: '4111111111111111',
        card_holder_name: 'abc',
        card_expiration_date: '1225',
        card_cvv: '123'
      })

      const subscrition = await client.subscriptions.create({
        plan_id: '486370',
        card_hash: cardHash,
        customer: {
          email: 'testando@hotmail.com'
        }
      })

      console.log(subscrition)

      // const transaction = await client.transactions.create({
      //   amount: 2500,
      //   card_hash: cardHash,
      //   billing: {
      //     name: 'usuarioTest',
      //     address: {
      //       street: 'Rua Z',
      //       street_number: '400',
      //       zipcode: '13630000',
      //       country: 'br',
      //       state: 'SAO PAULO',
      //       city: 'Pirassununga'
      //     }
      //   },
      //   items: [
      //     {
      //       id: '01',
      //       title: 'item1',
      //       unit_price: 2000,
      //       quantity: 1,
      //       tangible: false
      //     }
      //   ],
      //   customer: {
      //     external_id: '#3311',
      //     name: 'Morpheus Fishburne',
      //     type: 'individual',
      //     country: 'br',
      //     email: 'mopheus@nabucodonozor.com',
      //     documents: [
      //       {
      //         type: 'cpf',
      //         number: '30621143049'
      //       }
      //     ],
      //     phone_numbers: ['+5511999998888', '+5511888889999'],
      //     birthday: '1965-01-01'
      //   }
      // })

      // const pay = pagarme.client.connect({ api_key: 'ak_test_7w0oJRvFgc3cJNaAUOH4SfxwwzeXOt' })
      //   .then(client => client.transactions.create({
      //     amount: req.body.amount,
      //     card_number: req.body.cardNumber,
      //     card_holder_name: req.body.cardName,
      //     card_expiration_date: req.body.cardExpiration,
      //     card_cvv: req.body.cardCvv
      //   }))
      // console.log(transaction)
      res.status(200).send('certo')
    } catch (error) {
      res.status(400).send(error)
    }
  }
}
