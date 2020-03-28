const express = require('express')
const database = require('./database')

const app = express()

const configureApp = () => {
  app.use(express.json())
  app.database = database
  return app
}

module.exports = async () => {
  const app = configureApp()
  await app.database.connect()
  return app
}
