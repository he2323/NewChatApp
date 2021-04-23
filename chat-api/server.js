const express = require("express");
const socketIo = require("socket.io");

require("./api/models/messagesModel");
require("./api/models/chatsModel");
require("./api/models/usersModel");

const connectDb = require("./connectDB");

const userRoutes = require("./api/routes/usersRoutes");
const chatRoutes = require("./api/routes/chatsRoutes");
const messageRoutes = require("./api/routes/messagesRoutes");

connectDb();
const app = express(),
  port = process.env.PORT || 8888;

app.use(express.json({ extended: true }));

const expressServer = app.listen(port, () =>
  console.log(`server is working on port: ${port}`)
);

const io = socketIo(expressServer);
app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

userRoutes(app, io);
chatRoutes(app, io);
messageRoutes(app, io);
