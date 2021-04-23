"use strict"
const mongoose = require("mongoose");
const Message = mongoose.model("MessageModel");

const send_message = (req, res) => {
  const new_message = new Message(req.body);
  new_message.save((error, message) => {
    if (error) {
      res.send(error);
      return;
    }
    res.json(message);
  });
};
const list_messages = (req, res) =>
  Message.find({ chat: req.body.chatId })
    .sort({ _id: -1 })
    .limit(req.body.pagination || 10)
    .exec((error, messages) => {
      if (error) {
        res.send(error);
        return;
      }
      res.json(messages);
    });
const delete_message = (req, res) =>
  Message.findByIdAndDelete(req.params.messageId, (error, message) => {
    if (error) {
      res.send(error);
      return;
    }
    res.json({
      message: `Message: ${message} was successfully deleted. Be happy!`,
    });
  });
const edit_message = (req, res) =>
  Message.findByIdAndUpdate(
    req.params.messageId,
    { text: req.body.text },
    (error, message) => {
      if (error) {
        res.send(error);
        return;
      }
      res.json({ message: `Edited message ${message}` });
    }
  );
module.exports = { send_message, edit_message, delete_message, list_messages };
