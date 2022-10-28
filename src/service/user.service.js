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

  console.log(result);
return result;
};

//   const { password, ...userNotPassWord } = data;

module.exports = {
  checkLogin,
  createUser,
  getAll,
};
