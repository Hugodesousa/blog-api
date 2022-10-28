const { userSevice } = require('../service');
const { createToken } = require('../utils/jwt.util');

const login = async (req, res) => {
  const result = await userSevice.checkLogin(req.body);
  const myToken = createToken(result.dataValues);
  return res.status(200).json({ token: myToken });
};

const newUser = async (req, res) => {
  const result = await userSevice.createUser(req.body);
  const myToken = createToken(result);
  return res.status(201).json({ token: myToken });
};

const getAllUser = async (req, res) => {
  const result = await userSevice.getAll();
return res.status(200).json(result);
};

module.exports = {
  login, 
  newUser,
  getAllUser,
};