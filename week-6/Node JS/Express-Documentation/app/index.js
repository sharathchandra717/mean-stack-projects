const express=require('express');
const app=express(); //the parent app
let BodyParser=require('body-parser');
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
const students=require('./students.json');

app.locals.title="Express Properties and Methods";
app.locals.desc="Demonstration of Express Properties and Methods";


var admin = express(); //the sub app

admin.on('mount', function (parent) {
    console.log('Admin Mounted');
    console.log(parent); // refers to the parent app
  });

admin.get('/', function (req, res,next) {
  console.log(admin.mountpath); 
  res.send('Admin page');
  next();
});

app.use('/admin', admin);

app.get('/',(req,res)=>{
    console.log(req.app);
    res.send(`<h2> ${app.locals.title} </h2><p> ${app.locals.desc}</p>
    try these:<br>
    <a href='http://localhost:3000/students/1'>http://localhost:3000/students/1</a><br>
    <a href='http://localhost:3000/user/2'>http://localhost:3000/user/2</a>(output in console)<br>
    <a href='http://localhost:3000/route/3'>http://localhost:3000/route/3</a>
`);
});

console.log(app.path());
console.log(admin.path());


app.get('/students/:id',(req,res)=>{
    let temp=students.find(x=>x.id==req.params.id);
    res.send("Id: "+temp.id+"<br>Name: "+temp.name);
});

app.post('/students',(req,res)=>{
    let body=req.body;
    let i=students.findIndex(x=>x.id==body.id)
    if(i == -1){
        students.push(body)
    }
    else{
        students[i]=body;
    }
    res.json(students);
});

app.put('/students/:id',(req,res)=>{
    let body=req.body;
    let i=students.findIndex(x=>x.id==req.params.id)
    students[i].name=body.name;
    res.json(students);
});

app.delete('/students/:id',(req,res)=>{
    let s=students.findIndex(x=>x.id==req.params.id);
    students.splice(s,1);
    res.json(students);
});

app.disable('case sensitive routing');
console.log(app.get('case sensitive routing'));
console.log(app.disabled('case sensitive routing'));
app.enable('case sensitive routing');
console.log(app.get('case sensitive routing'));
console.log(app.enabled('case sensitive routing'));

app.get('/demo/:id', function (req, res, next) {
  console.log('this matched');
  next();
});

app.route('/route/:id').all((req,res,next)=>{
 
    res.send("Routed to "+req.params.id);
    next();
});

app.set('case sensitive routing',false);
console.log(app.get('case sensitive routing'));

app.use(function(req, res, next) {
    console.log('Method: %s\nURL: %s\nPath %s', req.method, req.url, req.path);
    next();
});


app.all('*',(req,res)=>{
    console.log("logged using app.all");
    res.end("Not found or Invalid");
});


app.listen("3000",()=>console.log("listening on port:3000"));