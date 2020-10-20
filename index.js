const http = require("http");
const path = require("path");
const fs = require("fs");

// Create a basic server by using http methods 
const server = http.createServer((req, res) =>  {
    if(req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(`<h1>HOME</>`)
    }
    console.log(req.url)
})

// we declare that we are open to using an PORT selected due to envirnomental variables OR a preferred PORT
const PORT = process.env.PORT || 5000;

// we console.log that we are listening on a PORT when our server is online
server.listen(PORT, ()  =>  console.log(`server running on PORT ${PORT}`))