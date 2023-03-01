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
const replaceTemplate = (temp,product)=>{
  let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
  output=output.replace(/{%IMAGE%}/g,product.image)
  output=output.replace(/{%PRICE%}/g,product.price)
  output=output.replace(/{%FROM%}/g,product.from)
  output=output.replace(/{%NUTRIENTS%}/g,product.nutrients)
  output=output.replace(/{%QUANTITY%}/g,product.quantity)
  output=output.replace(/{%DESCRIPTION%}/g,product.description)
  output=output.replace(/{%ID%}/g,product.id)

  if(!product.organic)output.replace(/{%NOT_ORGANIC%}/g,'not-organic')
  return output;


}
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
// Path Module
  const pathName = req.url;

  //Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200,{"Content-type":"text/html"})
    const cardsHtml= dataObj.map(el=>replaceTemplate(tempCard,el)).join('');
    const output=tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml)
    res.end(output)
    console.log(cardsHtml)
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
