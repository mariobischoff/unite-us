module.exports = class TeamController {
  constructor (Team) {
    this.Team = Team
  }

  async create (req, res) {
    const { id } = req.decoded
    const team = this.Team(req.body)
    team.leader = id
    team.members.push(id)
    try {
      await team.save()
      res.sendStatus(201)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async get (req, res) {
    const query = req.query
    try {
      const teams = await this.Team.find(query).populate('leader')
      res.send(teams)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async getById (req, res) {
    const { params: { id } } = req
    try {
      const team = await this.Team.findById(id).populate('members')
      res.send(team)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async update (req, res) {
    const { body } = req
    try {
      const team = await this.Team.findById(req.params.id)
      if (body.member) {
        team.members.push(body.member)
        delete body.member
      }
      for (const key of Object.keys(body)) {
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
