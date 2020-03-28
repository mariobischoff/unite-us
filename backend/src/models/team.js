const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // Definir o esquema da Equipe
})

const Team = mongoose.model('Team', schema)

module.exports = Team
