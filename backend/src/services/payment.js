const pagarme = require('pagarme')

module.exports = class PaymentService {
  constructor (apiKey) {
    this.apiKey = apiKey
    this.planId = '486375'
  }

  async init (card) {
    this.client = await pagarme.client.connect({ api_key: this.apiKey })
    this.cardHash = await this.client.security.encrypt({ ...card })
  }

  async createSubscription (userEmail, documentNumber) {
    await this.client.subscriptions.create({
      plan_id: this.planId,
      card_hash: this.cardHash,
      customer: {
        email: userEmail,
        document_number: documentNumber
      }
    })
  }
}
