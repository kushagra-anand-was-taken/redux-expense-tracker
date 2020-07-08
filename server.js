const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("api running");
});

app.use("/user", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/transaction", require("./routes/transaction"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
