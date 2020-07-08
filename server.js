const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

connectDB();
app.use(express.json({ extended: false }));

app.use("/user", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/transaction", require("./routes/transaction"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
