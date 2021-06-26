const mongoose = require('../../db/connections/connection')

const ThingsToDoSchema = new mongoose.Schema(
  {
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City'
    },
    name: String, 
    image: String, 
    notes: String,
    categories: [String]
  }
)

const ThingsToDo = mongoose.model('ThingsToDo', ThingsToDoSchema)

module.exports = ThingsToDo