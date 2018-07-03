const express = require("express");
const bodyparser = require("body-parser");

let app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use("/login", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello, my application!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  //do some database process
  res.redirect("/");
});

app.listen(3000, () => console.log("Server is running at port 3000"));
