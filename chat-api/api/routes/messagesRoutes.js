"use strict";

const message = require("../controllers/messagesController");
module.exports = (app, io) => {
  app.route("/message").post(message.send_message).get(message.list_messages);

  app
    .route("/message/:messageId")
    .delete(message.delete_message)
    .put(message.edit_message);
};
