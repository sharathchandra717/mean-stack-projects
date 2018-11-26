# Looping Statements
### Objects Array
```
let ar = [
    {
     first_name: "Type",
     last_name: "Script",
     age: 4
    }, 
    {
     first_name: "Java",
     last_name: "Script",
     age: 5
    }, 
    {
     first_name: "John",
     last_name: "Doe",
     age: 6
    }, 
    {
     first_name: "CSS",
     last_name: "HTML",
     age: 7
    }];
```
### for
```
for(let i = 0; i < ar.length; i++){
   console.log(ar[i]);
}
```
```
Output:

{ first_name: 'Type', last_name: 'Script', age: 4 }
{ first_name: 'Java', last_name: 'Script', age: 5 }
{ first_name: 'John', last_name: 'Doe', age: 6 }
{ first_name: 'CSS', last_name: 'HTML', age: 7 }
```
### forEach
```
ar.forEach((item) => {
console.log(item);
});
```
```
Output:

{ first_name: 'Type', last_name: 'Script', age: 4 }
{ first_name: 'Java', last_name: 'Script', age: 5 }
{ first_name: 'John', last_name: 'Doe', age: 6 }
{ first_name: 'CSS', last_name: 'HTML', age: 7 }
```
### for in
```
for (let item in ar) {
console.log(item);
}
```
```
Output:

0
1
2
3
```
### for of
```
for (let item of ar) {
console.log(item);
}
```
```
Output:

{ first_name: 'Type', last_name: 'Script', age: 4 }
{ first_name: 'Java', last_name: 'Script', age: 5 }
{ first_name: 'John', last_name: 'Doe', age: 6 }
{ first_name: 'CSS', last_name: 'HTML', age: 7 }
```
## forEach vs for loop 
* **Performance** : forEach is little slower than for loop.
* **Usability** : There is no way we can break/return from the callback in case of forEach loop.  
For example: You want to find out if a number is prime or not. I think using for loop is much more easier than using forEach loop to do this.
* **Readability** : Using for loop makes code more readable than having forEach in code.
* **Browser compatibility** : forEach is Not supported in IE < 9 So that introduces some shim in our code.






