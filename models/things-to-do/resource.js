const mongoose = require('../../db/connections/connection')

const ResourceSchema = new mongoose.Schema(
  {
    siteFound: String, 
    url: String
  },
  {timestamps: true}
)

const Resource = mongoose.model('Resource', ResourceSchema)

module.exports = Resource