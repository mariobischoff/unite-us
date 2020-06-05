const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  vip: {
    type: Boolean,
    default: false
  },
  city: {
    type: String
  },
  availability: {
    type: String,
    enum: ['remoto', 'local', 'remoto/local']
  },
  pretension: {
    type: Array,
    default: [0, 100000]
  },
  fullName: {
    type: String
  },
  belbinTest: {
    type: Object
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
