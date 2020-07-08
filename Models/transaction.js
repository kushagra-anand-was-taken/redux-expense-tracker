const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  text: {
    type: String,
    trim: true,
    required: [true, "please add some text"],
  },

  amount: {
    type: Number,
    trim: true,
    required: [true, "please provide a number"],
  },
  time: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("expense", trackerSchema);

module.exports = Transaction;
