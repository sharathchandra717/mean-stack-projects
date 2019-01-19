const express = require('express');
const app = express();
const port = 3000;

let bodyParser = require('body-parser');
app.use(bodyParser.json({limit:"10mb"}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use("/results" , require("./routes/results"));
app.use("/answers" , require("./routes/answers"));
app.use("/questions" , require("./routes/questions"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
