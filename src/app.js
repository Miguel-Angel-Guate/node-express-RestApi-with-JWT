const express = require('express')
const app = express()
//middleware que observa las llamadas del servidor
const morgan = require('morgan')
// app.use(morgan('dev'))


const productsRoutes = require('./routes/products.routes')
const PORT = process.env.PORT | 4000
app.use('/api/products', productsRoutes)

module.exports = {
    app,
    PORT
}