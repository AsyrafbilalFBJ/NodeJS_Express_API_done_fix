const express = require('express')
const router = require('./route/router')
const cors = require('cors')

const app = express()
const port = process.env.NODE_ENV !== 'production' ? 'localhost' : 'http://0.0.0.0:5000' || 5000

app.use(cors({ origin: 'null' }))
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})