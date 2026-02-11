const Stall = require('../models/Stall')
const Exhibition = require('../models/Exhibition')

// @desc    Get stalls for an exhibition
// @route   GET /api/exhibitions/:exhibitionId/stalls
// @access  Public
exports.getStallsByExhibition = async (req, res) => {
  try {
    const stalls = await Stall.find({ exhibition: req.params.exhibitionId })
      .populate('bookedBy', 'fullName email companyName')

    res.json({
      success: true,
      count: stalls.length,
      stalls
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Create stall
// @route   POST /api/stalls
// @access  Private (Organizer only)
exports.createStall = async (req, res) => {
  try {
    const { exhibition } = req.body

    // Check if exhibition exists and user is the organizer
    const exhibitionDoc = await Exhibition.findById(exhibition)
    if (!exhibitionDoc) {
      return res.status(404).json({ message: 'Exhibition not found' })
    }

    if (exhibitionDoc.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    const stall = await Stall.create(req.body)

    // Update exhibition total stalls count
    exhibitionDoc.totalStalls += 1
    await exhibitionDoc.save()

    res.status(201).json({
      success: true,
      stall
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Book a stall
// @route   POST /api/stalls/:id/book
// @access  Private (Exhibitor only)
exports.bookStall = async (req, res) => {
  try {
    const stall = await Stall.findById(req.params.id)

    if (!stall) {
      return res.status(404).json({ message: 'Stall not found' })
    }

    if (stall.status !== 'available') {
      return res.status(400).json({ message: 'Stall is not available for booking' })
    }

    // Update stall
    stall.status = 'booked'
    stall.bookedBy = req.user._id
    stall.bookingDate = Date.now()
    await stall.save()

    // Update exhibition
    const exhibition = await Exhibition.findById(stall.exhibition)
    exhibition.bookedStalls += 1
    exhibition.exhibitors.push(req.user._id)
    await exhibition.save()

    res.json({
      success: true,
      message: 'Stall booked successfully',
      stall
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Get stall availability
// @route   GET /api/exhibitions/:exhibitionId/stalls/availability
// @access  Public
exports.getStallAvailability = async (req, res) => {
  try {
    const totalStalls = await Stall.countDocuments({ exhibition: req.params.exhibitionId })
    const availableStalls = await Stall.countDocuments({ 
      exhibition: req.params.exhibitionId, 
      status: 'available' 
    })
    const bookedStalls = await Stall.countDocuments({ 
      exhibition: req.params.exhibitionId, 
      status: 'booked' 
    })

    res.json({
      success: true,
      availability: {
        total: totalStalls,
        available: availableStalls,
        booked: bookedStalls,
        occupancyRate: totalStalls > 0 ? ((bookedStalls / totalStalls) * 100).toFixed(2) : 0
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Update stall
// @route   PUT /api/stalls/:id
// @access  Private (Organizer only)
exports.updateStall = async (req, res) => {
  try {
    let stall = await Stall.findById(req.params.id).populate('exhibition')

    if (!stall) {
      return res.status(404).json({ message: 'Stall not found' })
    }

    // Check if user is the organizer
    if (stall.exhibition.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    stall = await Stall.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.json({
      success: true,
      stall
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc    Delete stall
// @route   DELETE /api/stalls/:id
// @access  Private (Organizer only)
exports.deleteStall = async (req, res) => {
  try {
    const stall = await Stall.findById(req.params.id).populate('exhibition')

    if (!stall) {
      return res.status(404).json({ message: 'Stall not found' })
    }

    // Check if user is the organizer
    if (stall.exhibition.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    await stall.deleteOne()

    // Update exhibition total stalls count
    const exhibition = await Exhibition.findById(stall.exhibition._id)
    exhibition.totalStalls -= 1
    if (stall.status === 'booked') {
      exhibition.bookedStalls -= 1
    }
    await exhibition.save()

    res.json({
      success: true,
      message: 'Stall deleted successfully'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
