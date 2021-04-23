"use strict"

const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nickname: { type: String, require: "Enter your nickname" },
  password: { type: String, require: "Enter your password" },
  name: { type: String, require: "Enter your name" },
  image_link: {
    type: String,
    default:
      "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
  },
  email: { type: String, require: "Enter your email" },
  friends: [{ type: Schema.Types.ObjectId, default: 0 }],
  status: { type: Boolean, default: false },
  privilage_level: { type: Number, enum: [1, 2, 3], default: 1 },
});
module.exports = mongoose.model("UserModel", UserSchema);
