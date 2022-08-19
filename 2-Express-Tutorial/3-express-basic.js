const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.status(200).send("Home Page")
})

app.get('/about', (req,res)=>{
    res.status(200).send("About Page")
})

app.all('*', (req,res)=>{
    res.status(404).send("404 Not Found")
})

app.listen(5001, ()=>{
    console.log('Server is listing on Port 5001.....');
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen