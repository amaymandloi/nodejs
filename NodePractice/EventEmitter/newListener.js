const events = require('events');
const eventEmitter = new events.EventEmitter();
const listner1 = function listner1() {
   console.log('listner1 executed.');
}

const listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind listner1 function
eventEmitter.addListener('connection', listner1);
// Bind listner2 function

eventEmitter.on('connection', listner2);

let eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit('connection');
// Remove listner1
eventEmitter.removeListener('connection', listner1);

console.log("Listner1 will not listen now.");
// Fire connection 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");