const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))

//parse rom data
app.use(express.urlencoded({extended:false}))
//parse join
app.use(express.json())

app.use('/api/people',people)
app.use('/login',people)

// app.use('/api/people',(req,res)=>{
//     res.status(200).send("hii")
// })

app.listen(5001, ()=>{
    console.log('Server is listing on 5001....');
})