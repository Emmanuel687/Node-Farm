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

// fs Stands for file system
const fs = require("fs");
const http = require("http");
const url = require("url");

// SERVER
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const DataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
// Path Module
  const pathName = req.url;

  //Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200,{"Content-type":"text/html"})
    res.end(tempOverview);
  }
  //Product Route
   else if (pathName === "/product") {
    res.end("This is the Product");
  } 

  //API Route
  else if (pathName === "/api") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
  } 
  //NOT FOUND route
  else {
    res.writeHead("404", {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page Not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
