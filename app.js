const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mailchimp = require("@mailchimp/mailchimp_marketing"); // to require mailchimp_marketing !!

const app = express();

app.use(express.static("public")); // we need to use express.static fn to serve up static files
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
})

<<<<<<< HEAD
mailchimp.setConfig({

  apiKey: "ae1c785c3494102f26b92c1d51466803-us13",

  server: "us13"

});

=======
>>>>>>> 114410d189aad3cd09ba3c4a5a827ff804240edb
app.post("/", (req,res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
<<<<<<< HEAD
  const listId = "fbb15baff9";

  const subscribingUser = {

    firstName: firstName,

    lastName: lastName,

    email: email;

  };
=======
  console.log(firstName,lastName,email);
>>>>>>> 114410d189aad3cd09ba3c4a5a827ff804240edb
})

app.listen(8000,() =>{
  console.log("Server is running on 8000");
})

// API KEY = ae1c785c3494102f26b92c1d51466803-us13
// list id = fbb15baff9
