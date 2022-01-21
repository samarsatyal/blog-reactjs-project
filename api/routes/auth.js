const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
//---------
router.post("/register", async (req, res) => {
  //when using async.. use try-catch block for error handling
  try {
    const salt = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      //since the user can pass any data besides what we want, we want to specify the type of data that can be passed by the user.
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save(); // save the user with given information in mongo db.
    res.status(200).json(user); // once successful, send 200
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
//---------
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res
        .status(400)
        .json(
          "Incorrect Credentials! Please use valid credentials and try again."
        );
    }
    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      res
        .status(400)
        .json(
          "Incorrect Credentials! Please use valid credentials and try again."
        );
    } else {
      const { password, ...allButPassword } = user._doc; // Not adding this line will return the actual PW to the user once login is successful.
      res.status(200).json(allButPassword);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
