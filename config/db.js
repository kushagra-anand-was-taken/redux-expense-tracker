const mongoose = require("mongoose");
const config = require("config");
const db = config.get("MONGOURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("connected....");
  } catch (error) {
    return console.log(error.message);
  }
};

module.exports = connectDB;
