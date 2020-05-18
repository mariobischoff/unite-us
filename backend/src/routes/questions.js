const router = require('express').Router()
const Question = require('../models/question')
const QuestionsController = require('../controllers/questions')
// const auth = require('../middlewares/auth')

const questionsController = new QuestionsController(Question)

router.post('/', (req, res) => questionsController.create(req, res))
router.get('/', (req, res) => questionsController.get(req, res))
router.get('/:id', (req, res) => questionsController.getById(req, res))
router.put('/:id', (req, res) => questionsController.update(req, res))
router.delete('/:id', (req, res) => questionsController.remove(req, res))

module.exports = router
