const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Request Event');
    res.end("hello World");
})

server.listen(5001,()=>{
    console.log('server is listing on port: 5001....');
})