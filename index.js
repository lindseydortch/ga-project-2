// Initializing Express
const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ===============================================
// Bringing in Controllers 
// ===============================================
const tripController = require('./controllers/tripController')
app.use(tripController)

// ===============================================
// Listen
// ===============================================
// Port Variable 
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Your app is running on port ${port}`)
})