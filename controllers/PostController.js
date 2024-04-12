import Post from "../models/PostModels.js";

const TambahData = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);

    return res.status(201).json({
      status: "Success",
      data: newPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.errors,
    });
  }
};

const TampilPost = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({
      status: "Success",
      data: posts,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.errors,
    });
  }
};

const DetailPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json({
      status: "Success",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.errors,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const updateData = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      status: "Success",
      data: updateData,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.errors,
    });
  }
};

export { TambahData, TampilPost, DetailPost, updatePost };
