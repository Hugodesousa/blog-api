const { postService } = require('../service');

const newPost = async (req, res) => {
  const { authorization } = req.headers;
  const result = await postService.createPost(req.body, authorization);
  return res.status(201).json(result);
};

module.exports = {
 newPost,
};