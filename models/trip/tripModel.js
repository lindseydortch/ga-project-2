const mongoose = require('../../db/connections/connection')
const City = require('../cities/citiesModel')

const TripSchema = new mongoose.Schema(
  {
    tripName: {
      type: String,
      required: true
    },
    tripDates: String,
    cities: [
      {
        city: {
          type: String, 
          required: true
        }, 
        country: {
          type: String, 
          required: true
        }, 
        description: String,
        neighboringCities: [String],
        neighboringCountries: [String], 
        timeZone: String,
        // Add in place to populate things to do
        // Group all of these into one model 
        thingsToDo: [String]
      }
    ]
  },
  {timestamps: true}
)

const Trip = mongoose.model('Trip', TripSchema)

module.exports = Trip