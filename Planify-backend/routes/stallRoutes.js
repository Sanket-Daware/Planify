const express = require('express')
const router = express.Router()
const {
  getStallsByExhibition,
  createStall,
  bookStall,
  getStallAvailability,
  updateStall,
  deleteStall
} = require('../controllers/stallController')
const { protect, authorize } = require('../middleware/auth')

router.post('/', protect, authorize('organizer', 'admin'), createStall)

router.route('/:id')
  .put(protect, authorize('organizer', 'admin'), updateStall)
  .delete(protect, authorize('organizer', 'admin'), deleteStall)

router.post('/:id/book', protect, authorize('exhibitor'), bookStall)

module.exports = router
