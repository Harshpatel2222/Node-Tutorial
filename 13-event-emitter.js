const EventEmitter = require('events')

//creating the new object customEmitter
const customEmitter = new EventEmitter()

customEmitter.on('responce', (name,id)=>{
    console.log(`Data Received by ${name} ${id}`);
})

customEmitter.emit('responce','harsh',34)

//we can also pass the argument in the emit function