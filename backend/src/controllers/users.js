module.exports = class UsersController {
  constructor (User, AuthService) {
    this.User = User
    this.AuthService = AuthService
  }

  async create (req, res) {
    if (req.body.password !== req.body.repassword) {
      res.status(422).send('password don\'t match')
    } else {
      const user = this.User(req.body)
      try {
        await user.save()
        res.sendStatus(201)
      } catch (err) {
        res.status(422).send(err.message)
      }
    }
  }

  async belbinTest (req, res) {
    const answers = req.body
    // const { decoded: { _id: id } } = req
    // const user = await this.User.findById(id)
    const pl = answers.filter(answer => answer.group === 'PL')
    console.log(pl)
  }

  async get (req, res) {
    try {
      const users = await this.User.find({})
      res.send(users)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async getById (req, res) {
    const {
      params: { id }
    } = req
    try {
      const user = await this.User.find({ _id: id })
      res.send(user)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async update (req, res) {
    const body = req.body
    try {
      const user = await this.User.findById(req.params.id)
      user.email = body.email
      for (const key in Object.keys(body)) {
        user[key] = body[key]
      }
      await user.save()
      res.sendStatus(200)
    } catch (err) {
      res.status(422).send(err.message)
    }
  }

  async remove (req, res) {
    try {
      await this.User.deleteOne({ _id: req.params.id })
      res.sendStatus(204)
    } catch (err) {
      res.status(400).send(err.message)
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
        fullName: user.fullName,
        role: user.role
      })
      return res.send({ token, name: user.fullName })
    } catch (error) {
      return res.send(error)
    }
  }
}
