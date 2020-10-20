const http = require("http");
const path = require("path");
const fs = require("fs");

// Create a basic server by using http methods 
const server = http.createServer((req, res) =>  {
    let filePath = path.join(
        __dirname, 
        "public", 
        req.url === "/" ? "index.html": req.url
    );
    // file extension
    let extname = path.extname(filePath);
    // initial content type
    // THIS IS WHY MIDDLEWARE EXISTS
    let contentType = "text/html";
    switch(extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }
})

// Create a basic server by using http methods 
// const server = http.createServer((req, res) =>  {
//     // if the url is index    
//     if(req.url === "/") {
//         // then READ this file name directory/public/index.html
//         fs.readFile(path.join(__dirname, "public", "index.html"), 
//         (err, content)    => {
//         if(err) throw err;
//         res.writeHead(200, {"Content-Type": "text/html"})
//         res.end(content)
//         }
//         )
//     }

//     // basic get or restful API with just node 
//     if(req.url === "/api/users") {
//         const users = [
//             {name: "bob smith",
//             age: 40},
//             {name: "jenny smith",
//             age: 20}
//         ];
//         res.writeHead(200, {"content-type": "application/json"});
//         res.end(JSON.stringify(users));
//     }
// })

// we declare that we are open to using an PORT selected due to envirnomental variables OR a preferred PORT
const PORT = process.env.PORT || 5000;

// we console.log that we are listening on a PORT when our server is online
server.listen(PORT, ()  =>  console.log(`server running on PORT ${PORT}`))