const Exhibition = require('../models/Exhibition')

// @desc    Get all exhibitions
// @route   GET /api/exhibitions
// @access  Public
exports.getExhibitions = async (req, res) => {
  try {
    const { status, limit = 10, page = 1 } = req.query
    
    const query = {}
    if (status) query.status = status

    const exhibitions = await Exhibition.find(query)
      .populate('organizer', 'fullName email organizationName')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })

    const count = await Exhibition.countDocuments(query)

    res.json({
      success: true,
      exhibitions,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Get single exhibition
// @route   GET /api/exhibitions/:id
// @access  Public
exports.getExhibition = async (req, res) => {
  try {
    const exhibition = await Exhibition.findById(req.params.id)
      .populate('organizer', 'fullName email organizationName')
      .populate('exhibitors', 'fullName email companyName')

    if (!exhibition) {
      return res.status(404).json({ message: 'Exhibition not found' })
    }

    res.json({
      success: true,
      exhibition
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Create exhibition
// @route   POST /api/exhibitions
// @access  Private (Organizer only)
exports.createExhibition = async (req, res) => {
  try {
    const exhibition = await Exhibition.create({
      ...req.body,
      organizer: req.user._id
    })

    res.status(201).json({
      success: true,
      exhibition
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Update exhibition
// @route   PUT /api/exhibitions/:id
// @access  Private (Organizer only)
exports.updateExhibition = async (req, res) => {
  try {
    let exhibition = await Exhibition.findById(req.params.id)

    if (!exhibition) {
      return res.status(404).json({ message: 'Exhibition not found' })
    }

    // Check if user is the organizer
    if (exhibition.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this exhibition' })
    }

    exhibition = await Exhibition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    res.json({
      success: true,
      exhibition
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Delete exhibition
// @route   DELETE /api/exhibitions/:id
// @access  Private (Organizer only)
exports.deleteExhibition = async (req, res) => {
  try {
    const exhibition = await Exhibition.findById(req.params.id)

    if (!exhibition) {
      return res.status(404).json({ message: 'Exhibition not found' })
    }

    // Check if user is the organizer
    if (exhibition.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this exhibition' })
    }

    await exhibition.deleteOne()

    res.json({
      success: true,
      message: 'Exhibition deleted successfully'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Get dashboard stats
// @route   GET /api/exhibitions/stats
// @access  Private (Organizer only)
exports.getStats = async (req, res) => {
  try {
    const totalExhibitions = await Exhibition.countDocuments({ organizer: req.user._id })
    const activeExhibitions = await Exhibition.countDocuments({ 
      organizer: req.user._id, 
      status: 'active' 
    })
    
    // Get total exhibitors
    const exhibitions = await Exhibition.find({ organizer: req.user._id })
    let totalExhibitors = 0
    exhibitions.forEach(ex => {
      totalExhibitors += ex.exhibitors.length
    })

    // Calculate revenue (mock data - implement based on your payment model)
    const totalRevenue = 482500

    // Calculate stall occupancy
    let totalStalls = 0
    let bookedStalls = 0
    exhibitions.forEach(ex => {
      totalStalls += ex.totalStalls
      bookedStalls += ex.bookedStalls
    })
    const stallOccupancy = totalStalls > 0 ? ((bookedStalls / totalStalls) * 100).toFixed(0) : 0

    res.json({
      success: true,
      totalExhibitions,
      activeExhibitions,
      exhibitionsChange: '+3 this month',
      totalExhibitors,
      exhibitorsChange: '+28 this month',
      totalRevenue,
      revenueChange: '+12.5%',
      stallOccupancy: `${stallOccupancy}%`,
      occupancyChange: '+5.2%'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
