const mongoose = require('../../db/connections/connection')

const CitySchema = new mongoose.Schema(
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
  },
  {timestamps: true}
)

const City = mongoose.model('City', CitySchema)

module.exports = City