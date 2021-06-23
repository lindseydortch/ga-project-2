const Trip = require('../../models/trip/tripModel')
const tripData = require('./trip.json')

Trip.deleteMany({})
.then(() => {
  return Trip.insertMany(tripData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
})