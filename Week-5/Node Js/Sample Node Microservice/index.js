const express = require('express');
let BodyParser = require('body-parser');
let app =express();
app.use(BodyParser.json({limit:"10mb"}));
app.use("/student",require("./student"));
app.get('/',(req,res)=>{
    res.send('THOR the mighty avenger');
});
app.listen(3000,()=>console.log('listening on 3000'));
