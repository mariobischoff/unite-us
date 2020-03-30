const express = require('express')
const routes = require('./routes')
const database = require('./database')
const morgan = require('morgan')

const app = express()

const configureApp = () => {
  app.use(express.json())
  app.use(morgan('tiny'))

  app.use('/', routes)
  app.database = database

  return app
}

module.exports = async () => {
  const app = configureApp()
  await app.database.connect()
  return app
}
