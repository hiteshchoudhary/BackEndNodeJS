const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about-us", (req, res) => {
  //res.status(200).json({ user: "shyam", balance: "2000", id: "123ght56" });
  res.status(500).json({ error: "Something went wrong" });
});

app.get("/ab*cd", (req, res) => {
  res.send("<h1>I am a regex page.</h1>");
});

app.get("/user/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});

app.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

app.post("/login", (req, res) => {
  res.send("login success");
});

//create route for contact us and services
//create a delete route and test it using postman

app.listen(3000, () => console.log("Server is running at port 3000...."));
