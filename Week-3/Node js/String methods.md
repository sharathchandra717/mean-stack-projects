# String Methods
## String Length
The length property returns the length of a string:

#### Example
```
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```
## Finding a String in a String
The **indexOf()** method returns the index of (the position of) the first occurrence of a specified text in a string:

#### Example
```
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```
> JavaScript counts positions from zero.  
>0 is the first position in a string, 1 is the second, 2 is the third ...

The **lastIndexOf()** method returns the index of the last occurrence of a specified text in a string:

#### Example
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
> Both indexOf(), and lastIndexOf() return -1 if the text is not found.

#### Example
```
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
```
> Both methods accept a second parameter as the starting position for the search:

#### Example
```
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15);
```
## Searching for a String in a String
The **search()** method searches a string for a specified value and returns the position of the match:

#### Example
```
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```

The two methods are NOT equal. These are the differences:

* The search() method cannot take a second start position argument.
* The indexOf() method cannot take powerful search values (regular expressions).


## Extracting String Parts
There are 3 methods for extracting a part of a string:

* slice(start, end)
* substring(start, end)
* substr(start, length)

### slice()
extracts a part of a string and returns the extracted part in a new string.  
The method takes 2 parameters: the starting index (position), and the ending index (position).  
This example slices out a portion of a string from position 7 to position 13:

#### Example
```
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
```
The result of res will be:
```
Banana
```
> If a parameter is negative, the position is counted from the end of the string.  
> This example slices out a portion of a string from position -12 to position -6:

#### Example
```
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
```
The result of res will be:
```
Banana
```
> If you omit the second parameter, the method will slice out the rest of the string:

#### Example
```
var res = str.slice(7);
```
> or, counting from the end:

#### Example
```
var res = str.slice(-12);
```

### substring()
substring() is similar to slice().  

The difference is that substring() cannot accept negative indexes.

#### Example
```
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
```
The result of res will be:
```
Banana
```
> If you omit the second parameter, substring() will slice out the rest of the string.
> The difference is that the second parameter specifies the length of the extracted part.

#### Example
```
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
```
The result of res will be:
```
Banana
```
> If you omit the second parameter, substr() will slice out the rest of the string.

#### Example
```
var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
```
The result of res will be:
```
Banana, Kiwi
```
> If the first parameter is negative, the position counts from the end of the string.

#### Example
```
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
```
The result of res will be:
```
Kiwi
```
### replace
The replace() method replaces a specified value with another value in a string:

#### Example
```
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```
> The replace() method does not change the string it is called on. It returns a new string.  
> By default, the replace() function replaces only the first match:

#### Example
```
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```
> By default, the replace() function is case sensitive. Writing MICROSOFT (with upper-case) will not work:

#### Example
```
str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");
```
> To replace case insensitive, use a regular expression with an /i flag (insensitive):

#### Example
```
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
```
> Note that regular expressions are written without quotes.  

> To replace all matches, use a regular expression with a /g flag (global match):

#### Example
```
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
```


## Converting to Upper and Lower Case
### toUpperCase()
A string is converted to upper case with toUpperCase():

#### Example
```
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
```
### toLowerCase
A string is converted to lower case with toLowerCase():

#### Example
```
var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
```
### concat() 
concat() joins two or more strings:

#### Example
```
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
```
> The concat() method can be used instead of the plus operator. These two lines do the same:

#### Example
```
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");
```
> All string methods return a new string. They don't modify the original string.  
>Formally said: Strings are immutable: Strings cannot be changed, only replaced.

### String.trim()
String.trim() removes whitespace from both sides of a string.

#### Example
```
var str = "       Hello World!        ";
alert(str.trim());
```

### Extracting String Characters
There are 3 methods for extracting string characters:

* charAt(position)
* charCodeAt(position)
* Property access [ ]
### charAt()
The charAt() method returns the character at a specified index (position) in a string:

#### Example
```
var str = "HELLO WORLD";
str.charAt(0);            // returns H
```
### charCodeAt()
The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

#### Example
```
var str = "HELLO WORLD";

str.charCodeAt(0);         // returns 72
```
### Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:

#### Example
```
var str = "HELLO WORLD";
str[0];                   // returns H
```

> It makes strings look like arrays (but they are not)  
> If no character is found, [ ] returns undefined, while charAt() returns an empty string.  
> It is read only. str[0] = "A" gives no error (but does not work!)
#### Example
```
var str = "HELLO WORLD";
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H
```
> If you want to work with a string as an array, you can convert it to an array.

#### Converting a String to an Array
A string can be converted to an array with the split() method:

#### Example
```
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
```
