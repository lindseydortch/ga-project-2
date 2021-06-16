// Initializing Express
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ===============================================
// Bringing in EJS
// ===============================================
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static('public'))

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