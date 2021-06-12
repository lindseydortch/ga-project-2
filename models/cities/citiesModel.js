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
    timeZone: String
  },
  {timestamps: true}
)

const City = mongoose.model('City', CitySchema)

module.exports = City