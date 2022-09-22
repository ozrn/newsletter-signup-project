const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public")); // we need to use express.static fn to serve up static files

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
})


app.listen(8000,() =>{
  console.log("Server is running on 8000");
})
