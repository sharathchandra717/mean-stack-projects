## Application-level middleware
```
var express = require('express')
var app = express()

app.use(function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });
app.post('/', function (req, res,next) {
    res.send('hi');
});
app.get('/', function (req, res,next) {
    res.send('hi');
})
app.listen(3000,()=>console.log("listening on 3000"));
```
```
output:
listening on 3000
Request Type: GET   // called by browser
Request Type: POST  //called by postman
```
