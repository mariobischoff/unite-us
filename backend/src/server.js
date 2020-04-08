const setupApp = require('./app')
require('dotenv').config()
const port = process.env.PORT || 3000;

(async () => {
  try {
    const app = await setupApp()
    const server = app.listen(port, () => {
      console.log(`api running on port ${port}`)
    })
    const exitSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT']
    exitSignals.map(sig => {
      process.on(sig, () => {
        server.close(err => {
          if (err) {
            console.error(err)
            process.exit(1)
          }
          app.database.connection.close(() => {
            console.info('Database connection closed!')
            process.exit(0)
          })
        })
      })
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
