import express from "express";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";
const app = express(),
  port = process.env.PORT || 3333;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localost/betterChat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());




app.listen(port);

console.log("server is working on port: " + port);
console.log(global.history);