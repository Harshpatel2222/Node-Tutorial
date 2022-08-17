const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end('About page')
    }
    res.end(`
    <h1>Opps!</h1>
    <p>soory wrong url</p>
    <a href="/">Home Page</a>`)
    // res.write('Hello welcome to my server')
    // res.end()
})

server.listen(5001)