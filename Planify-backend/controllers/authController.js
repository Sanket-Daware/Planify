const User = require('../models/User')
const Team = require('../models/Team')
const generateToken = require('../utils/generateToken')

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      password, 
      userType, 
      role, 
      organizationName, 
      companyName,
      invitationToken
    } = req.body

    // Check if user exists
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' })
    }

    // Create user data
    const userData = {
      fullName,
      email,
      password,
      userType,
      role: role || userType
    }

    // Handle different user types
    if (userType === 'organizer' && organizationName) {
      userData.organizationName = organizationName
    }
    
    if (userType === 'exhibitor' && companyName) {
      userData.companyName = companyName
    }

    // Handle team member registration
    if (userType === 'team') {
      if (invitationToken) {
        // Registering via invitation
        const team = await Team.findOne({ 
          'invitations.token': invitationToken,
          'invitations.status': 'pending'
        })

        if (!team) {
          return res.status(400).json({ message: 'Invalid or expired invitation token' })
        }

        // Find the invitation
        const invitation = team.invitations.find(inv => inv.token === invitationToken)
        
        if (invitation.email !== email) {
          return res.status(400).json({ 
            message: 'Email does not match the invitation' 
          })
        }

        userData.organizationId = team.organizer
        userData.teamStatus = 'member'
        userData.invitationToken = invitationToken

        // Create user first
        const user = await User.create(userData)

        // Update invitation status
        invitation.status = 'accepted'
        
        // Add user to team members
        team.members.push({
          user: user._id,
          role: invitation.role,
          status: 'active'
        })

        await team.save()

        return res.status(201).json({
          success: true,
          message: 'Successfully joined the team',
          user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            userType: user.userType,
            role: user.role,
            teamStatus: user.teamStatus
          },
          token: generateToken(user._id)
        })
      } else {
        // Self-registration without invitation
        userData.teamStatus = 'independent'
        userData.organizationId = null
      }
    }

    const user = await User.create(userData)

    res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        userType: user.userType,
        role: user.role,
        organizationName: user.organizationName,
        companyName: user.companyName,
        teamStatus: user.teamStatus
      },
      token: generateToken(user._id)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error during registration' })
  }
}

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check for user
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({ message: 'Your account has been deactivated' })
    }

    res.json({
      success: true,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        userType: user.userType,
        role: user.role,
        organizationName: user.organizationName,
        companyName: user.companyName,
        teamStatus: user.teamStatus,
        organizationId: user.organizationId
      },
      token: generateToken(user._id)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error during login' })
  }
}

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('organizationId', 'fullName organizationName email')
    res.json({
      success: true,
      user
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('+password')

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    user.fullName = req.body.fullName || user.fullName
    user.email = req.body.email || user.email
    
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      success: true,
      user: {
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        userType: updatedUser.userType,
        role: updatedUser.role
      },
      token: generateToken(updatedUser._id)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
