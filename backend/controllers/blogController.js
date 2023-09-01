const Post = require("../models/Post");
const mongoose = require("mongoose");

// get all Blog
const getBlogs = async (req, res) => {
  const blogs = await Post.find({})
    .populate("author", ["username"])
    .sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

//get a single blog

const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }

  const blog = await Post.findById(id).populate("author", ["username"]);

  if (!blog) {
    return res.status(404).json({ error: "no such blog" });
  }

  res.status(200).json(blog);
};

//delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }

  const blog = await Post.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "no such blog" });
  }

  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  getBlog,
  deleteBlog,
};
