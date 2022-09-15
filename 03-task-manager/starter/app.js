const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())



//routes
// app.get('/hello',(req,res)=>{
//     res.send("Task Manager App")
// })

app.use('/api/v1/tasks',tasks)

const DB_USER = process.env.DB_USER;
const PASSWORD = encodeURIComponent(process.env.PASSWORD); 
const DB_URL = `mongodb+srv://${DB_USER}:${PASSWORD}@expressjsproject.y5d3jxn.mongodb.net/03-Task-Manager?retryWrites=true&w=majority`;

const start = async()=>{
    try {
        await connectDB(DB_URL)
        app.listen(3000,()=>{
            console.log('Server is listing');
        })
    } catch (error) {
        console.log(error)
    }
}

start()