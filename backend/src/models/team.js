const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  workAt: {
    type: String,
    required: true,
    enum: ['remoto', 'local', 'remoto/local']
  },
  leader: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  members: {
    type: Array
  }
})

const Team = model('Team', schema)

module.exports = Team
