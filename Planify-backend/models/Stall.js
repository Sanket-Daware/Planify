const mongoose = require('mongoose')

const stallSchema = new mongoose.Schema(
  {
    stallNumber: {
      type: String,
      required: true
    },
    exhibition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exhibition',
      required: true
    },
    size: {
      width: Number,
      length: Number,
      unit: {
        type: String,
        default: 'sqft'
      }
    },
    location: {
      section: String,
      floor: String,
      position: String
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['available', 'booked', 'reserved', 'unavailable'],
      default: 'available'
    },
    bookedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    bookingDate: Date,
    amenities: [{
      type: String
    }],
    specifications: {
      electricity: Boolean,
      wifi: Boolean,
      storage: Boolean,
      furniture: Boolean
    }
  },
  {
    timestamps: true
  }
)

// Compound index for unique stall numbers per exhibition
stallSchema.index({ stallNumber: 1, exhibition: 1 }, { unique: true })

module.exports = mongoose.model('Stall', stallSchema)
