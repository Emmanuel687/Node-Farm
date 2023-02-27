// fs Stands for file system
const fs = require('fs')

// Creating new files 
const textIn = fs.readFileSync("./txt/input.txt",'utf-8');
console.log(textIn)

