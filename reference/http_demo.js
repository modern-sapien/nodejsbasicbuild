// SUPER BASIC SERVER SETUP

const http = require("http");

// Create a server object
http.createServer((req, res)    =>  {
    res.write("Hello world");
    res.end()
}).listen(5000, ()  =>  console.log("server running."))