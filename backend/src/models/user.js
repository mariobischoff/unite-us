const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: 'guest'
  }
})

schema.pre('save', async function (next) {
  if (!this.password || !this.isModified('password')) return next()
  try {
    const hashPassword = await bcrypt.hash(this.password, 10)
    this.password = hashPassword
  } catch (err) {
    next(err)
  }
})

schema.methods.comparePassword = async function (candidatePassword) {
  try {
    const match = await bcrypt.compare(candidatePassword, this.password)
    return match
  } catch (err) {
    console.error(err.message)
  }
}

schema.set('toJSON', {
  transform: (doc, ret) => ({
    _id: ret._id,
    email: ret.email,
    role: ret.role
  })
})

const User = mongoose.model('User', schema)

module.exports = User
