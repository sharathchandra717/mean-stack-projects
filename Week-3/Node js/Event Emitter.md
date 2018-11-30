## EventEmitter Object
You can assign event handlers to your own events with the EventEmitter object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the emit() method.

#### Example
```
const events = require('events');
let eventEmitter = new events.EventEmitter();

//Create an event handler:
let myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');  //I hear a scream!
```
