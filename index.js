const express = require('express')
const router = require('./route/router')
const cors = require('cors')

const app = express()
const port = 8000
const host = rocess.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'

app.use(cors({ origin: 'null' }))
app.use(express.json())
app.use(router)

app.listen(port,host, () => {
    console.log('Server is up on port ' + port)
})