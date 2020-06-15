const { Schema, model } = require('mongoose')

const schema = new Schema({
  text: {
    type: String
  },
  group: {
    type: String,
    enum: ['PL', 'RI', 'CO', 'SH', 'ME', 'TW', 'IM', 'CF', 'SP', 'DR']
  }
})

const Payment = model('Payment', schema)

module.exports = Payment