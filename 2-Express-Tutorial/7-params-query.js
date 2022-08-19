const express = require('express')
const {products} = require('./data.js')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    console.log(req)
    console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find( (product) => product.id === Number(productID))

    if(!singleProduct){
        res.status(404).send('404 Object Not Found')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productId/review/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send("it's nice product")
})

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    // res.send('hello')
    const {search,limit} = req.query
    let sortedProduct = [...products]

    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit))
    }

    if(sortedProduct.length <1){
        // res.status(200).send('no product match your search')
        return res.status(200).json({sucess:true, data:[]})
    }

    res.status(200).send(sortedProduct)
})



app.listen(5001,()=>{
    console.log('server is listing on porrt 5001.....');
})