const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login", express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log("MIDDLEWARE");
  next();
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.listen(3000);
