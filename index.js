// fs Stands for file system
const fs = require('fs')

// Creating new files 
// const textIn = fs.readFileSync("./txt/input.txt",'utf-8');
// console.log(textIn)

// Writing Files Synchrously
// const textOut = `This is what we know about the avacado ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt",textOut)

// console.log('File written!')

// Creating Files Asyhchrously
fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
    console.log(data)
})

// fs.writeFile("./txt/")