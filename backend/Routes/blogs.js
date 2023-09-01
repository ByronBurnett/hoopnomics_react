const express = require("express");
const Post = require("../models/Post");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");
const {
  getBlogs,
  getBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

//require auth for all blog routes
router.use(requireAuth);

//Get all Blogs
router.get("/", getBlogs);

//Get a single blog
router.get("/:id", getBlog);

//Post a new  blog
router.post("/", upload.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { title, summary, content } = req.body;

  //add doc to db
  try {
    const author = req.user._id;

    const blog = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author,
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete a new  blog
router.delete("/:id", deleteBlog);

//Update a blog
router.patch("/:id", upload.single("file"), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }

  const blog = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }
  res.status(200).json(blog);
});

module.exports = router;
