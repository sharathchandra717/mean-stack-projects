![image](https://colintoh.com/content/blog/10-staying-sane-with-asynchronous-programming-promises-and-generators/callback.gif)  
# Callback Hell
The situation where callbacks are nested within other callbacks several levels deep, potentially making it difficult to understand and maintain the code.  
Callback Hell, also known as Pyramid of Doom.  
## Example
```
getData(function(a){  
    getMoreData(a, function(b){
        getMoreData(b, function(c){ 
            getMoreData(c, function(d){ 
                getMoreData(d, function(e){ 
                    ...
                });
            });
        });
    });
})
```
## Disadvantages
* As nested callbacks are present in the code, the stack will be overflowed in the event loop.
* Readability of the code comes down.
* Very difficult to debug.
