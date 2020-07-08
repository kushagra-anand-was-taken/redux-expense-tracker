const express = require("express");
const Transaction = require("../Models/transaction");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const all = await Transaction.find({
    user: req.user.id,
  });
  try {
    if (all.length === 0) {
      throw new Error();
    }
    res.send(all);
  } catch (error) {
    res.status(404).send("there is nothing here");
  }
});

router.post("/", auth, async (req, res) => {
  const { text, amount } = req.body;
  try {
    const transaction = new Transaction({ user: req.user.id, text, amount });

    await transaction.save();
    res.send(transaction);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.send(messages);
    }
    res.status(400).send();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(404).send("user not found");
    }
    await transaction.remove();
    res.send(transaction);
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = router;
