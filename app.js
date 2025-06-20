const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/connectdb");
const mongoose = require("mongoose");
const index = require("./routes/index");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const PORT = process.env.PORT;//3000
// app.js
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());
db();
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
}));

app.use("/", index);


app.listen(PORT, (err) => {
  if (err) return console.log(err);
  else console.log("Server is running at PORT:", PORT);
});