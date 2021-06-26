const mongoose = require('../../db/connections/connection')

const BestInstaSpotSchema = new mongoose.Schema(
  {
    bestInstaSpotName: {
      type: String, 
      required: true
    },
    bestInstaSpotImages: [Array],
    bestInstaSpotNotes: String
  }
)

const BestInstaSpot = mongoose.model('BestInstaSpot', BestInstaSpotSchema)

module.exports = BestInstaSpot