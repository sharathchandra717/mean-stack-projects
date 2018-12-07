const express = require("express");
const socket = require("socket.io");
let app=express();
let server = app.listen(3000,function(){
    console.log("listening on port: 3000");
});

app.use(express.static('Client'));

var io=socket(server);
io.on("connection", function(socket){
    socket.on("message", function(msg){    
    io.emit("message", msg);
  });
});