const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // Definir o esquema de Usuário
})

const User = mongoose.model('User', schema)

module.exports = User
