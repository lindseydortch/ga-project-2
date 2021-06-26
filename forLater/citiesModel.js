const mongoose = require('../../db/connections/connection')

const CitySchema = new mongoose.Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip'
    },
    city: String, 
    country: String, 
    description: String,
    neighboringCities: [String],
    neighboringCountries: [String], 
    timeZone: String,
    // Add in place to populate things to do
    // Group all of these into one model 
    // thingsToDo: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'ThingsToDo'
    //   }
    // ]
  },
  {timestamps: true}
)

const City = mongoose.model('City', CitySchema)

module.exports = City