module.exports = class UsersController {
  constructor (User, AuthService) {
    this.User = User
    this.AuthService = AuthService
  }

  async get (req, res) {
    try {
      const users = await this.User.find({})
      res.send(users)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async create (req, res) {
    const user = await this.User(req.body)
    try {
      await user.save()
      res.sendStatus(201)
    } catch (err) {
      res.status(422).send(err.message)
    }
  }

  async auth (req, res) {
    const credentials = req.body
    const authService = new this.AuthService(this.User)
    const user = await authService.authenticate(credentials)
    if (!user) {
      return res.sendStatus(401)
    }
    try {
      const token = this.AuthService.generateToken({
        _id: user._id,
        email: user.email,
        role: user.role
      })
      return res.send({ token })
    } catch (error) {
      return res.send(error)
    }
  }
}
