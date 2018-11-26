# Async/await
There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy 
to understand and use.  

## Async functions
It can be placed before a function, like this:
```
async function f() {
  return 1;
}
```
The word “async” before a function means one simple thing: a function always returns a promise. If the code has return <non-promise> 
in it, then JavaScript automatically wraps it into a resolved promise with that value.  

For instance, the code above returns a resolved promise with the result of 1, let’s test it:
```
 async function f() {
  return 1;
}

f().then(alert); // 1
```
We could explicitly return a promise, that would be the same:
```
 async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```
So, async ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only 
that. There’s another keyword, await, that works only inside async functions, and it’s pretty cool.

## Await
Syntax:
```
// works only inside async functions
let value = await promise;
```
The keyword await makes JavaScript wait until that promise settles and returns its result.  
Here’s an example with a promise that resolves in 1 second:
```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait till the promise resolves (*)

  alert(result); // "done!"
}

f();
```
The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. 
So the code above shows “done!” in one second.

Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. 
That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.
