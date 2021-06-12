const express = require('express')
const router = express.Router()

// ===============================================
// Bringing in models 
// ===============================================

// Trip 
const Trip = require('../models/trip/tripModel.js')

// // Cities 
const City = require('../models/cities/citiesModel.js')

// Things to Do 
const FamousLandmark = require('../models/things-to-do/famousLandmark.js')
const Restuarant = require('../models/things-to-do/restaurant.js')
const Neighbourhood = require('../models/things-to-do/neighborhood.js')
const OffTheBeatenPath = require('../models/things-to-do/offTheBeatenPath.js')
const BestInstaSpot = require('../models/things-to-do/bestInstaSpot.js')
const UltimateBucketList = require('../models/things-to-do/ultimateBucketList.js')
const Resource = require('../models/things-to-do/resource.js')

router.get('/', (req, res) => {
  res.send(`CASTAWAYS, WE ARE CASTAWAYS`)
})

module.exports = router