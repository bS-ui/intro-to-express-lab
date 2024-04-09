// import modules

import express from 'express'
import { repairData } from './data/repairdata.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes

// Mount routes

app.get('/', function(req, res) {
  res.redirect('/repairlog')
})

app.get('/repairlog', function(req, res) {
  res.render('repairlog/index', {
    repairData: repairData
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})