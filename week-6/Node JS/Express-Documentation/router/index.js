const express=require('express');
const app=express();
var router=express.Router();
let BodyParser=require('body-parser');
app.use(router);
app.use(BodyParser.json({limit:"10mb"}));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.static('files'));
const students=require('./students.json');

router.get('/',(req,res)=>{
    res.send(`<h1>Express Router Properties and Methods</h1><br>
        try these:<br>
        <a href='http://localhost:3000/students/1'>http://localhost:3000/students/1</a><br>
        <a href='http://localhost:3000/user/2'>http://localhost:3000/user/2</a>(output in console)<br>
        <a href='http://localhost:3000/route/3'>http://localhost:3000/route/3</a>
    `);
});

router.get('/router',(req,res)=>{
	res.send("This is router");
});

router.get('/students/:id',(req,res)=>{
    let temp=students.find(x=>x.id==req.params.id);
    res.send("Id: "+temp.id+"<br>Name: "+temp.name);
});
router.post('/students',(req,res)=>{
    let body=req.body;
    let i=students.findIndex(x=>x.id==body.id)
    if(i===-1){
        students.push(body)
    }
    else{
        students[i]=body;
    }
    res.json(students);
});
router.put('/students/:id',(req,res)=>{
    let body=req.body;
    let i=students.findIndex(x=>x.id==req.params.id)
    students[i].name=body.name;
    res.json(students[i]);
});
router.delete('/students/:id',(req,res)=>{
    let s=students.findIndex(x=>x.id==req.params.id);
    students.splice(s,1);
    res.json(students);
});

router.get('/user/:id', function (req, res, next) {
    console.log('this matches '+req.params.id);
    next();
});
  

router.route('/route/:id').all((req,res,next)=>{
    res.send("Routed to "+req.params.id);
    next();
});

router.use(function(req, res, next) {
    console.log('Method: %s\nURL: %s\nPath %s', req.method, req.url, req.path);
    next();
});

router.all('/*',(req,res)=>{
    res.end("Not found or Invalid");
});
app.listen(3000,()=>console.log("Listening on 3000"));
