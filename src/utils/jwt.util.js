const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const { password, ...userNotPassWord } = data;
  const token = jwt.sign({ userNotPassWord }, process.env.JWT_SECRET);
  return token;
};

module.exports = {
  createToken,
};