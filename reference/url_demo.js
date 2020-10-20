const url = require("url");

const myUrl = new URL("http://myportfolio.com/hello.html?id=100&status=active")

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
// Hostname (does not get the PORT)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add a parameters
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams)

// Loop through parameters
myUrl.searchParams.forEach((value, name)    => console.log(`${name}: ${value}`))