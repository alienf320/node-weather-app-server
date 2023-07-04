const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const indexPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(indexPath))

app.get('', (req, res) => {
  res.render("index", {
    title: 'Home'
  })
})

app.get('/help', (req, res) => {
  res.render("help", {
    message: 'Esto es un mensaje de ayuda',
    title: 'Help'
  })
})

app.get('/about', (req, res) => {
  res.render("about", {
    title: 'About'
  })
})

app.get('/help/*', (req, res) => {
  res.render("404", {
    title: 'Help',
    error: "We could not find that page in Help"
  })
})

app.get('/*', (req, res) => {
  res.render("404", {
    title: 'Page not found',
    error: "That page does not exist"
  })
})

app.listen(3000, () => {
  console.log("Server is running")
})