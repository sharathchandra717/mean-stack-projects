## setTimeout
setTimeout sets up a function to be called after a specified delay in milliseconds.  

The following code shows a quick example of setTimeout, which calls a function after 1,000 milliseconds (one second).

```
setTimeout(()=> {
    console.log('timeout completed'); 
}, 1000);
```
## setInterval
Similar to the setTimeout function is the setInterval function.

setTimeout only executes the callback function once after the specified duration.

setInterval calls the callback repeatedly after every passing of the specified duration.

The following code prints out second passed after every second.
```
setInterval(()=> { 
    console.log('interval'); 
}, 1000);
```
## setImmediate
Executes a given function immediately.   
setImmediate() is actually a special timer that runs in a separate phase of the event loop. It uses a libuv API that schedules callbacks to execute after the poll phase has completed.
```
setImmediate(() => {
  console.log('immediate'); 
})
```
