const express = require('express')
const app = express()


//middleware que observa las llamadas del servidor
// const morgan = require('morgan')
// app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const productsRoutes = require('./routes/products.routes')
const userRoutes = require('./routes/auth.routes')

app.use('/api/products', productsRoutes)
app.use('/api/auth', userRoutes)

module.exports = app

