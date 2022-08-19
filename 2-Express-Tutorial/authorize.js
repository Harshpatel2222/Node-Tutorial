const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user==='harsh'){
        req.user = {name:'harsh', id:3}
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }

    // console.log('Authorize');
    next()
}

module.exports = authorize