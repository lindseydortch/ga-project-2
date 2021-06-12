const mongoose = require('../../db/connections/connection')

const FamousLandmarkSchema = new mongoose.Schema(
  {
    landmarkName: {
      type: String, 
      required: true
    },
    landmarkImages: [String],
    landmarkNotes: String
  }
  
)

const FamousLandmark = mongoose.model('FamousLandmark', FamousLandmarkSchema)

module.exports = FamousLandmark