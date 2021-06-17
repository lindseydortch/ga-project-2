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

// ===============================================
// Homepage Route
// ===============================================
router.get('/', (req, res) => {
  res.render('index.ejs')
})

// ===============================================
// Trip Routes
// ===============================================

// Shows all trips page
router.get('/trips', (req, res) => {
  res.render('trips/trips.ejs')
})

// View all of the Things to do
router.get('/things-to-do', (req, res) => {
  res.render('things-to-do/things-to-do.ejs')
})

// Show all of the Famous Landmarks
router.get('/famousLandmarks', (req, res) => {
  res.render('things-to-do/famous-landmarks/famous-landmarks.ejs')
})

// Famous Landmarks
// Add things to do
router.get('/create&trip&cities&things-to-do&famousLandmarks', (req, res) => {
  res.render('things-to-do/famous-landmarks/create.ejs')
})

// Edit things to do
router.get('/update&trip&cities&things-to-do&famousLandmarks', (req, res) => {
  res.render('things-to-do/famous-landmarks/update.ejs')
})

// delete things to do
router.get('/delete&trip&cities&things-to-do&famousLandmarks', (req, res) => {
  res.render('things-to-do/famous-landmarks/delete.ejs')
})

// Best Insta Spots 
// Show all of the Best Insta Spots
router.get('/bestInstaSpots', (req, res) => {
  res.render('things-to-do/bestInstaSpots/best-insta-spots.ejs')
})

router.get('/create&trip&cities&things-to-do&bestInstaSpots', (req, res) => {
  res.render('things-to-do/bestInstaSpots/create.ejs')
})

// Edit things to do
router.get('/update&trip&cities&things-to-do&bestInstaSpots', (req, res) => {
  res.render('things-to-do/bestInstaSpots/update.ejs')
})

// Delete things to do
router.get('/delete&trip&cities&things-to-do&bestInstaSpots', (req, res) => {
  res.render('things-to-do/bestInstaSpots/delete.ejs')
})

// Neighborhoods
// Show all of the Neighborhoods
router.get('/neighborhoods', (req, res) => {
  res.render('things-to-do/neighborhoods/neighborhoods.ejs')
})

router.get('/create&trip&cities&things-to-do&neighborhoods', (req, res) => {
  res.render('things-to-do/neighborhoods/create.ejs')
})

// Edit things to do
router.get('/update&trip&cities&things-to-do&neighborhoods', (req, res) => {
  res.render('things-to-do/neighborhoods/update.ejs')
})

// Delete things to do
router.get('/delete&trip&cities&things-to-do&neighborhoods', (req, res) => {
  res.render('things-to-do/neighborhoods/delete.ejs')
})

// Off the Beaten Path
// Show all of the Off the Beaten Paths
router.get('/offTheBeatenPath', (req, res) => {
  res.render('things-to-do/offTheBeatenPath/offTheBeatenPath.ejs')
})

router.get('/create&trip&cities&things-to-do&offTheBeatenPath', (req, res) => {
  res.render('things-to-do/offTheBeatenPath/create.ejs')
})

// Edit things to do
router.get('/update&trip&cities&things-to-do&offTheBeatenPath', (req, res) => {
  res.render('things-to-do/offTheBeatenPath/update.ejs')
})

// Delete things to do
router.get('/delete&trip&cities&things-to-do&offTheBeatenPath', (req, res) => {
  res.render('things-to-do/offTheBeatenPath/delete.ejs')
})

// Resources
// Show all of the Resources
router.get('/resources', (req, res) => {
  res.render('things-to-do/resources/resources.ejs')
})

router.get('/create&trip&cities&things-to-do&resources', (req, res) => {
  res.render('things-to-do/resources/create.ejs')
})

// Edit things to do
router.get('/update&trip&cities&things-to-do&resources', (req, res) => {
  res.render('things-to-do/resources/update.ejs')
})

// Delete things to do
router.get('/delete&trip&cities&things-to-do&resources', (req, res) => {
  res.render('things-to-do/resources/delete.ejs')
})

// Restaurants
// Show all of the Resturants
router.get('/restaurants', (req, res) => {
  res.render('things-to-do/restaurants/restaurants.ejs')
})

router.get('/create&trip&cities&things-to-do&restaurants', (req, res) => {
  res.render('things-to-do/restaurants/create.ejs')
})

// Edit things to do
router.get('/update&trip&cities&things-to-do&restaurants', (req, res) => {
  res.render('things-to-do/restaurants/update.ejs')
})

// Delete things to do
router.get('/delete&trip&cities&things-to-do&restaurants', (req, res) => {
  res.render('things-to-do/restaurants/delete.ejs')
})

// Ultimate Bucket List
// Show all of the Ultimate Bucket List
router.get('/ultimateBucketList', (req, res) => {
  res.render('things-to-do/ultimateBucketList/ultimateBucketList.ejs')
})

router.get('/create&trip&cities&things-to-do&ultimateBucketList', (req, res) => {
  res.render('things-to-do/ultimateBucketList/create.ejs')
})

// Edit things to do
router.get('/update&trip&cities&things-to-do&ultimateBucketList', (req, res) => {
  res.render('things-to-do/ultimateBucketList/update.ejs')
})

// Delete things to do
router.get('/delete&trip&cities&things-to-do&ultimateBucketList', (req, res) => {
  res.render('things-to-do/ultimateBucketList/delete.ejs')
})

// ===============================================
//
// ===============================================

// Create a trip 
router.get('/create&:trip', (req, res) => {
  res.render('trips/create.ejs')
})

// Update a trip 
router.get('/update&:trip', (req, res) => {
  res.render('trips/update.ejs')
})

// Delete a trip 
router.get('/delete&:trip', (req, res) => {
  res.render('trips/delete.ejs')
})

// ===============================================
// City Routes
// ===============================================

// See all of the cities for a certain trip 
router.get('/:trip&cities', (req, res) => {
  res.render('destination/cities.ejs')
})

// Add a city 
router.get('/:trip&:city&create', (req, res) => {
  res.render('destination/create.ejs')
})

// Update a city 
router.get('/:trip&:city&update', (req, res) => {
  res.render('destination/update.ejs')
})

// Delete a city
router.get('/:trip&:city&delete', (req, res) => {
  res.render('destination/delete.ejs')
})

// ===============================================
// Things to Do Routes
// ===============================================


// See all of the activities for a certain trip & city 
router.get('/:trip&:city', (req, res) => {
  res.render('destination/city.ejs')
})

// Shows individual trip 
router.get('/:trip', (req, res) => {
  res.render('trips/trip.ejs')
})

module.exports = router