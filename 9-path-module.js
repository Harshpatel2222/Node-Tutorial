const path = require('path')

//path seprater - (platform specific)
console.log(path.sep);

//for making the path
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

//to get basepath or filename
const base= path.basename(filePath);
console.log(base);

//to get absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);