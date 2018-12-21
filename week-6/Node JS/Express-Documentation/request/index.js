let express = require("express");
let app = express();

app.get('/output',(req,res)=>{
    res.send(`${req.app}<br>
        ${req.baseUrl}<br>
        ${req.body}<br>
        ${req.cookies}<br>
        ${req.fresh}<br>
        ${req.hostname}<br>
        ${req.ip}<br>
        ${req.ips}<br>
        ${req.method}<br>
        ${req.originalUrl}<br>   
        ${req.params}<br>
        ${req.path}<br>
        ${req.protocol}<br>
        ${req.query}<br>
        ${req.route}<br>
        ${req.secure}<br>
        ${req.signedCookies}<br>
        ${req.stale}<br>
        ${req.subdomains}<br>   
        ${req.xhr}<br>`
    );
});

app.get('/route1',(req,res,next)=>{
    console.log(req.originalUrl); 
    console.log(req.baseUrl); 
    console.log(req.path);
    console.log(req.query.name);
    console.log(req.route);
    next();
});

app.get('/',(req,res)=>{
    console.log(req.fresh);
    console.log(req.stale);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.subdomains);
    console.log(req.originalUrl); 
    console.log(req.baseUrl); 
    console.log(req.path);
    console.log(req.route);
    console.log(req.xhr);
    res.send("<h1>Request Demo</h1>");
});

app.listen(3000, () => console.log("listenning on 3000"));