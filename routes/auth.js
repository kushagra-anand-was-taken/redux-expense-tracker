const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../Models/Users");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
});

router.post(
  "/",
  [
    check("email", "Please include an email").isEmail(),
    check(
      "password",
      "please enter password with length greater than 6"
    ).exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: [{ msg: " invalid credentials" }] });
      }

      const ismatch = await bcrypt.compare(password, user.password);
      if (!ismatch) {
        return res
          .status(400)
          .json({ error: [{ msg: "invalid credentials" }] });
      }

      const payload = {
        user: {
          id: user._id,
        },
      };
      jwt.sign(
        payload,
        config.get("JWTSecret"),
        { expiresIn: 654654 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).send("server error");
    }
  }
);
module.exports = router;
