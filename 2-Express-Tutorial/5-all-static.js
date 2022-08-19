const express = require('express')
const path = require('path')

const app = express()

//setup the static and midleware
app.use(express.static('./Public'))

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'/navbar-app/index.html'))
//     //adding to static assets
//     //SSR
// })

app.listen(5001,()=>{
    console.log('server listing on port 5001....');
})