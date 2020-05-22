if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
import axios from 'axios'
import express, { json, static } from 'express'
const app = express()

app.use(json())
app.use(static('public'))

app.post('/weather', (req, res) => {
  const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`
  axios({
    url: url,
    responseType: 'json'
  }).then(data => res.json(data.data.currently))
})

app.listen(3000, () => {
  console.log('Server Started')
})