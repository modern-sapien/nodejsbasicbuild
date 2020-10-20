// file system module

const fs = require("fs");
const path = require("path");

// create a directory, there is also a SYNC version
fs.mkdirSync(path.join(__dirname, '/test'), {}, err =>   {
    if (err) throw err;
    console.log("folder created....");
})

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "hello world", err =>   {
    if (err) throw err;
    console.log("file created and written to....");

    // Append to a file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "i love node js", err =>   {
    if (err) throw err;
    console.log("file created and written to.... 2 ");
})
})

// Read a file
    fs.readFile(path.join(__dirname, '/test', 'hello.txt'), "utf8", (err, data) =>   {
    if (err) throw err;
    console.log(data);
})

// Rename a file
    fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err)  =>   {
    if (err) throw err;
    console.log("file renamed...");
})

