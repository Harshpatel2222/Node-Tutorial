const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        for(let i=0; i<1000; i++){
            for(let j=0; j<1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('About')
    }
    res.end('Error Page')
})

server.listen(5001,()=>{
    console.log('server is listing on port: 5001....');
})