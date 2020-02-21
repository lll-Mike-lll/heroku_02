const express = require('express')
const app = express()
const  port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.json({ message: 'Ahoy!' })
})

app.listen(port, () => {
  console.log('Application is running on'+port)
})
