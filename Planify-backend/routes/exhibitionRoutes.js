const express = require('express')
const router = express.Router()
const {
  getExhibitions,
  getExhibition,
  createExhibition,
  updateExhibition,
  deleteExhibition,
  getStats
} = require('../controllers/exhibitionController')
const { protect, authorize } = require('../middleware/auth')

router.route('/')
  .get(getExhibitions)
  .post(protect, authorize('organizer', 'admin'), createExhibition)

router.get('/stats', protect, authorize('organizer', 'admin'), getStats)

router.route('/:id')
  .get(getExhibition)
  .put(protect, authorize('organizer', 'admin'), updateExhibition)
  .delete(protect, authorize('organizer', 'admin'), deleteExhibition)

module.exports = router
