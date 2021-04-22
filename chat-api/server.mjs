import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import MessageModel from "./api/models/messagesModel.mjs"
import ChatsModel from "./api/models/chatsModel.mjs"
import UsersModel from "./api/models/usersModel.mjs"

import userRoutes from "./api/routes/usersRoutes.mjs";
import chatRoutes from "./api/routes/chatsRoutes.mjs";
import messageRoutes from "./api/routes/messagesRoutes.mjs";

const app = express(),
  port = process.env.PORT || 3333;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localost/betterChat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
userRoutes(app);
chatRoutes(app);
messageRoutes(app);

app.use(bodyParser.json());

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});
app.listen(port);

console.log("server is working on port: " + port);
