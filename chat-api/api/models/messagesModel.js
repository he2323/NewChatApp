"use strict"
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, require: "Message text is required" },
  time: { type: Date, default: Date.now() },
  chat: { type: Schema.Types.ObjectId, require: "Chat id is required" },
  sender: { type: Schema.Types.ObjectId, require: "sender id is required" },
});

module.exports = mongoose.model("MessageModel", MessageSchema);
