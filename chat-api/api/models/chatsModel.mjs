import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  name: { type: String, require: "Enter chat name" },
  image_link: { type: String, default: "chat name" },
  members: {
    type: [{ type: Schema.Types.ObjectId, ref: "UserModel" }],
    validate: [minimumMembers, "{PATH} has not enought members"],
  },
  create_date: Date.now(),
});

const minimumMembers = (arr) => arr.length >= 2;

export default mongoose.model("ChatModel", ChatSchema);


