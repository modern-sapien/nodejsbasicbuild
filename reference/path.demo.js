// Path is a core module

// Here are some references for what it does and how we can use it implementing node JS
const path = require("path")

// Full File Name
console.log(__filename);

// Base File Name
console.log(path.basename(__filename));

// Directory Name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create Path Object
console.log(path.parse(__filename));

// Concatenate Paths  this is useful for delimiters
console.log(path.join(__dirname, "test", "hello.html"));
