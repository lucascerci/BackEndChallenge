const express = require('express')
const app = express()
const port = 3000

app.get('/v1/ping', (req, res) => {
  pong = { pong: true };
  res.send(pong)
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})