const mongoose = require('../connections/connection')

const Trip = require('../../models/trip/tripModel')
const ThingsToDo = require('../../models/things-to-do/thingsToDo')
const City = require('../../models/cities/citiesModel')
const tripData = require('./trip')
const cityData = require('./city.json')
const thingsToDoData = require('./thingsToDoCat.json')

// ThingsToDoCategories.deleteMany({})
// .then(() => {
//   return ThingsToDoCategories.insertMany(thingsToDoCategories)
// })
// .then(console.log)
// .catch(console.error)
// Trip.deleteMany({})
// .then(() => {
//   return Trip.insertMany(tripData)
// })
// .then(console.log)
// .catch(console.error)
// .finally(() => {
//   process.exit()
// })

let _cities

Trip.deleteMany({})
.then(() => City.deleteMany({}))
.then(() => ThingsToDo.deleteMany({})
  .then(() => City.insertMany(cityData)
    .then((cities) => { 
      // console.log(cities)
      _cities = cities
      let filteredData = thingsToDoData.map((data) => {return { ...data, city: cities.filter((city) => city.city == data.city)[0]._id}})
      
      return ThingsToDo.insertMany(filteredData)

      .then((thingsToDo) => {
        
        // let filteredDataTwo = tripData.map((data) => {
        //   console.log(data)
          
        //   console.log(_cities.filter((city) => city.city == data.city))
        //   return { ...data, cities: _cities.filter((city) => city.city == data.city)._id}})
        
        // console.log(tripData.map((data) => {return { ...data, cities: [cities.filter((city) => city.trip == data.tripName)._id]}}))
        return Trip.insertMany(tripData)
      })
    })
    
  )
)
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
})