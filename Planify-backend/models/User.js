const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false
    },
    userType: {
      type: String,
      enum: ['organizer', 'team', 'exhibitor', 'client'],
      required: true
    },
    role: {
      type: String,
      enum: ['organizer', 'team', 'exhibitor', 'client', 'admin'],
      default: 'client'
    },
    organizationName: {
      type: String,
      required: function() {
        return this.userType === 'organizer'
      }
    },
    companyName: {
      type: String,
      required: function() {
        return this.userType === 'exhibitor'
      }
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    teamStatus: {
      type: String,
      enum: ['independent', 'invited', 'member'],
      default: 'independent'
    },
    invitationToken: {
      type: String,
      default: null
    },
    isActive: {
      type: Boolean,
      default: true
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
)

// Hash password before saving
userSchema.pre('save', async function() {
  if (!this.isModified('password')) {
    return
  }
  
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// Match password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)
