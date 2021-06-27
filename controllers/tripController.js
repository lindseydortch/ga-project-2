const express = require('express')
const router = express.Router()

// ===============================================
// Bringing in models 
// ===============================================

const Trip = require('../models/Trip.js')

// ===============================================
// Homepage Route
// ===============================================
// Testing JSON
router.get('/', (req, res) => {
  // res.render('index.ejs')
  Trip.find({})
  .then((trips) => {
    // console.log(trips[0].cities[0].city)
    res.json(trips)
  })
})

// ===============================================
// Show All Trips
// ===============================================
router.get('/trips', (req, res) => {
  Trip.find({}) 
  .then(trips => res.render('trips/trips.ejs', {trips: trips}))
  // res.render('trips/trips.ejs', {trips: trips})
})

// ===============================================
// Add Trip
// ===============================================
router.get('/trips/add', (req, res) => {
  res.render('trips/create.ejs')
})

// ===============================================
// Create a Trip Post
// ===============================================
router.post('/trips', (req, res) => {
  let cities = req.body.cities
  let citiesSplit = cities.split(',')
  Trip.create({
    tripName: req.body.tripName,
    tripDates: req.body.tripDates,
    cities: citiesSplit
  })
  .then((trips) => {
    res.redirect('/trips')
  })
  .catch(console.error)
})


// ===============================================
// Edit Individual Trip
// ===============================================
router.get('/trips/:id/edit', (req, res, next) => {
  console.log(`On the individual trip route`)
  const id = req.params.id 
  // console.log(req.body.tripName)
  Trip.findById(id)
  .then(trip => {
    res.render('trips/update.ejs', {trip: trip})
  })
  .catch(next)
})



// ===============================================
// Find individual trip
// ===============================================
router.get('/trips/:id', (req, res, next) => {
  console.log(`On the individual trip route`)
  const id = req.params.id 
  // console.log(req.body.tripName)
  Trip.findById(id)
  .then(trip => {
    res.render('trips/trip.ejs', {trip: trip})
  })
  .catch(next)
})


// ===============================================
// Update an individual trip
// ===============================================
router.put('/trips/:id', (req, res) => {
  const id = req.params.id
  let cities = req.body.cities
  let citiesSplit = cities.split(',')
  Trip.findOneAndUpdate(
    { _id: id },
    {
      tripName: req.body.tripName,
      tripDates: req.body.tripDates,
      cities: citiesSplit
    },
    { new: true}
  )
  .then(
    Trip.findById(id)
    .then(trip => {
      res.render('trips/trip.ejs', {trip: trip})
    })
  )
})

// ===============================================
// Delete a Trip
// ===============================================
router.delete('/trips/:id', (req, res) => {
  const id = req.params.id
  Trip.findOneAndDelete({ _id: id})
  .then(() => res.redirect('/trips'))
  .catch(console.error)
})

module.exports = router