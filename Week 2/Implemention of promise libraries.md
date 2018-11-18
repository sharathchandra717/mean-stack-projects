# Implementation of promises

## Bluebird
Bluebird is a fully-featured Promise library for JavaScript. The strongest feature of Bluebird is that it allows you 
to "promisify" other Node modules in order to use them asynchronously. Promisify is a concept applied to callback functions.

`npm install bluebird`  
```
var Promise=require('bluebird');
var promisereadfile=Promise.promisify(require("fs").readFile);
promisereadfile("a.js","utf8")
.then(function(fileText){
console.log(fileText);
}).catch(function(err){
console.log("error reading file",err);
)
});
```



## Q

A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing. 
This is a Promises/A+-compliant implementation of promises/deferred objects inspired by Kris Kowal's Q.
```						
var Q = require('q');
function async() {
return Q.delay(4000)
}
async()
.then(function() {
console.log('async called back');
});
```

## ES6 promise polyfill:

`npm install es6-promise-polyfill`
```
var Promise = require('es6-promise-polyfill').Promise;
var promise = new Promise(...);
```
