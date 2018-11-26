# Different ways of creating javascript objects
## Using an Object Literal
This is the easiest way to create a JavaScript Object.  

Using an object literal, you both define and create an object in one statement.  

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.  

The following example creates a new JavaScript object with four properties:  

#### Example
```
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```
Spaces and line breaks are not important. An object definition can span multiple lines:  

#### Example
```
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
```
## Using the JavaScript Keyword new
The following example also creates a new JavaScript object with four properties:  

#### Example
```
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```
The two examples above do exactly the same. There is no need to use new Object().  
For simplicity, readability and execution speed, use the first one (the object literal method).  

## JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.  

If person is an object, the following statement will not create a copy of person:  
```
var x = person;  // This will not create a copy of person.
```
The object x is not a copy of person. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.

#### Example
```
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person;
x.age = 10;           // This will change both x.age and person.age
```
