## Promise
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not 
resolved (e.g., a network error occurred).   
A promise may be in one of 3 possible states: 
  * fulfilled
  * rejected
  * pending   
  
Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.  
A Promise is a value returned by an asynchronous function to indicate the completion of the processing carried out by the 
asynchronous function.   
A promise represents the result of an asynchronous operation.  
## Example
```
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}).catch(function(err) {
  console.log(err); // Error: "It broke"
});
```
> The main advantage of promises is callback hell can be avoided
