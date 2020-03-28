module.exports = class UsersController {
  constructor (User) {
    this.User = User
  }

  async get (req, res) {
    res.send('Get User')
  }
}
