const mongoose = require('mongoose')

module.exports = {
  connect () {
    mongoose.connection.on('connected', () => console.log('Database connected!'))
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  },
  connection: mongoose.connection
}
