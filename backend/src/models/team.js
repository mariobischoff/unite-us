const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Team = model('Team', schema)

module.exports = Team
