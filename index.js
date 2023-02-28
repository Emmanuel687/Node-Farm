// fs Stands for file system
const fs = require("fs");
const http = require("http")

// Creating new files
// const textIn = fs.readFileSync("./txt/input.txt",'utf-8');
// console.log(textIn)

// Writing Files Synchrously
// const textOut = `This is what we know about the avacado ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt",textOut)

// console.log('File written!')

// Creating Files Asyhchrously
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     if(err){console.log('Error')}
//     console.log(data2);
    
//   });
// });

// fs.writeFile("./txt/")

const server = http.createServer((req,res)=>{
    res.end('Hello From the server')
})

server.listen(8000, "127.0.8.1", ()=>{
    console.log("Listening to request on port 8000")
})