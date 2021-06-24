const mongoose = require('../connections/connection')

const Trip = require('../../models/trip/tripModel')
const City = require('../../models/cities/citiesModel')
const tripData = require('./trip.json')
const cityData = require('./city.json')

Trip.deleteMany({})
.then(() => {
  return Trip.insertMany(tripData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
})
