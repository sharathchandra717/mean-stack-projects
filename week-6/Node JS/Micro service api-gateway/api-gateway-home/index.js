const express = require('express');
const http = require('http');
const app = express();

app.get('/', (req, res)=>{
   res.send("<h1 align='center'>Api Gateway home</h1>");
});

app.get('/login',(req,res)=>{
    let options = {
        host: 'localhost',
        port: 4000,
        path: req.originalUrl
    };
    http.get(options, function(resp) {
        console.log("Got response: " + resp.statusCode);
        resp.setEncoding('utf8');
        resp.on("data", function(chunk) {
          res.send(chunk);
        });
      }).on('error', function(e) {
        console.log("Got error: " + e.message);
      });
});

app.all('*',(req,res)=>{ 
    res.end("<h1 align='center'>404 Oops!!!!</h1>");
});

app.listen(3000,()=>console.log("listening on 3000"));