const { Schema, model } = require('mongoose')

const schema = new Schema({
  text: {
    type: String
  },
  group: {
    type: Number
  }
})

const Question = model('Question', schema)

module.exports = Question
