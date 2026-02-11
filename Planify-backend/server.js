const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')

// Load env vars
dotenv.config()

// Connect to database
connectDB()

const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable CORS
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}))

// Routes
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/exhibitions', require('./routes/exhibitionRoutes'))
app.use('/api/stalls', require('./routes/stallRoutes'))
app.use('/api/team', require('./routes/teamRoutes'))
app.use('/api/exhibitions/:exhibitionId/stalls', require('./routes/exhibitionStallRoutes'))

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Planify API is running',
    timestamp: new Date().toISOString()
  })
})

// Error handler (must be after routes)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})
