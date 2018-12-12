## Error-handling middleware
Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):
```
const app = require('express')();

app.get('/', function(req, res, next) {
  // This middleware throws an error, so Express will go straight to
  // the next error handler
  throw new Error('Woops');
});

app.use(function(error, req, res, next) {
  // Any request to this server will get here, and will send an HTTP
  // response with the error message 'woops'
  console.error(error.stack);
  res.status(500).send(error.message+': Something broke!');
});

app.listen(3000,()=>console.log("listening on 3000"));
```
```
output(on console):
listening on 3000
Error: Woops
//error stack

output(on browser):
Woops: Something broke!
```
