const mongoose = require('../../db/connections/connection')

const NeighbourhoodSchema = new mongoose.Schema(
  {
    neighbourhoodName: {
      type: String, 
      required: true
    },
    neighbourhoodImages: [Array],
    neighbourhoodNotes: String
  }
  
)

const Neighbourhood = mongoose.model('Neighbourhood', NeighbourhoodSchema)

module.exports = Neighbourhood