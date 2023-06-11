const express = require('express')
const router = require('./route/router')
const cors = require('cors')

const app = express()
// const port = process.env.PORT || 8000
// const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'

const NODE_ENV = process.env.NODE_ENV || 'development'
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'
const PORT = process.env.PORT || 8000

// const PORT = 8000
// const HOST = '0.0.0.0'

app.use(cors({ origin: 'null' }))
app.use(express.json())
app.use(router)

app.listen(PORT, HOST,  () => {
    // console.log(`Running on http://${HOST}:${PORT}`)
    console.log(`NODE_ENV=${NODE_ENV}`);
    console.log(`App listening on http://${HOST}:${PORT}`);
})