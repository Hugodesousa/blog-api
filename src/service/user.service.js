const { User } = require('../models');
const { validateReq, createError } = require('../utils/joiValidate.util');

const checkLogin = async (user) => {
  const { password, email } = user;
  const result = await User.findOne({ where: { password, email } });
  if (!result) {
    createError('Invalid fields', 400);
  }
  return result;
};

const createUser = async (newUser) => {
  const { email } = newUser;
  const userExist = await User.findOne({ where: { email } });
  const valid = await validateReq(newUser);
  if (userExist !== null) {
    createError('User already registered', 409);
  }
  if (valid) {
    const { dataValues } = await User.create(newUser);
    return dataValues;
  }
};

const getAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
return result;
};

const getByID = async (id) => {
  const result = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!result) {
    createError('User does not exist', 404);
  }
  return result;
};

//   const { password, ...userNotPassWord } = data;

module.exports = {
  checkLogin,
  createUser,
  getAll,
  getByID,
};
