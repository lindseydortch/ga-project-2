const mongoose = require('../db/connections/connection')

const TripSchema = new mongoose.Schema(
  {
    tripName: {
      type: String,
      required: true
    },
    tripDates: String,
    cities: [String]
  },
  {timestamps: true}
)

const Trip = mongoose.model('Trip', TripSchema)

module.exports = Trip