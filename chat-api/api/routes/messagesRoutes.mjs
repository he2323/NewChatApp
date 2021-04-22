import * as message from "../controllers/messagesController.mjs";
const messagesRoutes = (app) => {
  app.route("/message").post(message.send_message).get(message.list_messages);

  app
    .route("/message/:messageId")
    .delete(message.delete_message)
    .put(message.edit_message);
};

export default messagesRoutes;
