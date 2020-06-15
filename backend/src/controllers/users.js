module.exports = class UsersController {
  constructor (User, Team, AuthService, BelbinService) {
    this.User = User
    this.Team = Team
    this.AuthService = AuthService
    this.BelbinService = BelbinService
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

  async get (req, res) {
    const { query } = req
    try {
      const users = await this.User.find(query)
      return res.send(users)
    } catch (err) {
      return res.status(400).send(err.message)
    }
  }

  async getBest (req, res) {
    const { params: { teamId } } = req
    try {
      const belbinSerive = new this.BelbinService(this.Team)
      const { members: teamMembers } = await this.Team.findById(teamId).select('members')
      const users = await this.User.find({
        _id: { $nin: teamMembers },
        belbinTest: { $exists: true },
        ...req.query
      })
      const bestUsers = await belbinSerive.filterUsers(users, teamId)
      res.send(bestUsers)
    } catch (err) {
      return res.status(400).send(err.message)
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

    // if user send answers
    if (body.answers) {
      const belbinSerive = new this.BelbinService()
      body.belbinTest = belbinSerive.calculateAnswer(body.answers)
      delete body.answers
    }

    try {
      const user = await this.User.findById(req.params.id)
      for (const key of Object.keys(body)) {
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
        id: user._id
      })
      return res.send({ token, id: user._id })
    } catch (error) {
      return res.send(error)
    }
  }
}
