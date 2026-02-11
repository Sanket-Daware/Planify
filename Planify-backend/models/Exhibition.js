const mongoose = require('mongoose')

const exhibitionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Exhibition name is required'],
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    location: {
      venue: {
        type: String,
        required: true
      },
      address: String,
      city: String,
      state: String,
      country: String,
      zipCode: String
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    status: {
      type: String,
      enum: ['draft', 'upcoming', 'active', 'completed', 'cancelled'],
      default: 'draft'
    },
    totalStalls: {
      type: Number,
      default: 0
    },
    bookedStalls: {
      type: Number,
      default: 0
    },
    exhibitors: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    images: [{
      type: String
    }],
    pricing: {
      currency: {
        type: String,
        default: 'USD'
      },
      basePrice: {
        type: Number,
        required: true
      }
    },
    categories: [{
      type: String
    }],
    isPublished: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

// Virtual for stall occupancy percentage
exhibitionSchema.virtual('occupancyRate').get(function() {
  if (this.totalStalls === 0) return 0
  return ((this.bookedStalls / this.totalStalls) * 100).toFixed(2)
})

module.exports = mongoose.model('Exhibition', exhibitionSchema)
