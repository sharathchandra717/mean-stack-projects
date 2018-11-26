# Immediately-invoked function expression
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.  
The parenthesis () plays important role in IIFE pattern. In JavaScript, parenthesis cannot contain statements; it can only contain an expression.
```
let param = "Ben Tenyson";

(function (name) {
    console.log(name);      //Outputs: "Ben Tenyson"
})(param);
```
