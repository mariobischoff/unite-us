const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    default: 'Empty'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  expertise: {
    type: String,
    default: 'Empty'
  },
  workAt: {
    type: String,
    default: 'remote/local',
    enum: ['remote', 'local', 'remote/local']
  },
  pretension: {
    type: Array,
    default: [0, 1000]
  },
  lastGraduation: {
    type: String,
    default: 'Empty'
  },
  skills: {
    type: Array,
    default: []
  },
  belbinTest: {
    type: Object
  },
  vip: {
    type: Boolean,
    default: false
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
    fullName: ret.fullName,
    city: ret.city,
    pretension: ret.pretension,
    email: ret.email,
    vip: ret.vip,
    belbinTest: ret.belbinTest
  })
})

const User = model('User', schema)

module.exports = User
