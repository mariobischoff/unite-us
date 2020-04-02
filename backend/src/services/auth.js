const jwt = require('jsonwebtoken')

module.exports = class Auth {
  constructor (User) {
    this.User = User
  }

  async authenticate (credentials) {
    const { email, password } = credentials
    try {
      const user = await this.User.findOne({ email })
      if (!user) return false
      const match = await user.comparePassword(password)
      if (!match) return false
      else return user
    } catch (err) {
      console.log(err)
    }
  }

  static generateToken (payload) {
    return jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: '7d'
    })
  }
}
