## call()
With the **call()** method, you can write a method that can be used on different objects.
```
let obj = {num:5};

let addToThis = function(a,b,c){
    return this.num+a+b+c;
};

console.log(addToThis.call(obj,2,3,4));
```
## apply()
With the **apply()** method, you can write a method that can be used on different objects.  
The apply() method is similar to the call() method
```
let obj = {num:5};
let addToThis = function(a,b,c){
    return this.num+a+b+c;
};
let  arr=[2,3,4];
console.log(addToThis.apply(obj,arr));
```
### The Difference Between call() and apply()

The **call()** method takes arguments separately.

The **apply()** method takes arguments as an array.
## bind()
bind() returns a bound function that, when executed later, will have the correct context ("this") for calling the original function. So bind() can be used when the function needs to be called later in certain events when it's useful.
```
let obj = {num:5};

let addToThis = function(a,b,c){
    return this.num+a+b+c;
};

let bound = addToThis.bind(obj);
bound(2,3,4);
```
