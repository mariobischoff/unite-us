module.exports = class QuestionController {
  constructor (Question) {
    this.Question = Question
  }

  async create (req, res) {
    const question = this.Question(req.body)
    try {
      await question.save()
      res.sendStatus(201)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async get (req, res) {
    try {
      const questions = await this.Question.find()
      res.send(questions)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async getById (req, res) {
    const {
      params: { id }
    } = req
    try {
      const question = await this.Question.find({ _id: id })
      res.send(question)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async update (req, res) {
    const body = req.body
    try {
      const question = await this.Question.findById(req.params.id)
      question.text = body.text
      question.group = body.group
      await question.save()
      res.sendStatus(200)
    } catch (err) {
      res.status(422).send(err.message)
    }
  }

  async remove (req, res) {
    try {
      await this.Question.deleteOne({ _id: req.params.id })
      res.sendStatus(204)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }
}
