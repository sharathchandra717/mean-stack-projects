const express=require('express');
const app=express();
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
var cookie=require('cookie-parser');
app.use(cookie('secret'));

app.use(function(req, res, next){
    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
    res.cookie('home_page', '1', { expires: new Date(Date.now() + 90000), httpOnly: true,signed: true});
    res.locals.user = req.user;
    console.log(res.locals.user);
    next();
});

app.get('/view',(req,res)=>{
    res.cookie('name', 'tobi', { path: '/view' });
    res.clearCookie('name', { path: '/view' });
    res.location('/view');
    res.send("Welcome to Node");
    
});

app.get('/viewFile',(req,res)=>{
    res.sendFile('/Berkadia/Node/Express-Doc/response/index.js');
});

app.get('/download',(req,res)=>{
    res.download('/Berkadia/Node/Express-Doc/response/index.js');
});

app.get('/redirect',(req,res)=>{
    res.redirect('https://stackoverflow.com/');
});


app.get('/image',(req,res)=>{
    res.type('jpg');
    res.attachment('/image.jpg');
    res.send("image will be downloaded");
});

app.get('/', function (req, res) {
    console.log(res.headersSent); // false
    res.send('Hello World');
    console.log(res.headersSent); // true
});

app.listen(3000,()=>{console.log("listening on port:3000");});