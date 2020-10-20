const EventEmitter = require("events")
// File this on logger.js & index.js for an extended example of an event emitter.
// Create class

class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", ()    => console.log("event fired!!!"))


// Init event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");