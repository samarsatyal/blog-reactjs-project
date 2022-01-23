const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

/* CREATE NEW POST
------------------- */
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* UPDATE A USER'S POST
------------------------ */
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only update your own post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE POST
------------ */
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted.");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete your own post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

/* 
GET POST
--------- */
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL AVAILABLE POSTS
--------------------------- */
router.get("/", async (req, res) => {
  const username = req.query.user; //example: /api/posts?user=john
  const categoryName = req.query.cat; //example: /api/posts?cat=music
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
