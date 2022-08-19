const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')
//req => middleware => res

app.use([logger,authorize])
//multiple middleware than they will execute in the order
//api/iytems/home/review

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5001,()=>{
    console.log('Server is listing on port 5001.....');
})