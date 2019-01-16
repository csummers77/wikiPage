const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"content-type": "text/html"});
        const indexHTML = fs.readFileSync("index.html");
        res.end(indexHTML);
    } else if (req.url =="/style.css"){
        res.writeHead(200,{"content-type": "text/css"});
        const styleCSS = fs.readFileSync("style.css");
        res.end(styleCSS);
    } else if (req.url =="/main.js"){
        res.writeHead(200,{"content-type": "text/javascript"});
        const mainJS = fs.readFileSync("main.js");
        res.end(mainJS);
    } else {
        res.writeHead(404,{"content-type": "text/html"})
        const errorHTML = fs.readFileSync("404error.html");
        res.end(errorHTML);
    }
})
server.listen(3000);