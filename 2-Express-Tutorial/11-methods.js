const express = require('express')
const app = express()

const {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))

//parse rom data
app.use(express.urlencoded({extended:false}))
//parse join
app.use(express.json())

// app.use('/api/people',(req,res)=>{
//     res.status(200).send("hii")
// })

app.get('/api/people', (req,res)=>{
    res.status(200).json({sucess:true, data: people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({sucess:false,msg:'please provide name value'})
    }
    res.status(201).json({sucess:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({sucess:false,msg:'please provide name value'})
    }
    res.status(201).json({sucess:true,data: [...people,name] })
})

app.put('/api/people/:id',(req,res)=>{
    const {name} = req.body
    const {id} = req.params
   
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(400).json({sucess:false,msg:`no person with id ${id}`})
    }
    
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({sucess:true,data:newPeople})

})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })

app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please procide crediential')
})

app.listen(5001, ()=>{
    console.log('Server is listing on 5001....');
})