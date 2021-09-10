const express = require('express')
const app = express()


//middleware que observa las llamadas del servidor
// const morgan = require('morgan')
// app.use(morgan('dev'))
app.use(express.json())

const productsRoutes = require('./routes/products.routes')

app.use('/api/products', productsRoutes)

module.exports = app

