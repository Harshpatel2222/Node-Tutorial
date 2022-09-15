const mongoose = require('mongoose')
require('dotenv').config()



// const connectionString = 'mongodb+srv://harrrsh22_:Harsh%40123@expressjsproject.y5d3jxn.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url)=>{
    return mongoose.connect(url)
}

module.exports = connectDB
