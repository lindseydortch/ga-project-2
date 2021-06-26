const mongoose = require('../../db/connections/connection')

const RestuarantSchema = new mongoose.Schema(
  {
    restuarantName: {
      type: String, 
      required: true
    },
    restuarantImages: [Array],
    restuarantNotes: String
  }
)

const Restuarant = mongoose.model('Restuarant', RestuarantSchema)

module.exports = Restuarant