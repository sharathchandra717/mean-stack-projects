const express = require('express');
const app = express();

app.get('/login', (req, res)=>{
   if(req.query.user == "admin"){
       res.send("You have <b>administrator</b> privileges");
   }
   else{
       res.send("You have <b>Normal</b> User privileges");
   }
});

app.listen(5000,()=>console.log("listening on 5000"));