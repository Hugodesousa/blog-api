const { userSevice } = require('../service');
const { createToken } = require('../utils/jwt.util');

const login = async (req, res) => {
  const result = await userSevice.checkLogin(req.body);
  const { password: _, ...userNotPassWord } = result.dataValues;
  const myToken = createToken(userNotPassWord);
  return res.status(200).json({ token: myToken });
};

module.exports = {
  login,
};