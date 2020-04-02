const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.sendStatus(401)
  }
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.sendStatus(401)
    req.decoded = decoded
    next(err)
  })
}
