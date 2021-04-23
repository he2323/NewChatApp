"use strict"
const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const minimumMembers = (arr) => arr.length >= 2;

const ChatSchema = new Schema({
  name: { type: String, require: "Enter chat name" },
  image_link: { type: String, default: "chat name" },
  members: {
    type: [{ type: Schema.Types.ObjectId, ref: "UserModel" }],
    validate: [minimumMembers, "{PATH} has not enought members"],
  },
  create_date: {type: Date, default: Date.now()},
});


module.exports = mongoose.model("ChatModel", ChatSchema);
