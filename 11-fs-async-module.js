const {readFile, writeFile} = require('fs')

//Callback Function   
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txtx',`Here is the result: ${first}, ${second}`,{flag:'a'},(err,reslut)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result); 
        })

    })
})