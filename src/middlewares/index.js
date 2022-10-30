const userMiddleWare = require('./user.middleWare');
const authMiddleWare = require('./auth.middleWare');
const errorMiddleWare = require('./error.middleWare');
const postMiddleWare = require('./post.middleWare');

module.exports = {
  userMiddleWare,
  authMiddleWare,
  errorMiddleWare,
  postMiddleWare,
};