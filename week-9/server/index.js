const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let bodyParser = require('body-parser');
app.use(bodyParser.json({limit:"10mb"}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use("/houses",require("./routes/houses"));
app.use("/visiting",require("./routes/visiting"));
app.use("/users",require("./routes/users"));

app.get("/",(req,res)=>{
  res.send("Hello");
});

app.listen(PORT, function() {
  console.log('listening on port %s.', PORT);
});