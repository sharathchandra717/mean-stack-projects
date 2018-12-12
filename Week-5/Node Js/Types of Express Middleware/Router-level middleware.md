## Router-level middleware
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
```
var express = require('express');
var app = express();
var router = express.Router();
// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });
router.post('/', function (req, res,next) {
    res.send('hi');
});
router.get('/', function (req, res,next) {
    res.send('hi');
})
app.use('/', router);  //// mount the router on the app
app.listen(3000,()=>console.log("listening on 3000"));
```
```
output(on console):
listening on 3000
Request Type: GET  //called by browser
Request Type: POST  //called by postman
```
