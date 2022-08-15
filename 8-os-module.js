const OS = require('os')

//Info About current user
const user = OS.userInfo()
console.log(user)

//method returns the system uptime in second
console.log(`The System Uptime is ${OS.uptime()} seconds`); 


//info about operating system using object
const currentOS = {
    name:OS.type(),
    release:OS.release(),
    totalMem:OS.totalmem(),
    freeMem:OS.freemem(),
}
console.log(currentOS);