const express = require('express')
// import express from 'express'
const app = express()
require('dotenv').config()
const router = require('./router/routes')

const port = process.env.PORT || 8000

app.use('/', router)

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port, () => { console.log(`listening on http://localhost:${port}`) })