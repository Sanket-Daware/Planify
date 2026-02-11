const express = require('express')
const router = express.Router()
const {
  getTeamMembers,
  getAvailableTeamMembers,
  addExistingMember,
  inviteTeamMember,
  removeTeamMember,
  updateMemberRole
} = require('../controllers/teamController')
const { protect, authorize } = require('../middleware/auth')

router.route('/')
  .get(protect, authorize('organizer', 'admin'), getTeamMembers)

router.get('/available', protect, authorize('organizer', 'admin'), getAvailableTeamMembers)

router.post('/add-member', protect, authorize('organizer', 'admin'), addExistingMember)

router.post('/invite', protect, authorize('organizer', 'admin'), inviteTeamMember)

router.route('/:id')
  .delete(protect, authorize('organizer', 'admin'), removeTeamMember)

router.put('/:id/role', protect, authorize('organizer', 'admin'), updateMemberRole)

module.exports = router
