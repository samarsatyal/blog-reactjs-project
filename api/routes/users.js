const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post"); //Post required so that when user is deleted then associated posts are also deleted for the user.
const bcrypt = require("bcrypt");

/* GET USER
------------- */
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...allButPassword } = user._doc;
    res.status(200).json(allButPassword);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* UPDATE USER DATA
-------------------- */
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(11);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your own account.");
  }
});

/* DELETE
------------ */
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username }); // for the given username (user) delete all associated posts as well.
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can only delete your own account.");
  }
});

module.exports = router;
