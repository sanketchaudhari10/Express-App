const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 8080;

// app.use("/static", express.static("static"));
app.use(express.static(__dirname + "/static"));
// app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/" || "/index.html" || "/index" || "home", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "static/index.html"));
});
app.get("/about" || "/about.html", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "static/about.html"));
});
app.get("/contact" || "/contact.html", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "static/contact.html"));
});
app.get("/plan" || "/plan.html", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "static/plan.html"));
});
app.get("/service" || "/service.html", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "static/service.html"));
});

app.get("*", function (req, res) {
  res.redirect("/");
});

app.post("/contact.html", (req, res) => {
  res.render(path.join(__dirname, "views/msg.pug"), {
    name: `   Name :   ${req.body.name}`,
    mail: `   Mail :   ${req.body.mail}`,
    mobile: `    Contact no :   ${req.body.mobile}`,
    msg: `    Message :    ${req.body.msg}`,
  });
  //   console.log(req.body);
});
app.listen(port, () => {
  console.log(
    `The application started successfully on http://${hostname}:${port}`
  );
});
