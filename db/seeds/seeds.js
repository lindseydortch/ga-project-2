const mongoose = require('../connections/connection')

const Trip = require('../../models/Trip')
const tripData = require('./trips.json')

Trip.deleteMany({})
.then(() => {
  return Trip.insertMany(tripData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
})