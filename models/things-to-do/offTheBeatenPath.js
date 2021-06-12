const mongoose = require('../../db/connections/connection')

const OffTheBeatenPathSchema = new mongoose.Schema(
  {
    offTheBeatenPathName: {
      type: String, 
      required: true
    },
    offTheBeatenPathImages: [Array],
    offTheBeatenPathNotes: String
  }
  
)

const OffTheBeatenPath = mongoose.model('OffTheBeatenPath', OffTheBeatenPathSchema)

module.exports = OffTheBeatenPath