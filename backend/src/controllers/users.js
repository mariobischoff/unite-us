module.exports = class UsersController {
  constructor (User) {
    this.User = User
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
}
