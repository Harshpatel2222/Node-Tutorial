//aa fs ne de-structuring karyu che, const fs use kari ne fs.readFileSync pan kari sakie
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

//falg-a append kare, jo flag na hoy to akhi file rewrite kare
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'})
