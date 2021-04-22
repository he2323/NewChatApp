import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, require: "Message text is required" },
  chat: { type: Schema.Types.ObjectId, require: "Chat id is required" },
  sender: { type: Schema.Types.ObjectId, require: "sender id is required" },
});

export default mongoose.model("MessageModel", MessageSchema);
