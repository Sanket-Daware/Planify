const Team = require('../models/Team')
const User = require('../models/User')

// @desc    Get team members
// @route   GET /api/team
// @access  Private (Organizer only)
const getTeamMembers = async (req, res) => {
  try {
    const team = await Team.findOne({ organizer: req.user._id })
      .populate('members.user', 'fullName email avatar teamStatus')

    if (!team) {
      return res.json({
        success: true,
        members: []
      })
    }

    res.json({
      success: true,
      members: team.members
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Get available team members (independent users)
// @route   GET /api/team/available
// @access  Private (Organizer only)
const getAvailableTeamMembers = async (req, res) => {
  try {
    // Find team members who registered independently
    const availableMembers = await User.find({
      userType: 'team',
      teamStatus: 'independent',
      isActive: true
    }).select('fullName email createdAt')

    res.json({
      success: true,
      count: availableMembers.length,
      members: availableMembers
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Add existing team member to organization
// @route   POST /api/team/add-member
// @access  Private (Organizer only)
const addExistingMember = async (req, res) => {
  try {
    const { userId, role = 'staff' } = req.body

    // Check if user exists and is a team member
    const user = await User.findById(userId)
    if (!user || user.userType !== 'team') {
      return res.status(404).json({ message: 'Team member not found' })
    }

    if (user.teamStatus !== 'independent') {
      return res.status(400).json({ message: 'User is already part of a team' })
    }

    // Get or create team
    let team = await Team.findOne({ organizer: req.user._id })
    if (!team) {
      team = await Team.create({
        organizer: req.user._id,
        members: [],
        invitations: []
      })
    }

    // Check if already a member
    const isMember = team.members.some(m => m.user.toString() === userId)
    if (isMember) {
      return res.status(400).json({ message: 'User is already a team member' })
    }

    // Add to team
    team.members.push({
      user: userId,
      role,
      status: 'active'
    })
    await team.save()

    // Update user
    user.organizationId = req.user._id
    user.teamStatus = 'member'
    await user.save()

    res.json({
      success: true,
      message: 'Team member added successfully',
      member: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Invite team member
// @route   POST /api/team/invite
// @access  Private (Organizer only)
const inviteTeamMember = async (req, res) => {
  try {
    const { email, role } = req.body

    let team = await Team.findOne({ organizer: req.user._id })

    if (!team) {
      team = await Team.create({
        organizer: req.user._id,
        members: [],
        invitations: []
      })
    }

    // Check if already invited
    const existingInvite = team.invitations.find(inv => inv.email === email && inv.status === 'pending')
    if (existingInvite) {
      return res.status(400).json({ message: 'Invitation already sent to this email' })
    }

    // Generate unique token
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36)

    // Add invitation
    team.invitations.push({
      email,
      role,
      invitedAt: Date.now(),
      token
    })

    await team.save()

    // TODO: Send email invitation with token
    const invitationLink = `${process.env.CLIENT_URL || 'http://localhost:5173'}/register?token=${token}&email=${email}`

    res.json({
      success: true,
      message: 'Invitation sent successfully',
      invitationToken: token,  // In production, send via email only
      invitationLink
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Remove team member
// @route   DELETE /api/team/:id
// @access  Private (Organizer only)
const removeTeamMember = async (req, res) => {
  try {
    const team = await Team.findOne({ organizer: req.user._id })

    if (!team) {
      return res.status(404).json({ message: 'Team not found' })
    }

    team.members = team.members.filter(
      member => member.user.toString() !== req.params.id
    )

    await team.save()

    // Update user status back to independent
    await User.findByIdAndUpdate(req.params.id, {
      organizationId: null,
      teamStatus: 'independent'
    })

    res.json({
      success: true,
      message: 'Team member removed successfully'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Update team member role
// @route   PUT /api/team/:id/role
// @access  Private (Organizer only)
const updateMemberRole = async (req, res) => {
  try {
    const { role } = req.body
    const team = await Team.findOne({ organizer: req.user._id })

    if (!team) {
      return res.status(404).json({ message: 'Team not found' })
    }

    const member = team.members.find(m => m.user.toString() === req.params.id)
    if (!member) {
      return res.status(404).json({ message: 'Team member not found' })
    }

    member.role = role
    await team.save()

    res.json({
      success: true,
      message: 'Role updated successfully',
      member
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Export all functions
module.exports = {
  getTeamMembers,
  getAvailableTeamMembers,
  addExistingMember,
  inviteTeamMember,
  removeTeamMember,
  updateMemberRole
}
