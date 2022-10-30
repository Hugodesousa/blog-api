const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const { password, ...userNotPassWord } = data;
  const token = jwt.sign({ userNotPassWord }, process.env.JWT_SECRET);
  return token;
};

const readingToken = (token) => {
  const secret = process.env.JWT_SECRET;
  const userData = jwt.verify(token, secret);
  return userData.userNotPassWord;
};

module.exports = {
  createToken,
  readingToken,
};