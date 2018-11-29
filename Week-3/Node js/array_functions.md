### Let us consider some sample arrays 
```
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
```
## map()
The map() method creates a new array with the results of calling a function for every array element.  
The map() method calls the provided function once for each element in an array, in order.

> **Note:** map() does not execute the function for array elements without values.

> **Note:** map() does not change the original array.
#### Example
```
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
```
## filter()
filter() function is used to create a new array from a given array consisting of only those elements from the 
given array which satisfy a condition set by the argument function.
#### Example
```
const canVote = ages.filter(age => age >= 18);
const retailCompanies = companies.filter(company => company.category === 'Retail');
```
## reduce()
The reduce() method reduces the array to a single value.  
The reduce() method executes a provided function for each value of the array (from left-to-right).  
The return value of the function is stored in an accumulator (result/total).  
> *Note:* reduce() does not execute the function for array elements without values.
```
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
```
