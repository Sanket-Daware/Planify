const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema(
  {
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    members: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      role: {
        type: String,
        enum: ['admin', 'manager', 'staff'],
        default: 'staff'
      },
      permissions: [{
        type: String,
        enum: ['create_exhibition', 'edit_exhibition', 'manage_stalls', 'view_reports', 'manage_team']
      }],
      joinedAt: {
        type: Date,
        default: Date.now
      },
      status: {
        type: String,
        enum: ['active', 'inactive', 'pending'],
        default: 'pending'
      }
    }],
    invitations: [{
      email: String,
      role: String,
      invitedAt: Date,
      status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending'
      },
      token: String
    }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Team', teamSchema)
