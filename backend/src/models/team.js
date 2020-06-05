const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String
  },
  goal: {
    type: String
  },
  workAt: {
    type: String,
    enum: ['remoto', 'local', 'misto']
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Team = model('Team', schema)

module.exports = Team
