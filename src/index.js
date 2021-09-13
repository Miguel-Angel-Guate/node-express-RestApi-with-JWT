require('dotenv/config')
const  app = require('./app')
const mongoose = require('mongoose')

const PORT =  process.env.PORT | 4000
 mongoose.connect(process.env.DB_CONNECTION,
        {useNewUrlParser: true,
        useUnifiedTopology: true,
        

    },
    (err, res) => {
        try{
            console.log('connected to DB')
        } catch (err) {
            throw err
        }
    }
    )

app.listen(PORT, console.log(` the server in running in por ${PORT}`))
