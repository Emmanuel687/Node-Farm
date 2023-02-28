// fs Stands for file system
const fs = require("fs");
const http = require("http");
const url = require("url");

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
    const pathName = req.url;
    if(pathName ==='/' || pathName === '/overview'){
        res.end('This is the Overview')
    }else if(pathName==="/product"){
        res.end("This is the Product")
    }else{
        res.writeHead("404",{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        })
        res.end('<h1>Page Not found</h1>')

    }
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening to request on port 8000")
})