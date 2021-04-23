const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

module.exports = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};
