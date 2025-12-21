require('dotenv').config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Welcome to Twitter");
});
app.get("/facebook", function (req, res) {
  res.send("Welcome to Facebook");
});
app.get("/login",(req,res)=>{
    res.send('<h1> Please Login to Continue </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
