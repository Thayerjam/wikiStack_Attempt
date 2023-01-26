const express = require("express");
const path = require("path");
express.urlencoded({ extended: false });
const app = express();
const morgan = require("morgan");
const { db } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<a>Test me bro</a>");
});

const PORT = 3000;

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
