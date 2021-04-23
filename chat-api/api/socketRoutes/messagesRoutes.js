const Message = require("../socketControllers/messagesController");

module.exports = (io) => {
  io.on("messages", Message.pass_messages);
  io.on("", () => {});
};
