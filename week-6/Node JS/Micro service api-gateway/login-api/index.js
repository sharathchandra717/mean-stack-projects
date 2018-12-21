const express = require('express');
const http = require('http');
const app = express();

app.get('/login', (req, res)=>{
    let reponse="";
    let options = {
        host: 'localhost',
        port: 5000,
        path: req.originalUrl
    };
    if(req.query.pass == "12345"){
        reponse += "<h3>Success logged in as "+req.query.user+"</h3><br>";
        http.get(options, function(resp) {
            console.log("Got response: " + resp.statusCode);
            resp.setEncoding('utf8');
            resp.on("data", function(chunk) {
              reponse += chunk;
              res.send(reponse);
            });
          }).on('error', function(e) {
            console.log("Got error: " + e.message);
          });
    }
    else{
        res.send("<h3>Failed</h3>");
    }
});

app.listen(4000,()=>console.log("listening on 4000"));