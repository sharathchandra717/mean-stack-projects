## Third-party middleware
### body-parser
Node.js body parsing middleware.  
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
```
const express = require('express')
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.post('/api/users', function(req, res) {
  res.send("Hello "+req.body.firstname + ' ' + req.body.lastname);
});
app.listen(3000,()=>console.log("listening on 3000"));
```
```
URL:
localhost:3000/api/users
body:
{
"firstname":"Sharath",
"lastname":"Chandra"
}
```
```
Output(on postman):

Hello Sharath Chandra
```
