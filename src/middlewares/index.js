const userMiddleWare = require('./user.middleWare');
const authMiddleWare = require('./auth.middleWare');
const errorMiddleWare = require('./error.middleWare');

module.exports = {
  userMiddleWare,
  authMiddleWare,
  errorMiddleWare,
};