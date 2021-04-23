"use strict";

const asdasda = (socket) => {
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
}

const pass_messages = (socket) => {
  let interval;
  if (interval) clearInterval(interval);
  interval=setInterval(()=> {}, 1000)
};

module.exports = { pass_messages };
