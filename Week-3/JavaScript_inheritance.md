# JavaScript Inheritance
```
// Employee will be the base object (Similar to base class in c#)
var Employee = function (name) 
{
    this.name = name;
}

// getName() function is added to the base object (Employee)
Employee.prototype.getName = function () 
{
    return this.name;
}

// PermanentEmployee will be the derived object
var PermanentEmployee = function (annualSalary) 
{
    this.annualSalary = annualSalary;
}

// Use prototype to associate Employee as the base object for PermanentEmployee
PermanentEmployee.prototype = new Employee("Mark");

var pe = new PermanentEmployee(50000);
// Derived object (permanentEmployee) can see the base object (Employee) getName() method
console.log(pe.getName());
console.log(pe instanceof Employee); // Returns true
console.log(pe instanceof PermanentEmployee); // Returns true
```
