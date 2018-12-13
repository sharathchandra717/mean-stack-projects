## Built-in middleware
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
```
const express = require('express');
let app = express();

app.get('/', function(req, res, next) {
  res.send("Hello world");
});

app.use(express.static('files'));

app.listen(3000,()=>console.log("listening on 3000"));
```
