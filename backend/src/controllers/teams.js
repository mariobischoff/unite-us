module.exports = class TeamController {
  constructor (Team) {
    this.Team = Team
  }

  async create (req, res) {
    const team = this.Team(req.body)
    try {
      await team.save()
      res.sendStatus(201)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async get (req, res) {
    try {
      const teams = await this.Team.find().populate('leader')
      res.send(teams)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async getById (req, res) {
    const {
      params: { id }
    } = req
    try {
      const team = await this.Team.find({ _id: id }).populate('leader')
      res.send(team)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async update (req, res) {
    const body = req.body
    try {
      const team = await this.Team.findById(req.params.id)
      team.email = body.email
      for (const key in Object.keys(body)) {
        team[key] = body[key]
      }
      await team.save()
      res.sendStatus(200)
    } catch (err) {
      res.status(422).send(err.message)
    }
  }

  async remove (req, res) {
    try {
      await this.Team.deleteOne({ _id: req.params.id })
      res.sendStatus(204)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }
}
