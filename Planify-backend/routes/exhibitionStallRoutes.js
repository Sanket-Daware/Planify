const express = require('express')
const router = express.Router({ mergeParams: true })
const {
  getStallsByExhibition,
  getStallAvailability
} = require('../controllers/stallController')

router.get('/', getStallsByExhibition)
router.get('/availability', getStallAvailability)

module.exports = router
