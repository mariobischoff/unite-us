module.exports = class TeamController {
  constructor (Team) {
    this.Team = Team
  }

  async get (req, res) {
    res.send('Get Team')
  }
}
