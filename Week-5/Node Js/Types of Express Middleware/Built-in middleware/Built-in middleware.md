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
### Output on Browser
`http://localhost:3000/WP_Thunder_Warrior-2560x1440_00000.jpg`

![output](https://raw.githubusercontent.com/sharathchandra717/Berkadia-Assignments/master/Week-5/Node%20Js/Types%20of%20Express%20Middleware/Built-in%20middleware/output.png)
