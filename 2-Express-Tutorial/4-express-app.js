const express = require('express')
const path  = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./Public'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.get('*',(req,res)=>{
    res.status(404).send("Resource not found")
})

app.listen(5001,()=>{
    console.log("Server is listing on port: 5001....");
})