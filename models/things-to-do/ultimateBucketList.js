const mongoose = require('../../db/connections/connection')

const UltimateBucketListSchema = new mongoose.Schema(
  {
    ultimateBucketListName: {
      type: String, 
      required: true
    },
    ultimateBucketListImages: [Array],
    ultimateBucketListNotes: String
  }
)

const UltimateBucketList = mongoose.model('UltimateBucketList', UltimateBucketListSchema)

module.exports = UltimateBucketList